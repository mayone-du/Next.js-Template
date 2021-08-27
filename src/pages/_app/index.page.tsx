import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";

import { ApolloProvider, useReactiveVar } from "@apollo/client";
import type { CustomAppProps } from "next/app";
// import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import nprogress from "nprogress";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { userInfoVar } from "src/graphql/apollo/cache";
import { initializeApollo } from "src/graphql/apollo/client";

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

const App = (props: CustomAppProps) => {
  // MainLayoutでセットされた値を取得し、ApolloClientへ渡す
  const userInfo = useReactiveVar(userInfoVar);
  const apolloClient = initializeApollo(null, userInfo.idToken);

  if (process.browser) {
    nprogress.start();
  }
  useEffect(() => {
    nprogress.done();
  });

  // レイアウトを取得
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <Provider session={props.pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <DefaultSeo title={"Template"} description="Template Repo" />
          {getLayout(<props.Component {...props.pageProps} />)}
          <Toaster toastOptions={{ duration: 2500 }} />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
