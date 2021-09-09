import type { CustomNextPage } from "next";
import { Layout } from "src/layouts";

const AboutIndexPage: CustomNextPage = () => {
  return <div>このサービスについての紹介。</div>;
};

export default AboutIndexPage;

AboutIndexPage.getLayout = Layout;
