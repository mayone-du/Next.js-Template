import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

type Props = {
  metaTitle: string;
};

export const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.metaTitle}</title>
        <meta name="description" content="description" />
        <meta property="og:url" content="https://" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Test Title" />
        <meta property="og:description" content="Test Description" />
        <meta property="og:site_name" content="Test SiteName" />
        <meta property="og:image" content="/images/sample-image.jpg" />

        <meta name="twitter:card" content="Summary Card" />
        <meta name="twitter:site" content="@mayo1201blog" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
