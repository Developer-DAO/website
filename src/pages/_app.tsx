import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

const defaultLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;
  return <div id="ui-root">{getLayout(<Component {...pageProps} />)}</div>;
}
