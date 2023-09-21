import { useRouter } from "next/router";
import { ReactElement } from "react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Body1,
  Body2,
  Body3,
  BodyHeadline,
  BuildPanelImage,
  Button,
  Card,
  FridaysPanelImage,
  GovernPCenterImage,
  GovernPLeftImage,
  GovernPRightImage,
  Grid,
  Headline1,
  Headline2,
  Headline4,
  LearnIconsImage,
  LinkIcon,
  ShineImage,
  StarShineImage,
} from "@d_d/ui-components";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AppLayout from "../components/layout/layout";
import HomeConstants from "../constants/home/home.json";

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
              <Button className="font-paragraph">Dao Handbook</Button>
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
                {HomeConstants.OurVision.Headline}
              </BodyHeadline>
            </div>
            <Body1>{HomeConstants.OurVision.SubHeadline}</Body1>
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

              <Card className="col-start-1 col-end-7 border-primary-grey border-2 backdrop-blur-lg flex justify-between min-h-[320px]">
                <div className="w-1/3 gap-2 flex flex-col justify-between h-full">
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
                <LearnIconsImage className="top-0 right-0 h-full w-1/3 z-10" />
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

          {/* 

          OUR PARTNERS
           
           */}

          <section className="justify-center items-center flex flex-col gap-6 my-40">
            <div className="relative text-center">
              <div className="absolute -top-24 right-28">
                <StarShineImage className="h-[250px] w-[250px]"></StarShineImage>
              </div>
              <div className="absolute -top-[250px] -left-2/3">
                <ShineImage className="h-[600px] w-[600px]"></ShineImage>
              </div>
              <BodyHeadline className="font-paragraph relative mb-6">
                {HomeConstants.OurPartners.Headline}
              </BodyHeadline>
              <Body3 color="neutral-700" className="font-paragraph relative">
                {HomeConstants.OurPartners.SubHeadline}
              </Body3>
            </div>
            <Grid>
              <Card
                className={cx(
                  "min-h-[320px] border-primary-grey border-2 backdrop-blur-lg flex",
                  "flex-col gap-2",
                  "col-start-1 col-end-5"
                )}>
                <div className="relative justify-center overflow-hidden flex rounded-full bg-neutral-800 h-28 w-28">
                  <Image
                    fill
                    src={HomeConstants.OurPartners.partnersGold[0].image}
                    alt={HomeConstants.OurPartners.partnersGold[0].image}
                  />
                </div>
                <BodyHeadline className="">
                  {HomeConstants.OurPartners.partnersGold[0].title}
                </BodyHeadline>
                <Body3
                  color="neutral-700"
                  className="uppercase font-bold text-neutral-700">
                  {HomeConstants.OurPartners.partnersGold[0].type}
                </Body3>
                <Body3 color="neutral-700" className="">
                  {HomeConstants.OurPartners.partnersGold[0].description}
                </Body3>
              </Card>

              <Card
                className={cx(
                  "min-h-[320px] border-primary-grey border-2 backdrop-blur-lg flex",
                  "flex-col gap-2",
                  "col-start-5 col-end-9"
                )}>
                <div className="relative justify-center overflow-hidden flex rounded-full bg-neutral-800 h-28 w-28">
                  <Image
                    fill
                    src={HomeConstants.OurPartners.partnersGold[1].image}
                    alt={HomeConstants.OurPartners.partnersGold[1].image}
                  />
                </div>
                <BodyHeadline className="">
                  {HomeConstants.OurPartners.partnersGold[0].title}
                </BodyHeadline>
                <Body3
                  color="neutral-700"
                  className="uppercase font-bold text-neutral-700">
                  {HomeConstants.OurPartners.partnersGold[0].type}
                </Body3>
                <Body3 color="neutral-700" className="">
                  {HomeConstants.OurPartners.partnersGold[0].description}
                </Body3>
              </Card>

              <Card
                className={cx(
                  "min-h-[320px] border-primary-grey border-2 backdrop-blur-lg flex",
                  "flex-col gap-2",
                  "col-start-9 col-end-13"
                )}>
                <div className="relative justify-center overflow-hidden flex rounded-full bg-neutral-800 h-28 w-28">
                  <Image
                    fill
                    src={HomeConstants.OurPartners.partnersGold[2].image}
                    alt={HomeConstants.OurPartners.partnersGold[2].image}
                  />
                </div>
                <BodyHeadline className="">
                  {HomeConstants.OurPartners.partnersGold[0].title}
                </BodyHeadline>
                <Body3
                  color="neutral-700"
                  className="uppercase font-bold text-neutral-700">
                  {HomeConstants.OurPartners.partnersGold[0].type}
                </Body3>
                <Body3 color="neutral-700" className="">
                  {HomeConstants.OurPartners.partnersGold[0].description}
                </Body3>
              </Card>
              <div
                className={cx(
                  "flex justify-center items-center my-10",
                  "col-start-1 col-end-13"
                )}>
                {HomeConstants.OurPartners.partnersSilver.map((p, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center gap-2 min-w-[200px]">
                      <div className="relative flex justify-center items-center rounded-full bg-neutral-800 overflow-hidden h-32 w-32">
                        <Image fill src={p.image} alt={p.image} />
                      </div>
                      <Body2 className="text-center">{p.title}</Body2>
                      <Body3
                        color="neutral-700"
                        className="uppercase font-bold text-center text-neutral-700">
                        {p.type}
                      </Body3>
                    </div>
                  );
                })}
              </div>
            </Grid>
            <Link href={HomeConstants.OurPartners.link} target="_bla">
              <Button className="font-paragraph">Partner with us</Button>
            </Link>
          </section>

          {/* OUR TESTIMONIALS */}
          <section className="justify-center items-center flex flex-col gap-6 my-40">
            <div className="relative text-center">
              <div className="absolute -top-24 right-28">
                <StarShineImage className="h-[250px] w-[250px]"></StarShineImage>
              </div>
              <div className="absolute -top-[250px] -left-2/3">
                <ShineImage className="h-[600px] w-[600px]"></ShineImage>
              </div>
              <BodyHeadline className="font-paragraph relative mb-6">
                {HomeConstants.Testimonials.Headline}
              </BodyHeadline>
              <Body3 color="neutral-700" className="font-paragraph relative">
                {HomeConstants.Testimonials.SubHeadline}
              </Body3>
            </div>
            <Carousel
              className="mb-28"
              showArrows={false}
              swipeable
              centerMode={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              renderArrowPrev={(
                clickPrevHandler: () => void,
                hasPrev: boolean,
                label: string
              ) => (
                <ArrowLeftIcon
                  className="absolute -bottom-0 left-1/2 h-24 w-24 -translate-x-28"
                  onClick={() => clickPrevHandler()}
                />
              )}
              renderArrowNext={(
                clickHandler: () => void,
                hasPrev: boolean,
                label: string
              ) => (
                <ArrowRightIcon
                  className="absolute bottom-0 left-1/2 h-24 w-24 translate-x-2"
                  onClick={() => clickHandler()}
                />
              )}>
              {HomeConstants.Testimonials.cards.map((p, i) => {
                return (
                  <div key={i} className="w-full flex justify-center">
                    <Card
                      noPadding
                      className={cx(
                        "min-h-[320px] w-[600px] mb-32 border-primary-grey border-2 backdrop-blur-lg flex p-0 rounded-lg",
                        "gap-2"
                      )}>
                      <div className="p-6 w-1/3 flex flex-col justify-end text-left">
                        <div className="relative flex justify-center items-center rounded-full bg-neutral-800 overflow-hidden h-16 w-16 mb-3">
                          <Image fill src={p.image} alt={p.name} />
                        </div>
                        <BodyHeadline className="">{p.name}</BodyHeadline>
                        <Body3
                          color="neutral-700"
                          className="uppercase font-bold text-neutral-700">
                          {p.title}
                        </Body3>
                      </div>
                      <div className="border-l-2 border-primary-grey p-6 rounded-lg">
                        <Body3
                          color="neutral-700 max-w-[300px] text-left"
                          className="">
                          {p.testimonial}
                        </Body3>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </Carousel>
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
