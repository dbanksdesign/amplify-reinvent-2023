import {
  Button,
  Card,
  CardProps,
  Flex,
  Loader,
  Placeholder,
  Text,
  View,
} from '@aws-amplify/ui-react';
import { ReactNode } from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';

interface ChatMessageProps {
  content: ReactNode;
  author: string;
}

export function ChatMessage({ content, author }: ChatMessageProps) {
  return (
    <Card>
      <Flex direction="row" height={30}>
        <Text fontWeight="bold" color="font.tertiary" opacity={0.6}>
          {author}
        </Text>
      </Flex>
      <Flex direction="column">{content}</Flex>
    </Card>
  );
}

export function UserChatMessage({ content }: { content: string }) {
  return <ChatMessage content={content} author="User" />;
}

export function AgentChatMessage({ message }: { message: string }) {
  return (
    <ChatMessage
      content={
        <View position="relative">
          {message ? (
            message
          ) : (
            <Placeholder marginTop="large" padding="large" />
          )}
          <Button
            position="absolute"
            top="-32px"
            right="10px"
            borderRadius={4}
            borderWidth="1px"
            borderColor="border.primary"
            borderStyle="solid"
          >
            <RxOpenInNewWindow size={15} />
          </Button>
        </View>
      }
      author={'Agent'}
    />
  );
}
