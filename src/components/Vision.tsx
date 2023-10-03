import SectionTitle from '@/components/sectionTitle';
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
  LinkIcon
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
      <section className="justify-center items-center flex flex-col my-40">
        <SectionTitle headline={HomeConstants.OurVision.Headline} subheadline={HomeConstants.OurVision.SubHeadline}/>
        
        <Grid>
          <Card className="min-h-[320px] col-start-1 col-end-4 border-primary-grey border-2 backdrop-blur-lg">
            <Headline4 className="mb-3">/VISION</Headline4>
            <div className="flex flex-col gap-2 ">
              <div className="border-neutral-700 border-2 p-2 rounded-full pl-12 gap-3 flex">
                <Body1>😎</Body1>
                <Body1>VIBE</Body1>
              </div>
              <div className="border-neutral-700 border-2 p-2 rounded-full pl-12 gap-3 flex">
                <Body1>😎</Body1>
                <Body1>LEARN</Body1>
              </div>
              <div className="border-neutral-700 border-2 p-2 rounded-full pl-12 gap-3 flex">
                <Body1>😎</Body1>
                <Body1>BUILD</Body1>
              </div>
              <div className="border-neutral-700 border-2 p-2 rounded-full pl-12 gap-3 flex">
                <Body1>😎</Body1>
                <Body1>GOVERN</Body1>
              </div>
            </div>
          </Card>

          <Card className="min-h-[320px] col-start-4 col-end-13 border-primary-grey border-2 backdrop-blur-lg flex justify-between">
            <div className="w-1/4 gap-2 flex flex-col justify-between h-full">
              <div>
                <Headline4 className="mb-3">
                  {HomeConstants.OurVision.Vibe.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {HomeConstants.OurVision.Vibe.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={HomeConstants.OurVision.Vibe.link}>
                <LinkIcon className="h-7 w-7 hover:rotate-45 transition-all" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <div className="w-3/4 h-full relative">
              <FridaysPanelImage className="absolute -top-8 -left-10 h-[500px] w-[480px] z-10" />
              <FridaysPanelImage className="absolute shadow -top-20 left-24 h-[500px] w-[480px] z-30" />
              <FridaysPanelImage className="absolute -top-10 left-60 h-[500px] w-[480px] z-20" />
            </div>
          </Card>

          {/* 
          LEARN
           */}
          <Card
            noPadding
            className="col-start-1 col-end-7 border-primary-grey border-2 backdrop-blur-lg flex justify-between min-h-[320px]">
            <div className="w-1/3 gap-2 flex flex-col justify-between h-full p-6">
              <div>
                <Headline4 className="mb-3">
                  {HomeConstants.OurVision.Learn.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {HomeConstants.OurVision.Learn.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={HomeConstants.OurVision.Learn.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <LearnIconsImage className="top-0 right-0 h-full w-1/3 z-10 mr-10" />
          </Card>

          <Card className="col-start-7 col-end-13 border-primary-grey border-2 backdrop-blur-lg flex justify-between min-h-[320px] relative">
            <div className="w-1/3 gap-2 flex flex-col justify-between h-full">
              <div>
                <Headline4 className="mb-3">
                  {HomeConstants.OurVision.build.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {HomeConstants.OurVision.build.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={HomeConstants.OurVision.build.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <BuildPanelImage className="absolute top-0 -right-8 w-3/4 h-full z-10" />
          </Card>

          <Card className="min-h-[320px] col-start-1 col-end-13 border-primary-grey border-2 backdrop-blur-lg flex justify-between">
            <div className="w-1/4 gap-2 flex flex-col justify-between h-full">
              <div>
                <Headline4 className="mb-3">
                  {HomeConstants.OurVision.govern.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {HomeConstants.OurVision.govern.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={HomeConstants.OurVision.govern.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <div className="w-3/4 h-full relative">
              <GovernPLeftImage className="absolute -top-8 -left-10 h-[500px] w-[480px] z-10" />
              <GovernPCenterImage className="absolute shadow -top-20 left-24 h-[500px] w-[480px] z-30" />
              <GovernPRightImage className="absolute -top-10 left-60 h-[500px] w-[480px] z-20" />
            </div>
          </Card>
        </Grid>
      </section>
    </React.Fragment>
  );
};

Vision.defaultProps = IVisionDefaultProps;

export default Vision;
