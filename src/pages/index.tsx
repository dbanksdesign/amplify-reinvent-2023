import * as React from 'react';
import { Amplify } from 'aws-amplify';
import {
  Authenticator,
  Flex,
  Placeholder,
  ScrollView,
  View,
} from '@aws-amplify/ui-react';
import awsExports from '../../amplifyconfiguration.json';
import { PromptContainer } from '@/components/Conversation/PromptContainer';
import { ChatMessage } from '@/components/Conversation/ChatMessage';
import useClient from '@/hooks/useClient';
import { generateTacoRecipe } from '../../graphql/queries';

Amplify.configure({
  ...awsExports,
});

interface Message {
  content: React.ReactNode;
  author: 'Human' | 'Assistant';
}

export default function Home() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { client } = useClient();
  const onSendMessage = (message: string) => {
    setIsLoading(true);
    const newMessages = [
      ...messages,
      { content: message, author: 'Human' } as Message,
    ];
    setMessages(newMessages);

    const prompt = [...newMessages, { content: '', author: 'Assistant' }]
      .map((message) => {
        return `${message.author}: ${message.content}`;
      })
      .join(`\n\n`);

    client
      .graphql({
        query: generateTacoRecipe,
        variables: {
          prompt: prompt,
        },
      })
      // @ts-ignore
      .then((results) => {
        try {
          const response = JSON.parse(results.data.generateTacoRecipe);
          setMessages([
            ...newMessages,
            { content: response.completion, author: 'Assistant' },
          ]);
          setIsLoading(false);
        } catch (error) {}
      });
  };

  return (
    <Authenticator>
      <ScrollView paddingBlockEnd="4rem">
        <Flex direction="column" flex="1" padding="large">
          {messages.map((message, i) => (
            <ChatMessage key={i} {...message} />
          ))}
          {isLoading ? <Placeholder /> : null}
          <View className="chat-footer">
            <PromptContainer sendMessage={onSendMessage} />
          </View>
        </Flex>
      </ScrollView>
    </Authenticator>
  );
}
