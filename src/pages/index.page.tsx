import { useReactiveVar } from "@apollo/client";
import type { CustomNextPage } from "next";
import { ThemeChanger } from "src/components/ThemeChanger";
import { userInfoVar } from "src/graphql/apollo/cache";
import { Layout } from "src/layouts";

const IndexPage: CustomNextPage = () => {
  const userInfo = useReactiveVar(userInfoVar);

  // ユーザー情報のローディング
  if (userInfo.isLoading) {
    return <div className="bg-red-400">user info Loading...</div>;
  }

  // 非ログイン
  if (!userInfo.isLogin) {
    return <div>not login</div>;
  }

  // プロフィールの取得状況によってデータを出し分け
  return (
    <div>
      {/* {console.log("render index component")} */}
      login done
      <ThemeChanger />
      <button
        className="block p-4 mx-auto rounded-md border"
        // onClick={() => {
        //   userInfoVar({ isLogin: true, isLoading: false });
        // }}
      >
        ボタン
      </button>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
