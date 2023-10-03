import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Body3,
  BodyHeadline,
  Card,
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
      <section className="my-40 flex flex-col items-center justify-center gap-6">
        <SectionTitle
          headline={testimonials.Headline}
          subheadline={testimonials.SubHeadline}
        />
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
              className="absolute -bottom-0 left-1/2 h-24 w-24 -translate-x-28 cursor-pointer"
              onClick={() => clickHandler()}
            />
          )}
          renderArrowNext={(
            clickHandler: () => void,
            hasPrev: boolean,
            label: string
          ) => (
            <ArrowRightIcon
              className="absolute bottom-0 left-1/2 h-24 w-24 translate-x-2 cursor-pointer"
              onClick={() => clickHandler()}
            />
          )}>
          {testimonials.cards.map((p: any, i: number) => {
            return (
              <div key={i} className="flex w-full justify-center">
                <Card
                  noPadding
                  className={cx(
                    "border-primary-grey mb-32 flex min-h-[320px] w-[600px] rounded-lg border-2 p-0 backdrop-blur-lg",
                    "gap-2"
                  )}>
                  <div className="flex w-1/3 flex-col justify-end p-6 text-left">
                    <div className="relative mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-neutral-800">
                      <Image fill src={p.image} alt={p.name} />
                    </div>
                    <BodyHeadline className="">{p.name}</BodyHeadline>
                    <Body3
                      color="neutral-700"
                      className="font-bold uppercase text-neutral-700">
                      {p.title}
                    </Body3>
                  </div>
                  <div className="border-primary-grey rounded-lg border-l-2 p-6">
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
