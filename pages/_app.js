import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Camila Cruz | Portfólio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
