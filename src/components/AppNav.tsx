import * as React from 'react';
import { Button, Flex, Text } from '@aws-amplify/ui-react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { ColorModeContext } from './ColorModeContext';
import * as Auth from 'aws-amplify/auth';

export const AppNav = () => {
  const { mode, toggleColorMode } = React.useContext(ColorModeContext);
  const logout = () => {
    Auth.signOut();
  };

  return (
    <Flex
      direction="row"
      borderWidth="0 0 1px 0"
      borderColor="border.primary"
      borderStyle="solid"
      width="100%"
      paddingBlock="small"
      paddingInline="large"
      backgroundColor="background.primary"
      color="font.primary"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex direction="row" alignItems="center" gap="large">
        <Text fontWeight="black">ToDoDo</Text>
      </Flex>
      <Flex direction="row">
        {/* Logout button  */}
        <Button size="small" onClick={logout}>
          Logout
        </Button>
        <Button size="small" onClick={toggleColorMode}>
          {mode === 'dark' ? <LuMoon /> : <LuSun />}
        </Button>
      </Flex>
    </Flex>
  );
};
