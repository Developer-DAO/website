import PartnersSection from "@/components/PartnersSection";
import PartnersCardsSection from "@/components/Partners_CardsSection";
import Testimonials from "@/components/Testimonials";
import AppLayout from "@/components/layout/layout";
import { fetchFromAirtable } from "@/lib/airtable/airtableFetch";
import {
  Body2,
  Button,
  Headline1,
  Headline2,
  StarIcon,
  ThunderIcon,
} from "@gordo-d/d-d-ui-components";
import { motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigationData from "../constants/navigation.json";
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
  useEffect(() => {}, []);

  return (
    <>
      <article className="text-primary-white relative overflow-hidden">
        {/* STARS */}

        <div className="w-screen overflow-hidden p-4 md:p-0">
          {/* HEADING */}
          <section className="relative z-30 flex min-h-screen flex-col items-center justify-center gap-6">
            <div className="absolute right-0 top-0 z-20 h-screen w-screen">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.1, ease: "easeInOut" }}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={"/bgBlackStars.svg"}
                  alt={""}
                />
              </motion.div>
            </div>
            <div className="top-30 absolute right-0 z-20 h-[1300px] w-[1700px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={"/shinePartners.svg"}
                  alt={""}
                />
              </motion.div>
            </div>
            <div className="z-50 flex flex-col items-center justify-center gap-2">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}>
                  <Image
                    width={70}
                    height={70}
                    className="absolute -right-16 -top-12"
                    src={"/shine.svg"}
                    alt={""}
                  />
                </motion.div>
                <Headline1 className="font-heading tracking-wider">
                  {PartnersConstants.headline}
                </Headline1>
              </div>
              <Body2 className="font-paragraph mb-6">
                {PartnersConstants.subheadline}
              </Body2>
              <div className="flex gap-4">
                <Link href={NavigationData.ctas.getInTouch} target="_blank">
                  <Button
                    className="font-paragraph 
                    font-semibold 
                    drop-shadow-[3px_0_30px_rgba(254,254,254,0.472)]
                    transition-all hover:drop-shadow-[10px_0_40px_rgba(254,254,254,0.472)]"
                    icon={<StarIcon className="h-5 w-5" />}
                    iconPosition="left">
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* partners */}
          <section className="my-20 flex w-full items-center justify-center gap-36 p-10">
            {headLinePartners.image.map(
              (p: { url: string | StaticImport }, i: any) => (
                <div
                  key={i}
                  className="relative flex h-[100px] w-[300px] items-center justify-center overflow-hidden grayscale transition-all hover:grayscale-0">
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

          {/* WE ARE... */}
          <section className="mb-20 flex justify-center">
            <div className="flex max-w-2xl flex-col items-center justify-center text-center">
              <Headline2 className="font-heading uppercase">
                {PartnersConstants.future.headline}
              </Headline2>
              <div className="my-7 h-[200px] w-[2px] bg-white"></div>
              <Link href={NavigationData.ctas.getInTouch} target="_blank">
                <Button
                  className="font-paragraph 
                    font-semibold 
                    drop-shadow-[3px_0_30px_rgba(254,254,254,0.472)]
                    transition-all hover:drop-shadow-[10px_0_40px_rgba(254,254,254,0.472)]"
                  icon={<ThunderIcon className="h-5 w-5" />}
                  iconPosition="left">
                  Partner with us
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export async function getStaticProps() {
  const partners = await fetchFromAirtable({
    tableName: "Partners",
  });

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
