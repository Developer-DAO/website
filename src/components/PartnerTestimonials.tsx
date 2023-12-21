import { Body3, BodyHeadline, Card } from '@gordo-d/d-d-ui-components';
import cx from 'classnames';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimonials from '../constants/testimonials.json';
import SectionTitle from './sectionTitle';

type ITestimonialsProps = {
  //TODO: type
  testimonialsData: {
    Who: string,
    Image: [{url?: string}],
    Testimonial: string,
    WorkTitle: string,
    partner?: string,
    PartnerName?: string,
    PartnerImages?: any[],
  }[],
};

const ITestimonialsDefaultProps = {};

const PartnerTestimonials: React.FC<ITestimonialsProps> = (props) => {
  const {testimonialsData} = props;

  useEffect(() => {}, []);

  return (
    <>
      {/* OUR TESTIMONIALS */}
      <section className="my-10 flex flex-col items-center justify-center gap-6 md:my-40">
        <SectionTitle
          headline={testimonials.Headline}
          subheadline={testimonials.SubHeadline}
        />
        <Carousel
          className="mt-10 p-5 md:mt-28"
          showArrows={false}
          swipeable
          showStatus={false}
          showIndicators={false}
          showThumbs={true}
          renderThumbs={(children: React.ReactChild[]) =>
            testimonialsData.map((t) => (
              <div
                key={t.Who}
                className="flex justify-center items-center relative rounded-md px-[12px] py-[20px] md:w-[150px] w-[120px]">
                {t.PartnerImages && t.PartnerName && t.PartnerImages[1].url ? (
                  <div className="h-[60px] w-[100px] grayscale hover:grayscale-0 transition-all">
                    <Image
                      layout="responsive" // Image will scale with the width of the parent
                      width={120} // Width of the image in pixels
                      height={30} // Height of the image in pixels
                      objectFit="contain"
                      src={t.PartnerImages[1].localPath ? t.PartnerImages[1].localPath : t.PartnerImages[1].url}
                      alt={t.PartnerName}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))
          }
        >
          {testimonialsData.map((t: any, i: number) => {
            return (
              <div key={i} className="flex w-full justify-center">
                <Card
                  noPadding
                  className={cx(
                    'bg-white/05 mb-32 flex min-h-[320px] w-full flex-col rounded-lg border-2 p-0 backdrop-blur md:w-[600px] md:flex-row',
                    'gap-2'
                  )}>
                  <div className="flex w-full flex-col justify-end p-6 text-left md:w-1/3">
                    <div className="relative mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-neutral-800">
                      <Image fill src={t.Image[0].localPath} alt={t.Title} />
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
        </Carousel>
      </section>
    </>
  );
};

PartnerTestimonials.defaultProps = ITestimonialsDefaultProps;

export default PartnerTestimonials;
