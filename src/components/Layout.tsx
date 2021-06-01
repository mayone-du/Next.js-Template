import Head from "next/head";

type Props = {
  metaTitle: string;
};

export const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.metaTitle}</title>
      </Head>
      {props.children}
    </div>
  );
};
