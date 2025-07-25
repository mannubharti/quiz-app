import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/x-icon"
            href="favIcon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
