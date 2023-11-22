import * as React from 'react';
import { Amplify } from 'aws-amplify';
import {
  Authenticator,
  Button,
  CheckboxField,
  Flex,
  Placeholder,
  ScrollView,
  TextField,
  View,
} from '@aws-amplify/ui-react';
import awsExports from '../../amplifyconfiguration.json';

import useClient from '@/hooks/useClient';
import * as queries from '../../graphql/queries';
import { Todo } from '../../graphql/API';

Amplify.configure({
  ...awsExports,
});

export default function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { client } = useClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    // create todo
    client.models.Todo.create({
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
    client
      .graphql({
        query: queries.askBedrock,
        variables: {
          todos: todos.map((todo) => todo.content ?? ''),
        },
      })
      .then((results) => {
        try {
          const todo = JSON.parse(
            results.data.askBedrock?.body ?? ''
          ).completion;
          inputRef.current!.value = todo;
        } catch (error) {
          console.log(error);
        }
      });
  };

  React.useEffect(() => {
    client.models.Todo.list().then((results) => {
      setTodos(results.data as Todo[]);
    });
  }, [client]);

  return (
    <Authenticator>
      <ScrollView paddingBlockEnd="4rem">
        <Flex direction="column" flex="1" padding="large">
          {todos.map((todo) => (
            <View key={todo.content}>
              {todo.content}
              <Button onClick={handleDelete(todo.id)}>X</Button>
            </View>
          ))}
          <View as="form" onSubmit={handleSubmit}>
            <TextField
              label="todo"
              name="todo"
              labelHidden
              placeholder="what to do"
              ref={inputRef}
              outerEndComponent={
                <>
                  <Button onClick={generateTodo}>💫</Button>
                  <Button type="submit">Create</Button>
                </>
              }
            />
          </View>
        </Flex>
      </ScrollView>
    </Authenticator>
  );
}
