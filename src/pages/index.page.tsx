import type { CustomNextPage } from "next";
import { ThemeChanger } from "src/components/ThemeChanger";
import { Layout } from "src/Layouts";

const IndexPage: CustomNextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-5xl">IndexPage</div>
      <ThemeChanger />
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
