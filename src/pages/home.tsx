import { useRouter } from "next/router";
import { ReactElement } from "react";

import {
  Body1,
  Body3,
  Button,
  Headline1,
  Headline2,
  StarsBgImage,
} from "@d_d/ui-components";
import AppLayout from "../components/layout/layout";
import HeaderConstants from "../constants/home/home.json";

const HomePage = () => {
  const router = useRouter();
  return (
    <article className="text-white">
      <div className="fixed top-0 left-0 w-full">
        <StarsBgImage className="w-full"></StarsBgImage>
      </div>
      <section className="flex min-h-screen flex-col justify-center items-center text-white">
        <Headline1 className="font-heading">
          {HeaderConstants.headline}
        </Headline1>
        <Body3>{HeaderConstants.subheadline}</Body3>
        <div className="flex">
          <Button>Dao Handbook</Button>
          <Button>Partner with us</Button>
        </div>
      </section>
      <section className="p-10 my-20 flex flex-wrap gap-4 justify-center items-center">
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
        <div className="rounded-full bg-white h-20 w-20"></div>
      </section>
      <section className="justify-center items-center flex flex-col">
        <Body3>{HeaderConstants.whoIntro}</Body3>
        <Headline2 className="font-heading">
          {HeaderConstants.whoHeadline}
        </Headline2>
        <Headline2 className="font-heading">
          {HeaderConstants.whoHeadline2}
        </Headline2>
      </section>
      <section className="justify-center items-center flex flex-col">
        <Headline2 className="font-heading">
          {HeaderConstants.OurVision.Headline}
        </Headline2>
        <Body1>{HeaderConstants.OurVision.SubHeadline}</Body1>
      </section>
    </article>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
