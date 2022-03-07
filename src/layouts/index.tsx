import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
// import { AuthModal } from "src/components/common";
import { initializeApollo } from "src/graphql/apollo/client";
// import {
//   MyUserInfoDocument,
//   MyUserInfoQuery,
//   MyUserInfoQueryVariables,
// } from "src/graphql/schemas/generated/schema";
import { Footer } from "src/layouts/Footer";
import { Header } from "src/layouts/Header";
import { LayoutErrorBoundary } from "src/layouts/LayoutErrorBoundary";

// pagesのgetLayoutで指定されたページで呼ばれる。ページのリロード時に呼ばれ、ページ遷移時には呼ばれない。
export const Layout = (page: NextPage) => {
  // 初回マウント時にユーザー情報を取得し、ReactiveVariablesでグローバル管理して、_appで値を参照する
  useEffect(() => {
    (async () => {
      const session = await getSession();
      try {
        if (!session) return;
        // session情報があればユーザー情報を取得しておき、以降はcache-onlyで読み込む
        const apolloClient = initializeApollo();
        // const { error } = await apolloClient.query<MyUserInfoQuery, MyUserInfoQueryVariables>({
        //   query: MyUserInfoDocument,
        // });
        // if (error) throw error;
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="dark:bg-zinc-800">
      {/* <AuthModal /> */}
      <Header />
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
