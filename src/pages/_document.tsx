/* eslint-disable @next/next/google-font-display */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="h-full dark">
        <Head>
          <meta name="description" content="Glonky Chess" />
        </Head>
        <body className="h-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
