import SectionTitle from "@/components/sectionTitle";
import useWindowWidth from "@/hooks/useWindowWidth";
import {
  Body2,
  Body3,
  BuildPanelImage,
  Card,
  CodeIcon,
  DolarIcon,
  GovernPCenterImage,
  GovernPLeftImage,
  GovernPRightImage,
  Grid,
  Headline4,
  LearnIconsImage,
  LinkIcon,
  PeopleIcon,
  ThunderGreyIcon,
  TicketIcon,
  UniHatIcon,
} from "@gordo-d/d-d-ui-components";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import PartnersConstants from "../constants/partners.json";
import D_D_People from "./People";

type IPartnersCardsSectionProps = {
  //type
  communityData?: any[];
};

const IPartnersCardsSectionDefaultProps = {};

const PartnersCardsSection: React.FC<IPartnersCardsSectionProps> = (props) => {
  const { communityData } = props;
  const windowWidth = useWindowWidth();

  useEffect(() => {}, []);

  return (
    <>
      {/* OUR VISION */}
      <section className="my-40 flex flex-col items-center justify-center">
        <SectionTitle
          headline={PartnersConstants.cardsSection.Headline}
          subheadline={PartnersConstants.cardsSection.SubHeadline}
        />

        <Grid>
          <Card
            blur={5}
            className="border-primary-grey col-start-1 col-end-7 flex min-h-[320px] flex-col justify-between gap-5 border-2  md:flex-row">
            <div className="flex w-full flex-col justify-between gap-2 md:h-full md:w-1/3">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <ThunderGreyIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.preferred.title}
                </Headline4>
                <Body3 color="neutral-700">
                  {PartnersConstants.cardsSection.preferred.subtitle}
                </Body3>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-0"
                href={PartnersConstants.cardsSection.preferred.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600" className="hidden md:block">
                  {PartnersConstants.cardsSection.preferred.linkName}
                </Body2>
              </Link>
            </div>
            <div className="-bottom-26 absolute left-0 flex h-2/3 w-full items-center justify-center grayscale md:relative md:bottom-0 md:ml-2 md:h-full md:w-2/3">
              <Image
                className="md:p-4 md:pl-6"
                layout="fill"
                objectFit="contain"
                src={"/prefferredPartner.svg"}
                alt={""}
              />
            </div>
          </Card>

          <Card
            blur={5}
            className="border-primary-grey relative col-start-7 col-end-13 flex min-h-[320px] flex-col justify-between border-2  md:flex-row md:justify-start">
            <div className="flex h-full w-full flex-col justify-between gap-2 pb-16 md:w-1/3 md:pb-0">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <CodeIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.hackathon.title}
                </Headline4>
                <Body3 color="neutral-700">
                  {PartnersConstants.cardsSection.hackathon.subtitle}
                </Body3>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-0"
                href={PartnersConstants.cardsSection.hackathon.link}>
                <LinkIcon className="h-7 w-7 transition-all hover:rotate-45" />
                <Body2 color="neutral-600" className="hidden md:block">
                  {PartnersConstants.cardsSection.hackathon.linkName}
                </Body2>
              </Link>
            </div>
            <BuildPanelImage className="absolute -bottom-20 -right-8 z-10 h-full w-full md:top-0 md:w-3/4" />
          </Card>

          {/* 
      TALENT
       */}
          <Card
            blur={5}
            noPadding
            className="border-primary-grey relative col-start-1 col-end-13 flex min-h-[320px] flex-col justify-between border-2  md:flex-row">
            <div className="flex h-full w-full flex-col justify-between gap-2 md:w-1/3 md:pb-0">
              <div className="p-6">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <PeopleIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.talent.title}
                </Headline4>
                <Body3 color="neutral-700">
                  {PartnersConstants.cardsSection.talent.subtitle}
                </Body3>
              </div>
              <Link
                className="absolute  right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-6"
                href={PartnersConstants.cardsSection.talent.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2
                  color="neutral-600 max-w-2/3"
                  className="hidden md:block">
                  {PartnersConstants.cardsSection.talent.linkName}
                </Body2>
              </Link>
            </div>
            <div className="md:w-1/3 ">
              <D_D_People
                className="justify-end gap-3 p-6"
                community={communityData}
                avatarSize={windowWidth > 768 ? 50 : 35}
                showCount={windowWidth > 768 ? 30 : 16}
              />
            </div>
          </Card>

          <Card
            blur={5}
            noPadding
            className="border-primary-grey relative col-start-1 col-end-7 flex min-h-[320px] flex-col justify-between border-2  md:flex-row">
            <div className="flex h-full w-full flex-col justify-between gap-2 p-6 md:w-2/3">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <DolarIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.ventures.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {PartnersConstants.cardsSection.ventures.subtitle}
                </Body2>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-0"
                href={PartnersConstants.cardsSection.ventures.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 className="hidden md:block" color="neutral-600">
                  {PartnersConstants.cardsSection.ventures.linkName}
                </Body2>
              </Link>
            </div>
            <LearnIconsImage className="right-0 top-0 z-10 mr-10 h-full w-1/3" />
          </Card>

          <Card
            blur={5}
            noPadding
            className="border-primary-grey relative col-start-7 col-end-13 flex min-h-[320px] flex-col justify-between gap-5  border-2 md:flex-row">
            <div className="flex w-full flex-col justify-between gap-2 p-6 md:h-full md:w-1/2">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <TicketIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.events.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {PartnersConstants.cardsSection.events.subtitle}
                </Body2>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-0"
                href={PartnersConstants.cardsSection.events.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600" className="hidden md:block">
                  {PartnersConstants.cardsSection.events.linkName}
                </Body2>
              </Link>
            </div>
            <div className="-bottom-14 absolute left-0 flex h-2/3 w-full items-center justify-center grayscale md:relative md:bottom-0 md:ml-2 md:h-full md:w-2/3">
              <Image
                layout="fill"
                objectFit="contain"
                src={"/eventsCardImage.svg"}
                alt={""}
              />
            </div>
          </Card>

          <Card
            blur={5}
            className="border-primary-grey col-start-1 col-end-13 flex min-h-[320px] flex-col justify-between gap-5 border-2  md:flex-row">
            <div className="flex w-full flex-col justify-between gap-2 md:h-full md:w-1/3">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <UniHatIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.hackers.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {PartnersConstants.cardsSection.hackers.subtitle}
                </Body2>
              </div>
              <Link
                className="absolute right-0 top-0 flex items-center gap-2 px-4 py-5 md:relative md:p-0"
                href={PartnersConstants.cardsSection.hackers.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">
                  {PartnersConstants.cardsSection.hackers.linkName}
                </Body2>
              </Link>
            </div>
            <div className="relative h-full w-full md:w-3/4">
              <GovernPLeftImage className="absolute -left-14 -top-24 z-10 h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
              <GovernPCenterImage className="shadowh-[200px] absolute -top-24 left-5 z-30  h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
              <GovernPRightImage className="absolute -top-16 left-20 z-20 h-[200px] w-[280px] md:h-[500px] md:w-[480px]" />
            </div>
          </Card>
        </Grid>
      </section>
    </>
  );
};

PartnersCardsSection.defaultProps = IPartnersCardsSectionDefaultProps;

export default PartnersCardsSection;
