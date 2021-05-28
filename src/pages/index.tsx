import type { NextPage } from "next";
import { Layout } from "src/components/Layout";
import { ThemeChanger } from "src/components/ThemeChanger";

const Index: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="text-5xl">Index Page</div>
        <ThemeChanger />
      </div>
    </Layout>
  );
};

export default Index;
