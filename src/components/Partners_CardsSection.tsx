import {
  Body1,
  Body2,
  BodyHeadline,
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
  ShineImage,
  StarShineImage,
} from "@gordo-d/d-d-ui-components";
import Link from "next/link";
import React, { useEffect } from "react";
import PartnersConstants from "../constants/partners.json";
type IPartnersCardsSectionProps = {};

const IPartnersCardsSectionDefaultProps = {};

const PartnersCardsSection: React.FC<IPartnersCardsSectionProps> = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  return (
    <>
      {/* OUR VISION */}
      <section className="justify-center items-center flex flex-col my-40">
        <div className="relative">
          <div className="absolute -top-24 right-28">
            <StarShineImage className="h-[250px] w-[250px]"></StarShineImage>
          </div>
          <div className="absolute -top-[250px] -left-2/3">
            <ShineImage className="h-[600px] w-[600px]"></ShineImage>
          </div>
          <BodyHeadline className="font-paragraph relative">
            {PartnersConstants.cardsSection.Headline}
          </BodyHeadline>
        </div>
        <Body1>{PartnersConstants.cardsSection.SubHeadline}</Body1>
        <Grid>
          <Card className="min-h-[320px] col-start-1 col-end-7 border-primary-grey border-2 backdrop-blur-lg">
            <div className="w-1/4 gap-2 flex flex-col justify-between h-full">
              <div>
                <Headline4 className="mb-3">
                  {PartnersConstants.cardsSection.preferred.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {PartnersConstants.cardsSection.preferred.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={PartnersConstants.cardsSection.preferred.link}>
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

          <Card className="min-h-[320px] col-start-7 col-end-13 border-primary-grey border-2 backdrop-blur-lg flex justify-between">
            <div className="w-1/4 gap-2 flex flex-col justify-between h-full">
              <div>
                <Headline4 className="mb-3">
                  {PartnersConstants.cardsSection.hackathon.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {PartnersConstants.cardsSection.hackathon.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={PartnersConstants.cardsSection.hackathon.link}>
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
            className="col-start-1 col-end-13 border-primary-grey border-2 backdrop-blur-lg flex justify-between min-h-[320px]">
            <div className="w-1/3 gap-2 flex flex-col justify-between h-full p-6">
              <div>
                <Headline4 className="mb-3">
                  {PartnersConstants.cardsSection.talent.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {PartnersConstants.cardsSection.talent.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={PartnersConstants.cardsSection.talent.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <LearnIconsImage className="top-0 right-0 h-full w-1/3 z-10 mr-10" />
          </Card>

          <Card className="col-start-1 col-end-7 border-primary-grey border-2 backdrop-blur-lg flex justify-between min-h-[320px] relative">
            <div className="w-1/3 gap-2 flex flex-col justify-between h-full">
              <div>
                <Headline4 className="mb-3">
                  {PartnersConstants.cardsSection.ventures.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {PartnersConstants.cardsSection.ventures.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={PartnersConstants.cardsSection.ventures.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">Get involved</Body2>
              </Link>
            </div>
            <BuildPanelImage className="absolute top-0 -right-8 w-3/4 h-full z-10" />
          </Card>

          <Card className="min-h-[320px] col-start-7 col-end-13 border-primary-grey border-2 backdrop-blur-lg flex justify-between">
            <div className="w-1/4 gap-2 flex flex-col justify-between h-full">
              <div>
                <Headline4 className="mb-3">
                  {PartnersConstants.cardsSection.events.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {PartnersConstants.cardsSection.events.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={PartnersConstants.cardsSection.events.link}>
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

          <Card className="min-h-[320px] col-start-1 col-end-13 border-primary-grey border-2 backdrop-blur-lg flex justify-between">
            <div className="w-1/4 gap-2 flex flex-col justify-between h-full">
              <div>
                <Headline4 className="mb-3">
                  {PartnersConstants.cardsSection.hackers.title}
                </Headline4>
                <Body1 color="neutral-700">
                  {PartnersConstants.cardsSection.hackers.subtitle}
                </Body1>
              </div>
              <Link
                className="flex gap-2 items-center"
                href={PartnersConstants.cardsSection.hackers.link}>
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
    </>
  );
};

PartnersCardsSection.defaultProps = IPartnersCardsSectionDefaultProps;

export default PartnersCardsSection;
