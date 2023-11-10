import { Flex } from '@aws-amplify/ui-react';
import { AppNav } from './AppNav';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column">
      <AppNav />
      {children}
    </Flex>
  );
};
