import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { cache } from "src/apollo/cache";
import type { Cookies } from "src/types/types";
import { GRAPHQL_API_ENDPOINT } from "src/utils/API_ENDPOINTS";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = (cookies: Cookies) => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createUploadLink({
      uri: GRAPHQL_API_ENDPOINT,
      headers: {
        authorization: cookies.accessToken ? `JWT ${cookies.accessToken}` : "",
      },
    }),
    cache: cache,
  });
};
export const initializeApollo = (_initialState = null, cookies: Cookies) => {
  const _apolloClient = apolloClient ?? createApolloClient(cookies);
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
