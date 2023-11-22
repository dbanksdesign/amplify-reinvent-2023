import * as React from 'react';
import useClient from '@/hooks/useClient';
import { Button, Flex, TextField } from '@aws-amplify/ui-react';
import { CreateQuestion } from '@/components/CreateQuestion';
import { CreateQuestionInput } from '../../../graphql/API';
import QuestionCreateForm from '../../../ui-components/QuestionCreateForm';

const defaultQuestion = {
  text: '',
  answers: [],
  correctAnswer: '',
};

const convertToLocal = (date) => {
  const df = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    calendar: 'iso8601',
    numberingSystem: 'latn',
    hourCycle: 'h23',
  });
  const parts = df.formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {} as any);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
};

export default function CreateGame() {
  const { client } = useClient();
  const [questionIds, setQuestionIds] = React.useState<string[]>(['test']);
  const [questions, setQuestions] = React.useState<CreateQuestionInput[]>([
    { ...defaultQuestion },
  ]);
  // need to keep track of the question IDs as they are created

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // client.models.Test.create({})
  };

  return (
    // <QuestionCreateForm
    // onValidate={{
    //   createdAt: (value) => ({ hasError: false }),
    //   updatedAt: (value) => ({ hasError: false }),
    // }}
    // onSubmit={(fields) => {
    //   console.log(fields);
    //   return {
    //     ...fields,
    //     createdAt: convertToLocal(new Date()),
    //     updatedAt: convertToLocal(new Date()),
    //   };
    // }}
    // overrides={{
    //   createdAt: {
    //     // visibility: 'none',
    //     value: convertToLocal(new Date()),
    //   },
    //   updatedAt: {
    //     // display: 'none',
    //     value: convertToLocal(new Date()),
    //   },
    // }}
    // />
    <Flex direction="column">
      {questions.map((question, i) => {
        return <CreateQuestion key={i} question={question} />;
      })}
      <Button
        onClick={() => setQuestions([...questions, { ...defaultQuestion }])}
      >
        Add Question
      </Button>

      <Button type="submit" variation="primary">
        Create game
      </Button>
    </Flex>
  );
}
