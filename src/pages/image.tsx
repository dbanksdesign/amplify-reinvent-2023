import * as React from 'react';
import { Amplify, Storage } from 'aws-amplify';
import {
  Authenticator,
  Flex,
  Placeholder,
  ScrollView,
  View,
  Image,
} from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import { PromptContainer } from '@/components/Conversation/PromptContainer';
import { ChatMessage } from '@/components/Conversation/ChatMessage';
import { processFile } from '@/utils/processImage';

Amplify.configure({
  ...awsExports,
  ssr: true,
});

interface Message {
  content: React.ReactNode;
  author: 'Human' | 'Assistant';
}

function base64ToArrayBuffer(base64: string) {
  var binaryString = atob(base64);
  var bytes = new Uint8Array(binaryString.length);
  for (var i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

export default function ImagePage() {
  const [image, setImage] = React.useState<string>();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
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

    fetch('/api/image', {
      method: 'POST',
      body: JSON.stringify({
        prompt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setImage(data.body);
        console.log(data);
        return processFile(data.body);
      })
      .then(({ key, file }) => {
        Storage.put(key, file).then((results) => {
          console.log(results);
        });
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
          {image ? (
            <Image src={`data:image/jpeg;base64,${image}`} alt="" />
          ) : null}
          <View className="chat-footer">
            <PromptContainer sendMessage={onSendMessage} />
          </View>
        </Flex>
      </ScrollView>
    </Authenticator>
  );
}
