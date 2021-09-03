import type { CustomNextPage } from "next";
import { useSession } from "next-auth/client";
import { ThemeChanger } from "src/components/ThemeChanger";
import { Layout } from "src/layouts";

const IndexPage: CustomNextPage = () => {
  const [session, isLoading] = useSession();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-5xl">IndexPage</div>
      <div className="text-center">email:{session?.user?.email ?? "null"}</div>
      <div className="text-center">isLoading:{isLoading}</div>
      <div className="py-10">
        <ThemeChanger />
      </div>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
