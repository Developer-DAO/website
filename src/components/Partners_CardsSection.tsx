import SectionTitle from "@/components/sectionTitle";
import {
  Body2,
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
type IPartnersCardsSectionProps = {};

const IPartnersCardsSectionDefaultProps = {};

const PartnersCardsSection: React.FC<IPartnersCardsSectionProps> = (props) => {
  const {} = props;

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
          <Card className="border-primary-grey col-start-1 col-end-7 min-h-[320px] border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/3 flex-col justify-between gap-2">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <ThunderGreyIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.preferred.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {PartnersConstants.cardsSection.preferred.subtitle}
                </Body2>
              </div>
              <Link
                className="flex items-center gap-2"
                href={PartnersConstants.cardsSection.preferred.link}>
                <LinkIcon className="h-7 w-7 transition-all hover:rotate-45" />
                <Body2 color="neutral-600">
                  {PartnersConstants.cardsSection.preferred.linkName}
                </Body2>
              </Link>
            </div>
            <div className="relative h-full w-1/2">
              <div className="h-full w-full">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={"/prefferredPartner.svg"}
                  alt={""}
                />
              </div>
            </div>
          </Card>

          <Card className="border-primary-grey col-start-7 col-end-13 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/4 flex-col justify-between gap-2">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <CodeIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.hackathon.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {PartnersConstants.cardsSection.hackathon.subtitle}
                </Body2>
              </div>
              <Link
                className="flex items-center gap-2"
                href={PartnersConstants.cardsSection.hackathon.link}>
                <LinkIcon className="h-7 w-7 transition-all hover:rotate-45" />
                <Body2 color="neutral-600">{PartnersConstants.cardsSection.hackathon.linkName}</Body2>
              </Link>
            </div>
            <div className="relative h-full w-3/4">
              <BuildPanelImage className="absolute -right-8 top-0 z-10 h-full w-3/4" />
            </div>
          </Card>

          {/* 
      LEARN
       */}
          <Card
            noPadding
            className="border-primary-grey col-start-1 col-end-13 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/3 flex-col justify-between gap-2 p-6">
              <div>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-800 p-3">
                  <PeopleIcon />
                </div>
                <Headline4 className="my-2">
                  {PartnersConstants.cardsSection.talent.title}
                </Headline4>
                <Body2 color="neutral-700">
                  {PartnersConstants.cardsSection.talent.subtitle}
                </Body2>
              </div>
              <Link
                className="flex items-center gap-2"
                href={PartnersConstants.cardsSection.talent.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">{PartnersConstants.cardsSection.talent.linkName}</Body2>
              </Link>
            </div>
            <LearnIconsImage className="right-0 top-0 z-10 mr-10 h-full w-1/3" />
          </Card>

          <Card className="border-primary-grey relative col-start-1 col-end-7 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/3 flex-col justify-between gap-2">
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
                className="flex items-center gap-2"
                href={PartnersConstants.cardsSection.ventures.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">{PartnersConstants.cardsSection.ventures.linkName}</Body2>
              </Link>
            </div>
            <LearnIconsImage className="right-0 top-0 z-10 mr-10 h-full w-1/3" />
          </Card>

          <Card className="border-primary-grey col-start-7 col-end-13 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/4 flex-col justify-between gap-2">
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
                className="flex items-center gap-2"
                href={PartnersConstants.cardsSection.events.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">{PartnersConstants.cardsSection.events.linkName}</Body2>
              </Link>
            </div>
            <div className="relative h-full w-3/4">
              <GovernPLeftImage className="absolute -left-10 -top-8 z-10 h-[500px] w-[480px]" />
              <GovernPCenterImage className="absolute -top-20 left-24 z-30 h-[500px] w-[480px] shadow" />
              <GovernPRightImage className="absolute -top-10 left-60 z-20 h-[500px] w-[480px]" />
            </div>
          </Card>

          <Card className="border-primary-grey col-start-1 col-end-13 flex min-h-[320px] justify-between border-2 backdrop-blur-lg">
            <div className="flex h-full w-1/4 flex-col justify-between gap-2">
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
                className="flex items-center gap-2"
                href={PartnersConstants.cardsSection.hackers.link}>
                <LinkIcon className="h-7 w-7" />
                <Body2 color="neutral-600">{PartnersConstants.cardsSection.hackers.linkName}</Body2>
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
    </>
  );
};

PartnersCardsSection.defaultProps = IPartnersCardsSectionDefaultProps;

export default PartnersCardsSection;
