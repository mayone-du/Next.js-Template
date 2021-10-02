import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";

import { ApolloProvider, useReactiveVar } from "@apollo/client";
import type { CustomAppProps } from "next/app";
import Router from "next/router";
// import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import { Toaster } from "react-hot-toast";
import { idTokenVar } from "src/graphql/apollo/cache";
import { initializeApollo } from "src/graphql/apollo/client";

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });
Router.events.on("routeChangeStart", () => {
  return NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  return NProgress.done();
});
Router.events.on("routeChangeError", () => {
  return NProgress.done();
});

const App = (props: CustomAppProps) => {
  // MainLayoutでセットされた値を取得し、ApolloClientへ渡す
  const idToken = useReactiveVar(idTokenVar);
  const apolloClient = initializeApollo(null, idToken);

  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <Provider session={props.pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <DefaultSeo
            title={"Template"}
            titleTemplate={"%s | サイトの名前"}
            description="Template Repo"
            additionalMetaTags={[{ property: "", content: "" }]}
            additionalLinkTags={[
              {
                rel: "manifest",
                href: "/pwa/manifest.json",
              },
            ]}
          />
          {getLayout(<props.Component {...props.pageProps} />)}
          <Toaster toastOptions={{ duration: 2500 }} />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
