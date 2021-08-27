import { useReactiveVar } from "@apollo/client";
import type { NextPage } from "next";
import { getSession } from "next-auth/client";
import { useEffect } from "react";
import { userInfoVar } from "src/graphql/apollo/cache";
import { Footer } from "src/Layouts/Footer";
import { Header } from "src/Layouts/Header";
import { LayoutErrorBoundary } from "src/Layouts/LayoutErrorBoundary";

// レイアウトコンポーネント。前ページで呼ぶ。
export const Layout = (page: NextPage) => {
  const userInfo = useReactiveVar(userInfoVar);

  // 初回マウント時にユーザー情報を取得し、ReactiveVariablesでグローバル管理して、_appで値を参照する
  useEffect(() => {
    if (!userInfo.idToken) {
      (async () => {
        const session = await getSession();
        const idToken = session?.idToken as string;
        userInfoVar({
          idToken: idToken,
        });
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
