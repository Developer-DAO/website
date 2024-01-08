import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Body3,
  BodyHeadline,
  Card,
} from '@gordo-d/d-d-ui-components';
import cx from 'classnames';
import Image from 'next/image';
import React, { CSSProperties, useEffect, useState } from 'react';
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import testimonials from '../constants/testimonials.json';
import SectionTitle from './sectionTitle';

import '@brainhubeu/react-carousel/lib/style.css';
import { motion } from 'framer-motion';

type ITestimonialsProps = {
  //TODO: type
  testimonialsData: {
    Who: string,
    Image: [{url?: string}],
    Testimonial: string,
    WorkTitle: string,
  }[],
};

const ITestimonialsDefaultProps = {};

const Testimonials: React.FC<ITestimonialsProps> = (props) => {
  const {testimonialsData} = props;
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
  };

  return (
    <>
      {/* OUR TESTIMONIALS */}
      <section className="my-10 flex flex-col items-center justify-center gap-6 mb-40 md:my-40">
        <SectionTitle
          headline={testimonials.Headline}
          subheadline={testimonials.SubHeadline}
        />
        {isRendered && <Carousel
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }} // Adjust the delay and duration as needed
              >
                <ArrowLeftIcon className="absolute -bottom-0 left-1/2 h-24 w-24 -translate-x-28 cursor-pointer mb-20 md:mb-0" />
              </motion.div>
                ),
                arrowLeftDisabled: (
                  <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }} // Adjust the delay and duration as needed
              >
                  <ArrowLeftIcon className="absolute -bottom-0 left-1/2 h-24 w-24 -translate-x-28 cursor-none opacity-50 mb-20 md:mb-0" />
                  </motion.div>
                ),
                arrowRight: (
                  <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }} // Adjust the delay and duration as needed
              >
                  <ArrowRightIcon className="absolute bottom-0 left-1/2 h-24 w-24 translate-x-2 cursor-pointer mb-20 md:mb-0" />
                  </motion.div>
                ),
                arrowRightDisabled: (
                  <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }} // Adjust the delay and duration as needed
              >
                  <ArrowRightIcon className="absolute bottom-0 left-1/2 h-24 w-24 translate-x-2 cursor-none opacity-50 mb-20 md:mb-0" />
                  </motion.div>
                ),
                addArrowClickHandler: true,
              },
            },
          ]}>
          {testimonialsData.map((t: any, i: number) => {
            return (
              <div key={i} className="flex w-full justify-center">
                <Card
                  noPadding
                  className={cx(
                    'bg-white/05 mb-8 flex min-h-[320px] w-full flex-col rounded-lg border-2 p-0 backdrop-blur md:w-[600px] md:flex-row',
                    'gap-2'
                  )}>
                  <div className="flex w-full flex-col justify-end p-6 text-left md:w-1/3">
                    <div className="relative mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-neutral-800">
                      <Image fill src={t.Image[0].localPath ? t.Image[0].localPath : t.Image[0].url} alt={t.Title} />
                    </div>
                    <BodyHeadline className="">{t.Who}</BodyHeadline>
                    <Body3
                      color="neutral-700"
                      className="font-bold uppercase text-neutral-700">
                      {t.WorkTitle}
                    </Body3>
                  </div>
                  <div className="border-primary-grey/20 rounded-lg p-6 md:border-l-2">
                    <Body3
                      color="neutral-700 max-w-[300px] text-left"
                      className="">
                      {t.Testimonial}
                    </Body3>
                  </div>
                </Card>
              </div>
            );
          })}
        </Carousel>}
   
   
      </section>
    </>
  );
};

Testimonials.defaultProps = ITestimonialsDefaultProps;

export default Testimonials;
