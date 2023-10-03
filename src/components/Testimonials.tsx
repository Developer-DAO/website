import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Body3,
  BodyHeadline,
  Card
} from "@gordo-d/d-d-ui-components";
import cx from "classnames";
import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from "./sectionTitle";
type ITestimonialsProps = {
  //TODO: type
  testimonials: any;
};

const ITestimonialsDefaultProps = {};

const Testimonials: React.FC<ITestimonialsProps> = (props) => {
  const { testimonials } = props;

  useEffect(() => {}, []);

  return (
    <>
      {/* OUR TESTIMONIALS */}
      <section className="justify-center items-center flex flex-col gap-6 my-40">
        <SectionTitle headline={testimonials.Headline} subheadline={testimonials.SubHeadline}/>
        <Carousel
          className="mt-28"
          showArrows={false}
          swipeable
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          renderArrowPrev={(
            clickHandler: () => void,
            hasPrev: boolean,
            label: string
          ) => (
            <ArrowLeftIcon
              className="absolute -bottom-0 left-1/2 h-24 w-24 -translate-x-28"
              onClick={() => clickHandler()}
            />
          )}
          renderArrowNext={(
            clickHandler: () => void,
            hasPrev: boolean,
            label: string
          ) => (
            <ArrowRightIcon
              className="absolute bottom-0 left-1/2 h-24 w-24 translate-x-2"
              onClick={() => clickHandler()}
            />
          )}>
          {testimonials.cards.map((p, i) => {
            return (
              <div key={i} className="w-full flex justify-center">
                <Card
                  noPadding
                  className={cx(
                    "min-h-[320px] w-[600px] mb-32 border-primary-grey border-2 backdrop-blur-lg flex p-0 rounded-lg",
                    "gap-2"
                  )}>
                  <div className="p-6 w-1/3 flex flex-col justify-end text-left">
                    <div className="relative flex justify-center items-center rounded-full bg-neutral-800 overflow-hidden h-16 w-16 mb-3">
                      <Image fill src={p.image} alt={p.name} />
                    </div>
                    <BodyHeadline className="">{p.name}</BodyHeadline>
                    <Body3
                      color="neutral-700"
                      className="uppercase font-bold text-neutral-700">
                      {p.title}
                    </Body3>
                  </div>
                  <div className="border-l-2 border-primary-grey p-6 rounded-lg">
                    <Body3
                      color="neutral-700 max-w-[300px] text-left"
                      className="">
                      {p.testimonial}
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

Testimonials.defaultProps = ITestimonialsDefaultProps;

export default Testimonials;
