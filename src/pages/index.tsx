import { Layout } from "src/components/Layout";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="text-5xl">Index Page</div>
      </div>
    </Layout>
  );
};

export default Index;
