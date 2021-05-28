import "tailwindcss/tailwind.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

const App = (props: AppProps) => {
  const client = new ApolloClient({
    link: createUploadLink({
      uri: "http://localhost:8000/graphql/",
    }),
    cache: new InMemoryCache(),
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
