import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";

import { ApolloProvider } from "@apollo/client";
import type { NextPage, NextPageContext } from "next";
// import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import nprogress from "nprogress";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { initializeApollo } from "src/graphql/apollo/client";

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

const App = (props: any /* AppProps */, context: NextPageContext) => {
  const apolloClient = initializeApollo(null, context);

  if (process.browser) {
    nprogress.start();
  }
  useEffect(() => {
    nprogress.done();
  });

  // レイアウトを取得
  const getLayout =
    props.Component.getLayout ||
    ((page: NextPage) => {
      return page;
    });

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class">
        {getLayout(<props.Component {...props.pageProps} />)}
        <Toaster toastOptions={{ duration: 2500 }} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
