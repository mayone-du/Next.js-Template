import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache();

// ApolloClientにGoogleから渡されるidTokenを渡すためのステート
export const idTokenVar = makeVar("");

// ユーザー情報のローディング・ログイン・IDの状態をグローバル管理するためのステート
const InitialUserInfo = {
  isLogin: false,
  isLoading: true,
  userId: "",
};
export const userInfoVar = makeVar(InitialUserInfo);
