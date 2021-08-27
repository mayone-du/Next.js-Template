import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache();

// ユーザー情報をReactive Variablesで管理しようと思ったけど、基本情報はNextAuth.jsのuseSessionで取得できる
export const userInfoVar = makeVar({
  idToken: "",
});
