import SectionTitle from "@/components/sectionTitle";
import {
  Body1,
  Body2,
  BuildPanelImage,
  Card,
  FridaysPanelImage,
  GovernPCenterImage,
  GovernPLeftImage,
  GovernPRightImage,
  Grid,
  Headline4,
  LearnIconsImage,
  LinkIcon,
  VibesIrlImage,
  VibesPanelImage,
} from "@gordo-d/d-d-ui-components";
import Link from "next/link";
import React, { useEffect } from "react";
import HomeConstants from "../constants/home.json";

type IVisionProps = {};

const IVisionDefaultProps = {};

const Vision: React.FC<IVisionProps> = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      {/* OUR VISION */}
      <section id="ourvision" className="my-40 flex flex-col items-center justify-center">
        <SectionTitle
          headline={HomeConstants.OurVision.Headline}
          subheadline={HomeConstants.OurVision.SubHeadline}
        />

        <Grid>
          <Card className="border-primary-grey col-start-1 col-end-4 flex min-h-[320px] flex-col justify-center border-2 backdrop-blur-lg md:flex-col md:justify-start">
            <Headline4 className="mb-3 text-center md:text-left">
              /VISION
            </Headline4>
            <div className="flex flex-col gap-2 ">
              <div className="font-paragraph flex justify-center gap-3 rounded-full border-2 border-neutral-700 p-2 text-neutral-600 md:pl-0">
                <div className="flex w-full gap-3 md:w-[70px]">
                  <Body1>😎</Body1>
                  <Body1>VIBE</Body1>
                </div>
              </div>
              <div className="flex justify-center gap-3 rounded-full border-2 border-neutral-700 p-2 md:pl-0">
                <div className="flex w-full gap-3 md:w-[70px]">
                  <Body1>🧠</Body1>
                  <Body1>LEARN</Body1>
                </div>
              </div>
              <div className="flex justify-center gap-3 rounded-full border-2 border-neutral-700 p-2 md:pl-0">
                <div className="flex w-full gap-3 md:w-[70px]">
                  <Body1>😎</Body1>
                  <Body1>BUILD</Body1>
                </div>
              </div>
              <div className="flex justify-center gap-3 rounded-full border-2 border-neutral-700 p-2 md:pl-0">
                <div className="flex w-full gap-3 md:w-[70px]">
                  <Body1>😎</Body1>
                  <Body1>GOVERN</Body1>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-primary-grey col-start-4 col-end-13 flex min-h-[320px] flex-col justify-between border-2 backdrop-blur-lg md:flex-row">
            <div className="flex h-full w-full flex-col justify-between gap-2 md:w-1/4">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  😎
                </div>
                <Headline4 className="my-2">
                  {HomeConstants.OurVision.Vibe.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {HomeConstants.OurVision.Vibe.subtitle}
                </Body2>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-0"
                href={HomeConstants.OurVision.Vibe.link}>
                <LinkIcon className="h-7 w-7 transition-all hover:rotate-45" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <div className="relative h-full w-full md:w-3/4">
              <VibesPanelImage className="absolute -left-14 -top-24 z-10 h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
              <FridaysPanelImage className="shadowh-[200px] absolute -top-24 left-5 z-30  h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
              <VibesIrlImage className="absolute -top-16 left-20 z-20 h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
            </div>
          </Card>

          {/* 
          LEARN
           */}
          <Card
            noPadding
            className="border-primary-grey col-start-1 col-end-7 flex min-h-[320px] flex-col justify-center border-2 backdrop-blur-lg md:flex-row md:justify-between">
            <div className="flex h-full w-full flex-col justify-between gap-2 p-6 md:p-0">
              <div className="md:w-2/3 md:p-6">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  🧠
                </div>
                <Headline4 className="my-2">
                  {HomeConstants.OurVision.Learn.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {HomeConstants.OurVision.Learn.subtitle}
                </Body2>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-6"
                href={HomeConstants.OurVision.Learn.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>

            <LearnIconsImage className="right-0 top-0 z-10 h-full w-4/5 md:mr-10 md:w-1/3" />
          </Card>

          <Card className="border-primary-grey relative col-start-7 col-end-13 flex min-h-[320px] flex-col justify-between border-2 backdrop-blur-lg md:flex-row md:justify-start">
            <div className="flex h-full w-full flex-col justify-between gap-2 pb-10 md:w-1/3 md:pb-0">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  🏗️
                </div>
                <Headline4 className="my-2">
                  {HomeConstants.OurVision.build.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {HomeConstants.OurVision.build.subtitle}
                </Body2>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-0"
                href={HomeConstants.OurVision.build.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>

            <BuildPanelImage className="absolute -bottom-20 -right-8 z-10 h-full w-full md:top-0 md:w-3/4" />
          </Card>

          <Card className="border-primary-grey col-start-1 col-end-13 flex min-h-[320px] flex-col border-2 backdrop-blur-lg md:flex-row md:justify-between">
            <div className="flex h-full w-full flex-col justify-between gap-2 md:w-1/4">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  👩‍⚖️
                </div>
                <Headline4 className="my-2">
                  {HomeConstants.OurVision.govern.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {HomeConstants.OurVision.govern.subtitle}
                </Body2>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-0"
                href={HomeConstants.OurVision.govern.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <div className="relative h-full w-full md:w-3/5">
              <GovernPLeftImage className="absolute -left-14 -top-24 z-10 h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
              <GovernPCenterImage className="shadowh-[200px] absolute -top-28 left-5 z-30  h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
              <GovernPRightImage className="absolute -top-16 left-24 z-20 h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
            </div>
          </Card>
        </Grid>
      </section>
    </React.Fragment>
  );
};

Vision.defaultProps = IVisionDefaultProps;

export default Vision;
