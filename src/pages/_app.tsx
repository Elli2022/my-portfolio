// pages/_app.tsx
import '../app/globals.css';
// import ElasticCustomCursor from '../app/components/ElasticCustomCursor/ElasticCustomCursor';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ElasticCustomCursor /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
