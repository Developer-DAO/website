import {
  Body2,
  Body3,
  BodyHeadline,
  Button,
  Card,
  Grid,
  ShineImage,
  StarShineImage,
} from "@gordo-d/d-d-ui-components";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import HomeConstants from "../constants/home.json";
type IPartnersSectionProps = {};

const IPartnersSectionDefaultProps = {};

const PartnersSection: React.FC<IPartnersSectionProps> = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  function cx(arg0: string, arg1: string, arg2: string): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

PartnersSection.defaultProps = IPartnersSectionDefaultProps;

export default PartnersSection;
