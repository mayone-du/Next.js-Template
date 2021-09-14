import type { CustomNextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "src/layouts";
import { SITE_NAME } from "src/utils/constants/SITE_NAME";

const NotFoundPage: CustomNextPage = () => {
  const PAGE_NAME = "404 Not Found";
  return (
    <>
      <NextSeo title={`${PAGE_NAME} | ${SITE_NAME}`} />
      <div>
        <h2 className="text-3xl">{PAGE_NAME}</h2>
      </div>
    </>
  );
};

export default NotFoundPage;

NotFoundPage.getLayout = Layout;
