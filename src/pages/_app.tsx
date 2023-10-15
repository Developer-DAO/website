import Layout from "@/components/layout/layout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import '../styles/globals.css';

// import '@gordo-d/d-d-ui-components/styles.css';
// import localFont from 'next/font/local';

// import {Poppins} from 'next/font/google';

// const poppins = Poppins({
//   subsets: ['latin'],
//   variable: '--font-paragraph',
//   weight: '100',
// });

// const clashDisplay = localFont({
//   src: '@gordo-d/d-d-ui-components/ClashDisplay-Variable.woff2',
//   variable: '--font-headline',
// });

const defaultLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode,
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;
  return (
    <main
      // className={
      //   `${clashDisplay.variable} ${poppins.variable} `}
      id="ui-root">
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
