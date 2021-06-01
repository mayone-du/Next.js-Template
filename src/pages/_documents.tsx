import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
          <meta property="og:url" content="https://" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Test Title" />
          <meta property="og:description" content="Test Description" />
          <meta property="og:site_name" content="Test SiteName" />
          <meta property="og:image" content="/images/sample-image.jpg" />

          <meta name="twitter:card" content="Summary Card" />
          <meta name="twitter:site" content="@mayo1201blog" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
