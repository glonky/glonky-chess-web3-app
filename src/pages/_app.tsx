import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProviders } from '../context/providers';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
