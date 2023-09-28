import PartnersSection from "@/components/PartnersSection";
import PartnersCardsSection from "@/components/Partners_CardsSection";
import Testimonials from "@/components/Testimonials";
import AppLayout from "@/components/layout/layout";
import { fetchFromAirtable } from "@/lib/airtable/airtableFetch";
import {
  Body3,
  Button,
  Headline1,
  ThunderIcon,
} from "@gordo-d/d-d-ui-components";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactElement, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PartnersConstants from "../constants/partners.json";

type IPartnersPageProps = {
  // TODO: type
  partners: any[];
};

const IPartnersPageDefaultProps = {};

const PartnersPage = (props: IPartnersPageProps) => {
  const { partners } = props;
  const headLinePartners = partners
    ? partners.find((partner) => partner.name === "headline")
    : [];
  console.log(partners, headLinePartners);
  useEffect(() => {}, []);

  return (
    <>
      <article className="text-primary-white relative overflow-hidden">
        {/* STARS */}

        <div className="w-screen overflow-hidden p-4 md:p-0">
          {/* HEADING */}
          <section className="z-30 flex min-h-screen flex-col justify-center items-center text-white gap-6">
            <Headline1 className="font-heading">
              {PartnersConstants.headline}
            </Headline1>
            <Body3 className="font-paragraph">
              {PartnersConstants.subheadline}
            </Body3>
            <div className="flex gap-4">
              <Button
                className="pr-6 font-semibold"
                icon={<ThunderIcon className="h-6 w-6" />}
                iconPosition="left">
                Get in touch
              </Button>
            </div>
          </section>

          {/* partners */}
          <section className="p-10 my-20 flex w-full gap-36 justify-center items-center">
            {headLinePartners.image.map(
              (p: { url: string | StaticImport }, i: any) => (
                <div className="transition-all grayscale hover:grayscale-0 relative flex justify-center items-center overflow-hidden w-[300px] h-[100px]">
                  <Image
                    layout={"fill"}
                    objectFit={"contain"}
                    src={p.url}
                    alt={""}
                  />
                </div>
              )
            )}
          </section>

          <PartnersCardsSection />

          <PartnersSection partners={partners} />

          <Testimonials testimonials={PartnersConstants.Testimonials} />
        </div>
      </article>
    </>
  );
};

export async function getStaticProps() {
  const partners = await fetchFromAirtable({
    tableName: "Partners",
  });
  console.log(partners);

  return {
    props: {
      partners,
    },
    // revalidate: 10,
  };
}

PartnersPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
PartnersPage.defaultProps = IPartnersPageDefaultProps;

export default PartnersPage;
