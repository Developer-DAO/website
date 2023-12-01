import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

import D_D_People from '@/components/People';
import Testimonials from '@/components/Testimonials';
import Vision from '@/components/Vision';
import { Body1, Button, Headline1, Headline2 } from '@gordo-d/d-d-ui-components';

import PartnersSection from '@/components/PartnersSection';
import SEO from '@/components/SEO';
import AppLayout from '@/components/layout/layout';
import { fetchFromAirtable } from '@/lib/airtable/airtableFetch';
import { resolveEnsNamesToAvatars } from '@/lib/ensAvatars';
import { Body2, StarIcon } from '@gordo-d/d-d-ui-components';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import HomeConstants from '../constants/home.json';
import navigation from '../constants/navigation.json';
interface Record {
  [key: string]: any;
}

interface Props {
  records: Record[];
}

const HomePage = (props: any) => {
  const {communityTestimonials, partners, communityData, community} = props;
  console.log('🚀 ~ file: index.tsx:37 ~ HomePage ~ partners:', partners);
  console.log(
    '🚀 ~ file: index.tsx:37 ~ HomePage ~ communityData:',
    communityData
  );
  console.log(
    '🚀 ~ file: index.tsx:37 ~ HomePage ~ communityTestimonials:',
    communityTestimonials
  );

  const evenItems = communityData?.filter((_: any, index: number) => index % 2 === 0);
  const oddItems = communityData?.filter((_: any, index: number) => index % 2 !== 0);

  const router = useRouter();
  
    // Animation setup
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.25, // Adjust as needed
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    const variants = {
      visible: { opacity: 1, translateY: 0, transition: { duration: 0.8 } },
      hidden: { opacity: 0, translateY: 20 },
    };

  return (
    <>
      <SEO
        title="Developer DAO"
        description="BUIDL WEB3 WITH __ FRIENDS. Developer DAO has brought together some of the most talented people on the web to build web3."
        image="/RRSS_D_D_Image.png"
        icon="/favicon.ico"
        url="https://developerdao.com"
        twitterHandle="@developerdao"
      />

      <article
        id="home"
        className="text-primary-white relative overflow-hidden">
        {/* STARS */}
        <div
          className="relative w-screen overflow-hidden p-4 md:p-0">
          {/* HEADING */}
          
          <section className="relative z-30 flex min-h-screen md:min-h-[85vh] w-full flex-col items-center justify-center gap-6">
            <div className="absolute right-0 top-0 z-20 h-screen w-screen">
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.8, duration: 0.3, ease: 'easeInOut'}}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={'/bgBlackStars.svg'}
                  alt={''}
                />
              </motion.div>
            </div>
            <div className="absolute right-0 top-0 z-20 h-screen w-screen">
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.5, ease: 'easeInOut'}}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={'/rays.svg'}
                  alt={''}
                />
              </motion.div>
            </div>
            <div className="z-50 m-10 max-w-5xl flex w-full flex-col items-center justify-center gap-2 text-center">
              <div className="relative">
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 2, duration: 0.3, ease: 'easeInOut'}}>
                  <Image
                    width={70}
                    height={70}
                    className="absolute md:-right-16 md:-top-12 -top-28 right-1/3"
                    src={'/shine.svg'}
                    alt={''}
                  />
                </motion.div>
                <Headline1 className="font-heading">
                  {HomeConstants.headline}
                </Headline1>
              </div>
              <Body2
                color="neutral-600"
                className="font-paragraph mb-6 px-10 md:px-0">
                {HomeConstants.subheadline}
              </Body2>
              <div className="flex flex-col gap-4 md:flex-row">
                <Link href={navigation.ctas.handbook} target="_blank">
                  <Button
                    className="font-paragraph 
                    font-semibold 
                    drop-shadow-[3px_0_30px_rgba(254,254,254,0.472)]
                    transition-all hover:drop-shadow-[10px_0_40px_rgba(254,254,254,0.472)]"
                    icon={<StarIcon className="h-5 w-5" />}
                    iconPosition="left">
                    Get involved
                  </Button>
                </Link>
                <Link href={'/partners'}>
                  <Button
                    className="font-paragraph w-full font-semibold tracking-wider"
                    variant="secondary">
                    Partner with us
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <div
          className="mb-20 flex w-full justify-center overflow-x-auto">
            <div className="">
              <D_D_People
                showCount={80}
                className="justify-center gap-6 p-6"
                community={evenItems}
              />
              <D_D_People
                showCount={80}
                stylesData={{paddingLeft: 60}}
                className="justify-center gap-6 pb-6 pr-6 pl-28 ml-6"
                community={oddItems}
              />
            </div>
          </div>
          {/* 
          <div className="my-20">
            <SectionTitle
              headline={HomeConstants.OurMision.Headline}
              subheadline={HomeConstants.OurMision.SubHeadline}
            />
          </div> */}

          {/* WE ARE... */}
          <section id="we" className="flex justify-center ">
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

          <Testimonials testimonialsData={communityTestimonials} />
        </div>
      </article>
    </>
  );
};

export async function getStaticProps() {
  const partners = await fetchFromAirtable({
    tableName: 'Partners',
  });

  const communityTestimonials = await fetchFromAirtable({
    tableName: 'CommunityTestimonials',
  });
  const community = await fetchFromAirtable({
    tableName: 'Community',
  });
  const validCommunity = community.filter((p) => Boolean(p.ENS));

  const providerUrl = process.env.POKTRPC_MAINNET ?? '';
  // Extract ENS names from the community data
  const ensNames = validCommunity.map((p) => p.ENS);

  // Resolve ENS names to get additional data
  const resolvedEnsData = await resolveEnsNamesToAvatars(ensNames, providerUrl);

  const communityData = validCommunity.map((member, index) => ({
    ...member,
    ...resolvedEnsData[index],
  }));


  return {
    props: {
      partners,
      communityTestimonials,
      communityData,
    },
    revalidate: 86400,
  };
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
