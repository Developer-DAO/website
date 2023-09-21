import { useRouter } from "next/router";
import { ReactElement } from "react";

import D_D_People from "@/components/People";
import Testimonials from "@/components/Testimonials";
import Vision from "@/components/Vision";
import { Body1, Body3, Button, Headline1, Headline2 } from "@d_d/ui-components";

import AppLayout from "../components/layout/layout";
import HomeConstants from "../constants/home.json";

const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <article className="text-primary-white relative overflow-hidden">
        {/* STARS */}

        <div className="w-screen overflow-hidden p-4 md:p-0">
          {/* HEADING */}
          <section className="z-30 flex min-h-screen flex-col justify-center items-center text-white gap-6">
            <Headline1 className="font-heading">
              {HomeConstants.headline}
            </Headline1>
            <Body3 className="font-paragraph">
              {HomeConstants.subheadline}
            </Body3>
            <div className="flex gap-4">
              <Button variant="secondary">Partner with us</Button>
              <Button className="font-paragraph">Dao Handbook</Button>
            </div>
          </section>

          <D_D_People />

          {/* WE ARE... */}
          <section className="justify-center flex ">
            <div className="max-w-2xl text-center justify-center items-center flex flex-col">
              <Body1>{HomeConstants.whoIntro}</Body1>
              <Headline2 className="font-heading">
                {HomeConstants.whoHeadline}
              </Headline2>
              <div className="bg-white w-[2px] h-[200px]"></div>
              <Headline2 className="font-heading">
                {HomeConstants.whoHeadline2}
              </Headline2>
            </div>
          </section>

          <Vision />

          <Testimonials />
        </div>
      </article>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
