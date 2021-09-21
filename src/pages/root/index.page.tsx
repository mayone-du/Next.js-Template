import { useReactiveVar } from "@apollo/client";
import type { CustomNextPage } from "next";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { NotAuth } from "src/components/NotAuth";
import { UserLoading } from "src/components/UserLoading";
import { userInfoVar } from "src/graphql/apollo/cache";
import { useCountSecondsSubscription } from "src/graphql/schemas/schema";
import { Layout } from "src/layouts";
import { useAuthModal } from "src/libs/hooks/useAuthModal";

const IndexPage: CustomNextPage = () => {
  const userInfo = useReactiveVar(userInfoVar);
  const { handleOpenModal } = useAuthModal();
  const { data, loading: isSubscriptionLoading } = useCountSecondsSubscription({
    variables: {
      seconds: 4,
    },
    // subscriptionが完了した時に呼ばれる
    // onSubscriptionComplete: () => {
    //   console.log("hoge");
    // },
  });

  const handleClick = useCallback(() => {
    const toastId = toast.loading("ローディング...");
    try {
      if (!userInfo.isLogin) {
        return handleOpenModal();
      }
      toast.success("ボタンがクリックされました", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("エラー", { id: toastId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ユーザー情報のローディング
  if (userInfo.isLoading) {
    return <UserLoading />;
  }

  // 非ログイン
  if (!userInfo.isLoading && !userInfo.isLogin) {
    return <NotAuth />;
  }

  return (
    <div>
      <div>subscription: {data?.countSeconds}</div>
      <div>subscription loading: {isSubscriptionLoading ? "loading" : "not loading"}</div>

      <button className="block p-4 mx-auto rounded-md border" onClick={handleClick}>
        ボタン
      </button>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
