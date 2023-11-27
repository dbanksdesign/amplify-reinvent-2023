import { createTheme, defaultDarkModeOverride } from '@aws-amplify/ui-react';

const theme = createTheme({
  name: 'my-theme',
  overrides: [defaultDarkModeOverride],
});

export { theme };
