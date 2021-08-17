import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { ThemeChanger } from "src/components/ThemeChanger";

const IndexPage: NextPage = () => {
  return (
    <Layout meta={{ pageName: "IndexPage" }}>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-5xl">IndexPage</div>
        <ThemeChanger />
      </div>
    </Layout>
  );
};

export default IndexPage;
