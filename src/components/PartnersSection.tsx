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
import { Attachment } from "airtable";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import HomeConstants from "../constants/home.json";

interface Partner {
  name: string;
  variant: string;
  status: string;
  image: Attachment[];
  description?: string;
}

type IPartnersSectionProps = {
  partners: Partner[];
};

const IPartnersSectionDefaultProps = {};

const PartnersSection: React.FC<IPartnersSectionProps> = (props) => {
  const { partners } = props;
  const silverPartners = partners
    ? partners.filter((partner) => partner.status === "silver")
    : [];
  const goldPartners = partners
    ? partners.filter((partner) => partner.status === "gold")
    : [];

  useEffect(() => {}, []);

  return (
    <>
      <div className="justify-center items-center flex flex-col gap-6 my-40">
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
          <div className="col-start-1 col-end-13 flex md:flex-row flex-col gap-3">
            {goldPartners.map((gp) => (
              <Card
                key={gp.name}
                className={cx(
                  "transition-all grayscale hover:grayscale-0 min-h-[320px] w-full  border-2 backdrop-blur-lg flex",
                  "flex-col gap-2"
                )}>
                <div className="relative justify-center overflow-hidden flex  h-28 w-28 ">
                  <Image
                    className=""
                    layout={"fill"}
                    objectFit={"contain"}
                    src={gp.image[0].url}
                    alt={gp.name}
                  />
                </div>
                <BodyHeadline className="">{gp.name}</BodyHeadline>
                <Body3
                  color="neutral-700"
                  className="uppercase font-bold text-neutral-700">
                  {gp.variant}
                </Body3>
                <Body3 color="neutral-700" className="">
                  {gp.description}
                </Body3>
              </Card>
            ))}
          </div>
          <div
            className={cx(
              "flex justify-center my-10",
              "col-start-1 col-end-13"
            )}>
            {silverPartners.map((p, i) => {
              return (
                <div
                  key={i}
                  className="transition-all grayscale hover:grayscale-0 flex flex-col items-center gap-2 min-w-[200px]">
                  <div className="relative flex justify-center items-center overflow-hidden h-32 w-32 ">
                    <Image
                      layout={"fill"}
                      objectFit={"contain"}
                      src={p.image[0].url}
                      alt={p.name}
                    />
                  </div>
                  <Body2 className="text-center">{p.name}</Body2>
                  <Body3
                    color="neutral-700"
                    className="uppercase font-bold text-center text-neutral-700">
                    {p.variant}
                  </Body3>
                </div>
              );
            })}
          </div>
        </Grid>
        <Link href={"/partners"}>
          <Button className="font-paragraph">Partner with us</Button>
        </Link>
      </div>
    </>
  );
};

PartnersSection.defaultProps = IPartnersSectionDefaultProps;

export default PartnersSection;
