import Layout from "@/components/layout/layout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";


import '@gordo-d/d-d-ui-components/styles.css';

import '../styles/globals.css';

const defaultLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode,
};
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}