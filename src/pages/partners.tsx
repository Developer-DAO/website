import PartnersCardsSection from "@/components/Partners_CardsSection";
import Testimonials from "@/components/Testimonials";
import AppLayout from "@/components/layout/layout";
import { fetchFromAirtable } from "@/lib/airtable/airtableFetch";
import { resolveEnsNamesToAvatars } from "@/lib/ensAvatars";
import {
  Body2,
  Button,
  Headline1,
  Headline2,
  StarIcon,
  ThunderIcon,
} from "@gordo-d/d-d-ui-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigationData from "../constants/navigation.json";
import PartnersConstants from "../constants/partners.json";
import PartnerTestimonials from "@/components/PartnerTestimonials";
import SEO from '@/components/SEO';

type IPartnersPageProps = {
  // TODO: type
  partners: any[];
  partnerTestimonials: any[];
  communityData: any[];
};

const IPartnersPageDefaultProps = {};

const PartnersPage = (props: IPartnersPageProps) => {
  const { partners, partnerTestimonials, communityData } = props;
  const headLinePartners = partners;

  return (
    <>
              <SEO
        title="Developer DAO | Partners"
        description="Enlarge your audience with Developer DAO"
        image="/RRSS_D_D_Image.png"
        url="https://developerdao.com"
        twitterHandle="@developerdao"
      />
      <article className="text-primary-white relative overflow-hidden">
        {/* STARS */}

        <div className="w-screen overflow-hidden p-4 md:p-0">
          {/* HEADING */}
          <section className="relative z-30 flex min-h-screen w-full flex-col items-center justify-center gap-6">
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
            <div className="z-50 m-10 flex w-full flex-col items-center justify-center gap-2 text-center">
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
                <Headline1 className="font-heading px-7 tracking-wider">
                  {PartnersConstants.headline}
                </Headline1>
              </div>
              <Body2
                color="neutral-600"
                className="font-paragraph mb-6 px-10 md:px-0">
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

          <section className="relative z-40 my-20 flex w-screen overflow-x-auto overflow-y-hidden ">
            <div className="inline-flex p-10">
              {partners.map((p: any, i: any) => (
                <Link
                  key={i}
                  className="relative mx-4 flex h-[70px] w-[150px] items-center justify-center grayscale transition-all hover:grayscale-0  md:mx-6 md:h-[85px] md:w-[300px]"
                  href={p.URL ? p.URL : ""}
                  target="_blank">
                  {p.image[1].url && (
                    <Image
                      layout={"fill"}
                      objectFit={"contain"}
                      src={p.image[1].url}
                      alt={""}
                    />
                  )}
                </Link>
              ))}
            </div>
          </section>

          <PartnersCardsSection communityData={communityData} />

          <PartnerTestimonials testimonialsData={partnerTestimonials} />

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
  const partnerTestimonials = await fetchFromAirtable({
    tableName: "PartnerTestimonials",
  });
  const community = await fetchFromAirtable({
    tableName: "Community",
  });
  const validCommunity = community.filter((p) => Boolean(p.ENS));

  const providerUrl = process.env.POKTRPC_MAINNET ?? "";
  // Extract ENS names from the community data
  const ensNames = validCommunity.map((p) => p.ENS);

  // Resolve ENS names to get additional data
  const resolvedEnsData = await resolveEnsNamesToAvatars(ensNames, providerUrl);

  const communityData = community.map((member, index) => ({
    ...member,
    ...resolvedEnsData[index],
  }));

  return {
    props: {
      partners,
      partnerTestimonials,
      communityData,
    },
    // revalidate: 10,
  };
}

PartnersPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
PartnersPage.defaultProps = IPartnersPageDefaultProps;

export default PartnersPage;
