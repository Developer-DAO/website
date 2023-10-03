import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import D_D_People from "@/components/People";
import Testimonials from "@/components/Testimonials";
import Vision from "@/components/Vision";
import {
  Body1,
  Button,
  Headline1,
  Headline2,
} from "@gordo-d/d-d-ui-components";

import PartnersSection from "@/components/PartnersSection";
import { fetchFromAirtable } from "@/lib/airtable/airtableFetch";
import { resolveEnsNamesToAvatars } from "@/lib/ensAvatars";
import { Body2, StarIcon } from "@gordo-d/d-d-ui-components";
import Image from "next/image";
import Link from "next/link";
import AppLayout from "../components/layout/layout";
import ensAddresses from "../constants/ensAddresses.json";
import HomeConstants from "../constants/home.json";
import TestimonialsData from "../constants/testimonials.json";

// interface Record {
//   [key: string]: any;
// }

// interface Props {
//   records: Record[];
// }

const HomePage = ({ partners, ensListData }: any) => {
  const router = useRouter();

  return (
    <>
      <article id="home" className="text-primary-white relative overflow-hidden">
        {/* STARS */}

        <div className="relative w-screen overflow-hidden p-4 md:p-0">
          {/* HEADING */}
          <section className="relative z-30 flex min-h-screen flex-col items-center justify-center gap-6">
            <div className="absolute right-0 top-0 z-20 h-screen w-screen">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3, ease: "easeInOut" }}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={"/bgBlackStars.svg"}
                  alt={""}
                />
              </motion.div>
            </div>
            <div className="absolute right-0 top-0 z-20 h-screen w-screen">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={"/rays.svg"}
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
                <Headline1 className="font-heading">
                  {HomeConstants.headline}
                </Headline1>
              </div>
              <Body2 className="font-paragraph mb-6">
                {HomeConstants.subheadline}
              </Body2>
              <div className="flex gap-4">
                <Link
                  href={"https://kempsterrrr.gitbook.io/developer-dao-docs/"}
                  target="_blank">
                  <Button
                    className="font-paragraph 
                    font-semibold 
                    drop-shadow-[3px_0_30px_rgba(254,254,254,0.472)]
                    transition-all hover:drop-shadow-[10px_0_40px_rgba(254,254,254,0.472)]"
                    icon={<StarIcon className="h-5 w-5" />}
                    iconPosition="left">
                    DAO Handbook
                  </Button>
                </Link>
                <Link href={"/partners"}>
                  <Button
                    className="font-paragraph font-semibold tracking-wider"
                    variant="secondary">
                    Partner with us
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <D_D_People ensImages={ensListData} />

          {/* WE ARE... */}
          <section className="flex justify-center ">
            <div className="flex max-w-2xl flex-col items-center justify-center text-center">
              <Body1>{HomeConstants.whoIntro}</Body1>
              <Headline2 className="font-heading">
                {HomeConstants.whoHeadline}
              </Headline2>
              <div className="h-[200px] w-[2px] bg-white"></div>
              <Headline2 className="font-heading">
                {HomeConstants.whoHeadline2}
              </Headline2>
            </div>
          </section>

          <Vision />

          <PartnersSection partners={partners} />

          <Testimonials testimonials={TestimonialsData} />
        </div>
      </article>
    </>
  );
};

export async function getStaticProps() {
  const partners = await fetchFromAirtable({
    tableName: "Partners",
  });
  const providerUrl = process.env.POKTRPC_MAINNET ?? "";
  // const providerUrl = "https://eth.meowrpc.com/";
  const ensNames = ensAddresses;
  const ensListData = await resolveEnsNamesToAvatars(ensNames, providerUrl);
  return {
    props: {
      partners,
      ensListData,
    },
    revalidate: 86400,
  };
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
