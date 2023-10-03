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
      <section className="my-40 flex flex-col items-center justify-center">
        <SectionTitle
          headline={HomeConstants.OurVision.Headline}
          subheadline={HomeConstants.OurVision.SubHeadline}
        />

        <Grid>
          <Card className="border-primary-grey col-start-1 col-end-4 min-h-[320px] border-2 backdrop-blur-lg">
            <Headline4 className="mb-3">/VISION</Headline4>
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-3 rounded-full border-2 border-neutral-700 p-2 pl-12">
                <Body1>😎</Body1>
                <Body1>VIBE</Body1>
              </div>
              <div className="flex gap-3 rounded-full border-2 border-neutral-700 p-2 pl-12">
                <Body1>🧠</Body1>
                <Body1>LEARN</Body1>
              </div>
              <div className="flex gap-3 rounded-full border-2 border-neutral-700 p-2 pl-12">
                <Body1>😎</Body1>
                <Body1>BUILD</Body1>
              </div>
              <div className="flex gap-3 rounded-full border-2 border-neutral-700 p-2 pl-12">
                <Body1>😎</Body1>
                <Body1>GOVERN</Body1>
              </div>
            </div>
          </Card>

          <Card className="border-primary-grey col-start-4 col-end-13 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/4 flex-col justify-between gap-2">
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
                className="flex items-center gap-2"
                href={HomeConstants.OurVision.Vibe.link}>
                <LinkIcon className="h-7 w-7 transition-all hover:rotate-45" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <div className="relative h-full w-3/4">
              <FridaysPanelImage className="absolute -left-10 -top-8 z-10 h-[500px] w-[480px]" />
              <FridaysPanelImage className="absolute -top-20 left-24 z-30 h-[500px] w-[480px] shadow" />
              <FridaysPanelImage className="absolute -top-10 left-60 z-20 h-[500px] w-[480px]" />
            </div>
          </Card>

          {/* 
          LEARN
           */}
          <Card
            noPadding
            className="border-primary-grey col-start-1 col-end-7 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/3 flex-col justify-between gap-2 p-6">
              <div>
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
                className="flex items-center gap-2"
                href={HomeConstants.OurVision.Learn.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <LearnIconsImage className="right-0 top-0 z-10 mr-10 h-full w-1/3" />
          </Card>

          <Card className="border-primary-grey relative col-start-7 col-end-13 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/3 flex-col justify-between gap-2">
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
                className="flex items-center gap-2"
                href={HomeConstants.OurVision.build.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <BuildPanelImage className="absolute -right-8 top-0 z-10 h-full w-3/4" />
          </Card>

          <Card className="border-primary-grey col-start-1 col-end-13 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/4 flex-col justify-between gap-2">
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
                className="flex items-center gap-2"
                href={HomeConstants.OurVision.govern.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <div className="relative h-full w-3/4">
              <GovernPLeftImage className="absolute -left-10 -top-8 z-10 h-[500px] w-[480px]" />
              <GovernPCenterImage className="absolute -top-20 left-24 z-30 h-[500px] w-[480px] shadow" />
              <GovernPRightImage className="absolute -top-10 left-60 z-20 h-[500px] w-[480px]" />
            </div>
          </Card>
        </Grid>
      </section>
    </React.Fragment>
  );
};

Vision.defaultProps = IVisionDefaultProps;

export default Vision;
