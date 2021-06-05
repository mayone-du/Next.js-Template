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
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
