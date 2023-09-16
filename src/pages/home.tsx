import { useRouter } from "next/router";
import { ReactElement } from "react";

import {
  Body1,
  Body3,
  Button,
  Headline1,
  Headline2,
  ShineImage,
  StarShineImage,
  StarsBgImage,
} from "@d_d/ui-components";
import AppLayout from "../components/layout/layout";
import HeaderConstants from "../constants/home/home.json";

const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <article className=" w-full text-white relative">
        {/* STARS */}

        <div
          className="absolute top-0 h-[700vh] bg-green left-0 w-screen
      z-0">
          <StarsBgImage className="w-full h-full"></StarsBgImage>
        </div>

        <div className="z-30 relative top-0 w-full">
          {/* HEADING */}
          <section className="z-30 flex min-h-screen flex-col justify-center items-center text-white gap-6">
            <Headline1 className="font-heading">
              {HeaderConstants.headline}
            </Headline1>
            <Body3 className="font-secondary">
              {HeaderConstants.subheadline}
            </Body3>
            <div className="flex-col flex gap-4">
              <Button className="font-secondary">Dao Handbook</Button>
              <Button variant="secondary">Partner with us</Button>
            </div>
          </section>

          {/* PEOPLE */}
          <section className="p-10 my-20 flex flex-wrap gap-4 justify-center items-center">
            <div className="rounded-full bg-white h-20 w-20"></div>
            <div className="rounded-full bg-white h-20 w-20"></div>
            <div className="rounded-full bg-white h-20 w-20"></div>
            <div className="rounded-full bg-white h-20 w-20"></div>
            <div className="rounded-full bg-white h-20 w-20"></div>
            <div className="rounded-full bg-white h-20 w-20"></div>
            <div className="rounded-full bg-white h-20 w-20"></div>
          </section>

          {/* WE ARE... */}
          <section className="justify-center items-center flex flex-col">
            <Body3>{HeaderConstants.whoIntro}</Body3>
            <Headline2 className="font-heading">
              {HeaderConstants.whoHeadline}
            </Headline2>
            <Headline2 className="font-heading">
              {HeaderConstants.whoHeadline2}
            </Headline2>
          </section>

          {/* OUR VISION */}
          <section className="justify-center items-center flex flex-col my-40">
            <div className="relative">
              <div className="absolute -top-24 right-28">
                <StarShineImage className="h-[250px] w-[250px]"></StarShineImage>
              </div>
              <div className="absolute -top-[250px] -left-2/3">
                <ShineImage className="h-[600px] w-[600px]"></ShineImage>
              </div>
              <Headline2 className="font-heading relative">
                {HeaderConstants.OurVision.Headline}
              </Headline2>
            </div>
            <Body1>{HeaderConstants.OurVision.SubHeadline}</Body1>
            <div className="grid "></div>
          </section>
        </div>
      </article>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
