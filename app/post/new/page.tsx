'use client'

// import { API, Auth } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Button, Flex, Text, TextField } from '@aws-amplify/ui-react'
import React from 'react'
import * as mutations from '@/graphql/mutations'
import * as queries from '@/graphql/queries'

const client = generateClient();

export default function NewPostPage() {
  const [username, setUsername] = React.useState('');
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    client.graphql({
      query: mutations.createTacoRecipe,
      variables: {
        input: {
          title: titleRef.current?.value,
          description: descriptionRef.current?.value
        }
      }
    }).then(results => {
      console.log(results);
    })
  }

  React.useEffect(() => {
    // Auth.currentAuthenticatedUser().then(results => {
    //   console.log(results);
    // })
    client.graphql({
      query: queries.generateTacoRecipe,
      variables: {
        prompt: 'chicago dog'
      }
      // @ts-expect-error
    }).then(results => {
      console.log(results);
    })
  },[])

  return (
    <Flex as="form" onSubmit={handleSubmit} direction="column">
      <Text>{username}</Text>
      <TextField label="Title" ref={titleRef} />
      <TextField label="Description" ref={descriptionRef} />
      <Button type="submit">Submit</Button>
    </Flex>
  )
}
