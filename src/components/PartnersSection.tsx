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
  image: any[];
  description?: string;
  URL?: string;
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
              <Link target="_blank" className="flex-1 grayscale transition-all hover:grayscale-0" key={gp.name} href={gp.URL ? gp.URL : ""}>
                <Card
                  className={cx(
                    "flex min-h-[320px] border-2 ",
                    "flex-col gap-2"
                  )}>
                  <div className="relative flex h-28 w-28  justify-center overflow-hidden ">
                    <Image
                      className=""
                      layout={"fill"}
                      objectFit={"contain"}
                      src={gp.image[0].localPath ? gp.image[0].localPath : gp.image[0].url}
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
              </Link>
            ))}
          </div>
          <div
            className={cx(
              "my-10 flex flex-wrap justify-center gap-10 md:flex-row",
              "col-start-1 col-end-13"
            )}>
            {silverPartners.map((p, i) => {
              return (
                <Link target="_blank" key={p.name} href={p.URL ? p.URL : ""}>
                  <div className="flex min-w-[150px] flex-col items-center gap-2 grayscale transition-all ease-in-out hover:grayscale-0">
                    <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden ">
                      <Image
                        layout={"fill"}
                        objectFit={"contain"}
                        src={p.image[0].localPath ? p.image[0].localPath : p.image[0].url}
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
                </Link>
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
