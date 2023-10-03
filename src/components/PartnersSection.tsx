import {
  Body1,
  Body2,
  Body3,
  BodyHeadline,
  Button,
  Card,
  Grid,
  HeartIcon,
} from "@gordo-d/d-d-ui-components";
import { Attachment } from "airtable";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import HomeConstants from "../constants/home.json";
import SectionTitle from "./sectionTitle";

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
      <div className="my-60 flex flex-col items-center justify-center gap-6">
        <SectionTitle
          headline={HomeConstants.OurPartners.Headline}
          subheadline={HomeConstants.OurPartners.SubHeadline}
        />
        <Grid>
          <div className="col-start-1 col-end-13 flex flex-col gap-3 md:flex-row">
            {goldPartners.map((gp) => (
              <Card
                key={gp.name}
                className={cx(
                  "flex min-h-[320px] w-full border-2 grayscale  backdrop-blur-lg transition-all hover:grayscale-0",
                  "flex-col gap-2"
                )}>
                <div className="relative flex h-28 w-28  justify-center overflow-hidden ">
                  <Image
                    className=""
                    layout={"fill"}
                    objectFit={"contain"}
                    src={gp.image[0].url}
                    alt={gp.name}
                  />
                </div>
                <BodyHeadline className="">{gp.name}</BodyHeadline>
                <Body1
                  color="neutral-700"
                  className="font-bold uppercase text-neutral-700">
                  {gp.variant}
                </Body1>
                <Body3 color="neutral-700" className="">
                  {gp.description}
                </Body3>
              </Card>
            ))}
          </div>
          <div
            className={cx(
              "my-10 flex justify-center",
              "col-start-1 col-end-13"
            )}>
            {silverPartners.map((p, i) => {
              return (
                <div
                  key={i}
                  className="flex min-w-[200px] flex-col items-center gap-2 grayscale transition-all hover:grayscale-0">
                  <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden ">
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
                    className="text-center font-bold uppercase text-neutral-700">
                    {p.variant}
                  </Body3>
                </div>
              );
            })}
          </div>
        </Grid>
        <Link href={"/partners"}>
          <Button
            variant="secondary"
            icon={<HeartIcon className="mr-1 h-5 w-5" />}
            className="font-paragraph font-semibold tracking-wider ">
            Partner with us
          </Button>
        </Link>
      </div>
    </>
  );
};

PartnersSection.defaultProps = IPartnersSectionDefaultProps;

export default PartnersSection;
