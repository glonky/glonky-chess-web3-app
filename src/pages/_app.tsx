import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProviders } from '../context/providers';
import { useDarkMode } from '../hooks/use-dark-mode';

function MyApp({ Component, pageProps }: AppProps) {
  useDarkMode();

  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
