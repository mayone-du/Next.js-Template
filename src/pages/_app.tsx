import "tailwindcss/tailwind.css";

import { ApolloClient, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { cache } from "src/apollo/cache";

const App = (props: AppProps) => {
  const API_ENDPOINT =
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_API_URL}graphql/`
      : `${process.env.API_ENDPOINT}`;
  const client = new ApolloClient({
    link: createUploadLink({
      uri: API_ENDPOINT,
    }),
    cache: cache,
  });

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <props.Component {...props.pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
