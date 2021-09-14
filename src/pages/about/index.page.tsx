import type { CustomNextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "src/layouts";
import { SITE_NAME } from "src/utils/constants/SITE_NAME";

const AboutIndexPage: CustomNextPage = () => {
  const PAGE_NAME = "〇〇について";
  return (
    <>
      <NextSeo title={`${PAGE_NAME} | ${SITE_NAME}`} />
      <div>このサービスについての紹介。</div>
    </>
  );
};

export default AboutIndexPage;

AboutIndexPage.getLayout = Layout;
