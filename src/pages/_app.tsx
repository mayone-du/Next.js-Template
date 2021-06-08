import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";

import { ApolloProvider } from "@apollo/client";
import type { NextPageContext } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import nookies from "nookies";
import nprogress from "nprogress";
import { useEffect } from "react";
import { initializeApollo } from "src/apollo/apolloClient";

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

const App = (props: AppProps, context: NextPageContext) => {
  const cookies = nookies.get(context);
  const apolloClient = initializeApollo(null, cookies);

  if (process.browser) {
    nprogress.start();
  }
  useEffect(() => {
    nprogress.done();
  });

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
