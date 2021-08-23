import type { NextPage } from "next";
import { ThemeChanger } from "src/components/ThemeChanger";
import { Layout } from "src/Layouts/Layout";

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
