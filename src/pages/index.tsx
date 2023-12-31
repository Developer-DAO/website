
import D_D_People from '@/components/People';
import Testimonials from '@/components/Testimonials';
import Vision from '@/components/Vision';
import { Body1, Button, Headline1, Headline2 } from '@gordo-d/d-d-ui-components';

import PartnersSection from '@/components/PartnersSection';
import SEO from '@/components/SEO';
import useSectionAnimation from '@/hooks/useSectionAnimation';
import { saveTable } from '@/lib/airtable/airtableStaticFetch';
import { Body2, StarIcon } from '@gordo-d/d-d-ui-components';
import { motion } from 'framer-motion';
import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import { useEffect, useState } from 'react';
import HomeConstants from '../constants/home.json';
import navigation from '../constants/navigation.json';


interface Record {
  [key: string]: any;
}

interface Props {
  records: Record[];
}

const HomePage = (props: any) => {
  const {communityTestimonials, partners, communityData} = props;
  console.log("🚀 ~ file: index.tsx:30 ~ HomePage ~ communityData:", communityData)
  console.log("🚀 ~ file: index.tsx:30 ~ HomePage ~ partners:", partners)
  console.log("🚀 ~ file: index.tsx:30 ~ HomePage ~ communityTestimonials:", communityTestimonials)

  const evenItems = communityData?.filter(
    (_: any, index: number) => index % 2 === 0
  );
  const oddItems = communityData?.filter(
    (_: any, index: number) => index % 2 !== 0
  );

  const variants = {
    visible: {opacity: 1, translateY: 0, transition: {duration: 0.8}},
    hidden: {opacity: 0, translateY: 20},
  };
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Wait for initial Font loading.
  useEffect(() => {
    Promise.all([
      document.fonts.load('1em ClashDisplay'),
      document.fonts.load('1em Poppins')
    ]).then(() => {
      setFontsLoaded(true);
    }).catch(error => {
      console.error('One or more fonts failed to load', error);
    });
  }, []);

  const weAreAnimation = useSectionAnimation();
  const visionAnimation = useSectionAnimation();
  const partnersAnimation = useSectionAnimation();
  const testimonialsAnimation = useSectionAnimation();

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
        <div className="relative w-screen overflow-hidden p-4 md:p-0">
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
            {fontsLoaded && <div className="z-50 m-10 max-w-5xl flex w-full flex-col items-center justify-center gap-2 text-center">
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
                className="font-paragraph font-normal mb-6 px-10 md:px-0">
                {HomeConstants.subheadline}
              </Body2>
              <div className="flex flex-col gap-4 md:flex-row">
                <Link href={navigation.ctas.handbook} target="_blank">
                  <Button
                    className="font-paragraph  font-medium
                    drop-shadow-[3px_0_30px_rgba(254,254,254,0.472)]
                    transition-all hover:drop-shadow-[10px_0_40px_rgba(254,254,254,0.472)]"
                    icon={<StarIcon className="h-5 w-5" />}
                    iconPosition="left">
                    Get involved
                  </Button>
                </Link>
                <Link href={'/partners'}>
                  <Button
                    className="font-paragraph w-full font-medium tracking-wider"
                    variant="secondary">
                    Partner with us
                  </Button>
                </Link>
              </div>
            </div>}
          </section>

          {/* PEOPLE */}
          <div
            className="mb-20 flex w-full justify-center overflow-x z-50">
            <div className="">
              <D_D_People
                key="evenItems"
                showCount={80}
                className="justify-center gap-6 p-6"
                community={evenItems}
              />
              <D_D_People
                key="oddItems"
                showCount={80}
                elementClassName="last:hidden"
                className="justify-center gap-6 pb-6 pr-6 ml-6"
                community={oddItems}
              />
            </div>
          </div>

          {/* WE ARE... */}
          <motion.section
            ref={weAreAnimation.ref}
            initial="hidden"
            animate={weAreAnimation.controls}
            variants={variants}
            id="we"
            className="flex justify-center ">
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
          </motion.section>

          {/* Vision */}
          <motion.div
            ref={visionAnimation.ref}
            initial="hidden"
            animate={visionAnimation.controls}
            variants={variants}>
            <Vision />
          </motion.div>

          {/* Partners Section */}
          <motion.div
            ref={partnersAnimation.ref}
            initial="hidden"
            animate={partnersAnimation.controls}
            variants={variants}>
            <PartnersSection partners={partners} />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            ref={testimonialsAnimation.ref}
            initial="hidden"
            animate={testimonialsAnimation.controls}
            variants={variants}>
            <Testimonials testimonialsData={communityTestimonials} />
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const baseDir = path.join(process.cwd(), 'public');
  const dataDir = path.join(baseDir, 'data');
  const imageDirBase = path.join(baseDir, 'images');

  await Promise.all([
    saveTable('Community', dataDir, imageDirBase),
    saveTable('CommunityTestimonials', dataDir, imageDirBase),
    saveTable('Partners', dataDir, imageDirBase),
  ]);

  const communityData = JSON.parse(fs.readFileSync(path.join(dataDir, 'Community.json'), 'utf-8'));
  const communityTestimonials = JSON.parse(fs.readFileSync(path.join(dataDir, 'CommunityTestimonials.json'), 'utf-8'));
  const partners = JSON.parse(fs.readFileSync(path.join(dataDir, 'Partners.json'), 'utf-8'));

  return {
    props: {
      communityData, 
      communityTestimonials, 
      partners
    }
    // revalidate: 3600,
  };
}

