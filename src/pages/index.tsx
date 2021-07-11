import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { ThemeChanger } from "src/components/ThemeChanger";

const Index: NextPage = () => {
  return (
    <Layout meta={{ pageName: "Index" }}>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-5xl">Index Page</div>
        <ThemeChanger />
      </div>
    </Layout>
  );
};

export default Index;
