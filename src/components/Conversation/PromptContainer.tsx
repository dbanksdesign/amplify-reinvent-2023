import * as React from 'react';
import { Button, Flex, TextField } from '@aws-amplify/ui-react';

interface PromptContainerProps extends React.ComponentProps<typeof Flex> {
  sendMessage?: (message: string) => void;
  buttonProps?: React.ComponentProps<typeof Button>;
  buttonLabel?: React.ReactNode;
  fieldProps?: React.ComponentProps<typeof TextField>;
}

const BasePrompContainer: React.ForwardRefRenderFunction<
  HTMLInputElement,
  PromptContainerProps
> = ({ sendMessage, buttonProps, fieldProps, buttonLabel, ...rest }, ref) => {
  const [value, setValue] = React.useState('');

  const handleSend: React.EventHandler<any> = (e) => {
    e.preventDefault();
    if (sendMessage) {
      sendMessage(value);
    }
    setValue('');
  };

  return (
    <Flex as="form" onSubmit={handleSend} direction="row" {...rest}>
      <TextField
        flex="1"
        borderWidth="0"
        label="Message"
        labelHidden
        placeholder="Send a message"
        ref={ref}
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        {...fieldProps}
      />
      <Button variation="primary" {...buttonProps} onClick={handleSend}>
        {buttonLabel || 'Send'}
      </Button>
    </Flex>
  );
};

export const PromptContainer = React.forwardRef(BasePrompContainer);
