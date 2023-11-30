import * as React from 'react';
import { Amplify } from 'aws-amplify';
import {
  Authenticator,
  Button,
  Card,
  Flex,
  ScrollView,
  TextField,
  View,
} from '@aws-amplify/ui-react';
import awsExports from '../../amplifyconfiguration.json';

import { client } from '@/client';
import * as queries from '@/graphql/queries';
import { LuCheckSquare, LuSparkles, LuSquare, LuTrash } from 'react-icons/lu';
import { Schema } from '../../amplify/data/resource';

Amplify.configure({
  ...awsExports,
});

type Todo = Schema['Todo'];

export default function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [thinking, setThinking] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // create todo
    client.models.Todo.create({
      content: e.target.todo.value,
    }).then((value) => {
      setTodos([...todos, value.data]);
      // clear the value of inputRef
      inputRef.current!.value = '';
    });
  };

  const handleDelete = (id: string) => () => {
    client.models.Todo.delete({ id });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleIsDone = (id: string) => async () => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.isDone = !todo.isDone;
      await client.models.Todo.update({
        id,
        isDone: todo.isDone,
      });
      setTodos([...todos]);
    }
  };

  const generateTodo = () => {
    setThinking(true);
    client
      .graphql({
        query: queries.askBedrock,
        variables: {
          todos: todos
            .filter((todo) => !todo.isDone)
            .map((todo) => todo.content ?? ''),
        },
      })
      .then((results) => {
        setThinking(false);
        try {
          const todo: string = JSON.parse(
            results.data.askBedrock?.body ?? ''
          ).completion;

          // get the lines of returned todo that start with a number
          // and remove the number
          const suggestions = todo
            .split('\n')
            .filter((line) => {
              // true if line starts with a number
              return line.match(/^\d+/);
            })
            .map((line) => {
              // replace number . space
              return line.replace(/^\d+\. /, '');
            });
          // pick random item from suggestions
          const suggestion =
            suggestions[Math.floor(Math.random() * suggestions.length)];

          inputRef.current!.value = suggestion;
        } catch (error) {
          console.log(error);
        }
      });
  };

  React.useEffect(() => {
    client.models.Todo.list().then((results) => {
      setTodos(results.data as Todo[]);
    });
  }, []);

  return (
    <Authenticator>
      <ScrollView>
        <Flex direction="column" flex="1" padding="large">
          <View as="form" onSubmit={handleSubmit}>
            <TextField
              label="todo"
              name="todo"
              labelHidden
              placeholder="what to do"
              size="large"
              ref={inputRef}
              outerStartComponent={
                <Button
                  size="large"
                  isLoading={thinking}
                  onClick={generateTodo}
                >
                  <LuSparkles />
                </Button>
              }
              outerEndComponent={
                <Button variation="primary" type="submit">
                  Create
                </Button>
              }
            />
          </View>
          {todos
            .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
            .map((todo) => (
              <Card variation="outlined" padding="small" key={todo.content}>
                <Flex direction="row" alignItems="center">
                  <Button variation="link" onClick={handleIsDone(todo.id)}>
                    {todo.isDone ? <LuCheckSquare /> : <LuSquare />}
                  </Button>
                  <View flex="1">{todo.content}</View>
                  <Button
                    variation="link"
                    colorTheme="error"
                    onClick={handleDelete(todo.id)}
                  >
                    <LuTrash />
                  </Button>
                </Flex>
              </Card>
            ))}
        </Flex>
      </ScrollView>
    </Authenticator>
  );
}
