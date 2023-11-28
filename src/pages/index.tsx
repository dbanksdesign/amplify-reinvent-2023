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
import * as queries from '../../graphql/queries';
import { Todo } from '../../graphql/API';
import { LuDelete, LuSparkles } from 'react-icons/lu';

Amplify.configure({
  ...awsExports,
});

export default function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [thinking, setThinking] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // create todo
    client.models.Todo.create({
      // @ts-ignore
      content: e.target.todo.value,
    }).then((value) => {
      setTodos([...todos, value.data as Todo]);
      // clear the value of inputRef
      inputRef.current!.value = '';
    });
  };

  const handleDelete = (id: string) => () => {
    client.models.Todo.delete({ id });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const generateTodo = () => {
    setThinking(true);
    client
      .graphql({
        query: queries.askBedrock,
        variables: {
          todos: todos.map((todo) => todo.content ?? ''),
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
                  <View flex="1">{todo.content}</View>
                  <Button
                    variation="link"
                    colorTheme="error"
                    size="small"
                    onClick={handleDelete(todo.id)}
                  >
                    <LuDelete />
                  </Button>
                </Flex>
              </Card>
            ))}
        </Flex>
      </ScrollView>
    </Authenticator>
  );
}
