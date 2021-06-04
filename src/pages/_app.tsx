import "tailwindcss/tailwind.css";

import { ApolloProvider } from "@apollo/client";
import type { NextPageContext } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import nookies from "nookies";
import { initializeApollo } from "src/apollo/apolloClient";

const App = (props: AppProps, context: NextPageContext) => {
  const cookies = nookies.get(context);

  const apolloClient = initializeApollo(null, cookies);

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class">
          <props.Component {...props.pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
