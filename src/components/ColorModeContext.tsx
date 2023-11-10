import * as React from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { theme } from '@/theme';
import { ThemeProvider } from '@aws-amplify/ui-react';

export const ColorModeContext = React.createContext<{
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}>({
  mode: 'dark',
  toggleColorMode: () => {},
});

export const ColorModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const [localMode] = useLocalStorage('colorMode', 'dark');

  const toggleColorMode = React.useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }, [mode]);

  React.useEffect(() => {
    setMode(localMode);
  }, [localMode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme} colorMode={mode}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
