import { ColorModeProvider } from '@/components/ColorModeContext';
import '@aws-amplify/ui-react/styles.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Authenticator } from '@aws-amplify/ui-react';
import { Layout } from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <Authenticator>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Authenticator>
    </ColorModeProvider>
  );
}
