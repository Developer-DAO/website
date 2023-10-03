import { useRouter } from "next/router";
import { ReactElement } from "react";

import D_D_People from "@/components/People";
import Testimonials from "@/components/Testimonials";
import Vision from "@/components/Vision";
import {
  Body1,
  Button,
  Headline1,
  Headline2
} from "@gordo-d/d-d-ui-components";

import PartnersSection from "@/components/PartnersSection";
import { fetchFromAirtable } from "@/lib/airtable/airtableFetch";
import { Body2, StarIcon } from "@gordo-d/d-d-ui-components";
import Image from "next/image";
import Link from "next/link";
import AppLayout from "../components/layout/layout";
import HomeConstants from "../constants/home.json";
import SectionTitle from "@/components/sectionTitle";

// interface Record {
//   [key: string]: any;
// }

// interface Props {
//   records: Record[];
// }

const HomePage = ({ partners }: any) => {
  const router = useRouter();
  console.log(partners);

  return (
    <>
      <article className="text-primary-white relative overflow-hidden">
        {/* STARS */}

        <div className="w-screen overflow-hidden p-4 md:p-0 relative">
          {/* HEADING */}
          <section className="relative z-30 flex min-h-screen flex-col justify-center items-center gap-6">
            <div className="absolute top-0 right-0 w-screen z-20">
            <Image layout="fill" src={"/rays.svg"} alt={""} />
             </div>
             <div className="z-50 flex flex-col justify-center items-center gap-2">
              <div className="relative">

              <Image width={100} height={100} className="absolute -right-20 -top-10" src={"/starsWhite.svg"} alt={""}/>
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
                  className="font-semibold font-paragraph 
                  
                  drop-shadow-[3px_0_30px_rgba(254, 254, 254, 0.472)]
                  hover:drop-shadow-[10px_0_40px_rgba(254, 254, 254, 0.472)]"
                  icon={<StarIcon className="h-5 w-5" />}
                  iconPosition="left">
                  DAO Handbook
                </Button>
              </Link>
              <Link href={"/partners"}>
                <Button className="font-semibold font-paragraph tracking-wider" variant="secondary">Partner with us</Button>
              </Link>
              </div>
            </div>
          </section>

          <D_D_People />

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
          
          <Vision />

          <PartnersSection partners={partners} />

          <Testimonials testimonials={HomeConstants.Testimonials} />
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

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
