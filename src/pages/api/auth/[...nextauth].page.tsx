import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { ENV_VARS } from "src/constants";
import { initializeApollo } from "src/graphql/apollo/client";
// import {
//   AuthUserDocument,
//   AuthUserMutation,
//   AuthUserMutationVariables,
// } from "src/graphql/schemas/generated/schema";

export default NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: ENV_VARS.SLACK_CLIENT_ID,
    //   clientSecret: ENV_VARS.SLACK_CLIENT_SECRET,
    // }),
  ],
  callbacks: {
    // サインイン時の処理
    signIn: async (params) => {
      // 初回サインイン時にDBにユーザーを登録し、二回目以降はユーザーが存在すればOKにする
      // const apolloClient = initializeApollo(params.account.access_token);
      // const { errors } = await apolloClient.mutate<AuthUserMutation, AuthUserMutationVariables>({
      //   mutation: AuthUserDocument,
      // });
      // if (errors) {
      //   console.error(errors);
      //   return false;
      // }
      return true;
    },

    // リダイレクト時の処理 普通にページ遷移した時に呼び出されるぽい？
    redirect: async (params) => {
      return params.url.startsWith(params.baseUrl) ? params.url : params.baseUrl;
    },

    jwt: async (params) => {
      if (params.account) {
        params.token.access_token = params.account.access_token;
      }
      return params.token;
    },

    session: async (params) => {
      // useSession時にsession.access_tokenでaccess_tokenを取得できるようにする
      return { ...params.session, access_token: params.token.access_token };
    },
  },
});
