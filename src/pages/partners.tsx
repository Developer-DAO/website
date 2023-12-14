import { ReactElement } from 'react';

import PartnerTestimonials from '@/components/PartnerTestimonials';
import PartnersCardsSection from '@/components/Partners_CardsSection';
import SEO from '@/components/SEO';
import AppLayout from '@/components/layout/layout';
import useSectionAnimation from '@/hooks/useSectionAnimation';
import { fetchFromAirtable } from '@/lib/airtable/airtableFetch';
import { resolveEnsNamesToAvatars } from '@/lib/ensAvatars';
import {
  Body2,
  Button,
  Headline1,
  Headline2,
  ThunderIcon,
} from '@gordo-d/d-d-ui-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigationData from '../constants/navigation.json';
import PartnersConstants from '../constants/partners.json';

type IPartnersPageProps = {
  // TODO: type
  partners: any[],
  partnerTestimonials: any[],
  communityData: any[],
};

const IPartnersPageDefaultProps = {};

const PartnersPage = (props: IPartnersPageProps) => {
  const {partners, partnerTestimonials, communityData} = props;
  console.log(
    '🚀 ~ file: partners.tsx:34 ~ PartnersPage ~ partnerTestimonials:',
    partnerTestimonials
  );
  console.log(
    '🚀 ~ file: partners.tsx:35 ~ PartnersPage ~ partners:',
    partners
  );


  const variants = {
    visible: {opacity: 1, translateY: 0, transition: {duration: 0.3}},
    hidden: {opacity: 0, translateY: 20},
  };

  const headerAnimation = useSectionAnimation();
  const partnerLineAnimation = useSectionAnimation();
  const cardsAnimation = useSectionAnimation();
  const testimonialsAnimation = useSectionAnimation();
  const futureSectionAnimation = useSectionAnimation();

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
          <motion.section
            ref={headerAnimation.ref}
            initial="hidden"
            animate={headerAnimation.controls}
            variants={variants}
            className="relative z-30 flex min-h-screen md:min-h-[90vh] w-full flex-col items-center justify-center gap-6">
            <div className="absolute right-0 top-0 z-20 h-screen w-screen">
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.05, duration: 0.1, ease: 'easeInOut'}}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={'/bgBlackStars.svg'}
                  alt={''}
                />
              </motion.div>
            </div>
            <div className="absolute inset-x-0 top-[20%] -left-[5%] z-20 flex justify-center">
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.3, ease: 'easeInOut'}}
                className="h-[1300px] w-[1700px]">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={'/shinePartners.svg'}
                  alt={''}
                />
              </motion.div>
            </div>

            <div className="z-50 m-10 max-w-6xl flex w-full flex-col items-center justify-center gap-2 text-center">
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
                <Headline1 className="font-heading px-7 tracking-wider">
                  {PartnersConstants.headline}
                </Headline1>
              </div>
              <Body2
                color="neutral-600"
                className="font-paragraph font-normal mb-6 px-10 md:px-0 max-w-xl">
                {PartnersConstants.subheadline}
              </Body2>
              <div className="flex gap-4">
                <Link href={NavigationData.ctas.getInTouch} target="_blank">
                  <Button
                    className="font-paragraph 
                    font-semibold 
                    drop-shadow-[3px_0_30px_rgba(254,254,254,0.472)]
                    transition-all hover:drop-shadow-[10px_0_40px_rgba(254,254,254,0.472)]"
                    icon={<ThunderIcon className="h-6 w-6" />}
                    iconPosition="left">
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>

          <motion.section
            ref={partnerLineAnimation.ref}
            initial="hidden"
            animate={partnerLineAnimation.controls}
            variants={variants}
            className="relative no-scrollbar z-40 my-20 flex justify-center w-screen overflow-x-auto overflow-y-hidden ">
            <div className="inline-flex">
              {partners.map((p: any, i: any) => (
                <Link
                  key={i}
                  className="relative mx-4 flex h-[70px] w-[150px] items-center justify-center grayscale transition-all hover:grayscale-0  md:mx-16 md:h-[70px] md:w-[220px]"
                  href={p.URL ? p.URL : ''}
                  target="_blank">
                  {p.image[1].url && (
                    <Image
                      layout={'fill'}
                      objectFit={'contain'}
                      src={p.image[1].url}
                      alt={''}
                    />
                  )}
                </Link>
              ))}
            </div>
          </motion.section>

          <motion.div
            ref={cardsAnimation.ref}
            initial="hidden"
            animate={cardsAnimation.controls}
            variants={variants}>
            <PartnersCardsSection communityData={communityData} />
          </motion.div>

          <motion.div
            ref={testimonialsAnimation.ref}
            initial="hidden"
            animate={testimonialsAnimation.controls}
            variants={variants}>
            <PartnerTestimonials testimonialsData={partnerTestimonials} />
          </motion.div>

          {/* WE ARE... */}
          <motion.section
            ref={futureSectionAnimation.ref}
            initial="hidden"
            animate={futureSectionAnimation.controls}
            variants={variants}
            className="mb-20 flex justify-center">
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
          </motion.section>
        </div>
      </article>
    </>
  );
};

export async function getServerSideProps() {
  const partners = await fetchFromAirtable({
    tableName: 'Partners',
  });
  const partnerTestimonials = await fetchFromAirtable({
    tableName: 'PartnerTestimonials',
  });
  console.log(
    '🚀 ~ file: partners.tsx:180 ~ getStaticProps ~ partnerTestimonials:',
    partnerTestimonials
  );
  const community = await fetchFromAirtable({
    tableName: 'Community',
  });
  const validCommunity = community.filter((p) => Boolean(p.ENS));

  const providerUrl = process.env.POKTRPC_MAINNET ?? '';
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
      communityData
    }
  };
}

PartnersPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
PartnersPage.defaultProps = IPartnersPageDefaultProps;

export default PartnersPage;
