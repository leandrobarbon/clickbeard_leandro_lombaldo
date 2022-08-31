import { AuthProvider } from 'context/AuthContext';
import type { AppProps } from 'next/app'
import Head from 'next/head';

import { AlertProvider } from '../components/Alert'

import GlobalStyle from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="nextjs" key="title" />

        <title>Barber Shop</title>
      </Head>
      <GlobalStyle />
      <AuthProvider>
        <AlertProvider />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
