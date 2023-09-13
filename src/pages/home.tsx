import { useRouter } from "next/router";
import { ReactElement } from "react";

import AppLayout from "../components/layout/layout";

const HomePage = () => {
  const router = useRouter();
  return <>Home</>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>Page {page}</AppLayout>;
};

export default HomePage;
