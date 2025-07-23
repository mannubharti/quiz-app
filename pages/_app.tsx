
import type { AppProps } from 'next/app';
import React, { ReactElement, ReactNode, } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/src/common/redux/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../public/assets/css/global.css'; // Import global styles


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


export default function App({ Component, pageProps }: AppPropsWithLayout) {
return (
    <>
      <Head>
        <title>Welcome to our portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
     
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </>
  )
}
