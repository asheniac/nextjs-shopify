import { AppProps } from "next/app";
import "@assets/main.css";

import { FC } from "react";

const Noop: FC = ({ children }) => {
  return <>{children}</>;
};

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
