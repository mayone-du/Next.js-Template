import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { cache } from "src/graphql/apollo/cache";
import { GRAPHQL_API_ENDPOINT } from "src/utils/API_ENDPOINTS";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

// TODO: ↓いらないかも
const authLink = setContext((operation, { headers }) => {
  return { headers };
});

const createApolloClient = (idToken: string | undefined /* 引数でidTokenを受け取る */) => {
  // 画像をアップロードするためにcreateUploadLinkを使う
  const newHttpLink = createUploadLink({
    uri: GRAPHQL_API_ENDPOINT,
    headers: {
      authorization: idToken ? `Bearer ${idToken}` : "",
    },
    // idTokenが存在していれば値をセット
  });
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // TODO: ↓authLinkで何も設定していないため、全て同じもので良いかもしれない
    link: typeof window === "undefined" ? newHttpLink : authLink.concat(newHttpLink),
    // link: newHttpLink,
    cache: cache,
  });
};
export const initializeApollo = (_initialState = null, idToken: string | undefined) => {
  const _apolloClient = apolloClient ?? createApolloClient(idToken);
  // SSR時は新しいclientを作成
  if (typeof window === "undefined") return _apolloClient;
  // CSR時は同じクライアントを使い回す
  // if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  // pageProps: AppProps["pageProps"],
  pageProps: any,
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
};
