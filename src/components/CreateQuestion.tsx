import * as React from 'react';
import useClient from '@/hooks/useClient';
import { Button, Flex, TextField } from '@aws-amplify/ui-react';

export const CreateQuestion = () => {
  const { client } = useClient();
  const textRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    console.log(textRef.current?.value);
    // client.models.Question.create({
    //   text: textRef.current?.value ? '',
    // })
  };

  return (
    <Flex direction="column">
      <TextField label="Question" ref={textRef} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Flex>
  );
};
