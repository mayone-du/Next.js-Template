import type { CustomNextPage } from "next";
import { Layout } from "src/layouts";

const NotFoundPage: CustomNextPage = () => {
  return (
    <div>
      <h2 className="text-3xl">404 Not Found</h2>
    </div>
  );
};

export default NotFoundPage;

NotFoundPage.getLayout = Layout;
