import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyles />

      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
