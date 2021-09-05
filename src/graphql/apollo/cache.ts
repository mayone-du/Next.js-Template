import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache();

// ApolloClient作成時のGoogleから渡されるidTokenの管理用ステート
export const idTokenVar = makeVar("");

// ユーザーのローディングやログイン済みの判定を管理するためのグローバルステート
const InitialUserInfo = {
  isLogin: false,
  isLoading: true,
};
export const userInfoVar = makeVar(InitialUserInfo);
