import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Body3,
  BodyHeadline,
  Card,
  ShineImage,
  StarShineImage,
} from "@gordo-d/d-d-ui-components";
import cx from "classnames";
import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeConstants from "../constants/home.json";
type ITestimonialsProps = {};

const ITestimonialsDefaultProps = {};

const Testimonials: React.FC<ITestimonialsProps> = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      {/* OUR TESTIMONIALS */}
      <section className="justify-center items-center flex flex-col gap-6 my-40">
        <div className="relative text-center">
          <div className="absolute -top-24 right-28">
            <StarShineImage className="h-[250px] w-[250px]"></StarShineImage>
          </div>
          <div className="absolute -top-[250px] -left-2/3">
            <ShineImage className="h-[600px] w-[600px]"></ShineImage>
          </div>
          <BodyHeadline className="font-paragraph relative mb-6">
            {HomeConstants.Testimonials.Headline}
          </BodyHeadline>
          <Body3 color="neutral-700" className="font-paragraph relative">
            {HomeConstants.Testimonials.SubHeadline}
          </Body3>
        </div>
        <Carousel
          className="mb-28"
          showArrows={false}
          swipeable
          centerMode={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          renderArrowPrev={(
            clickPrevHandler: () => void,
            hasPrev: boolean,
            label: string
          ) => (
            <ArrowLeftIcon
              className="absolute -bottom-0 left-1/2 h-24 w-24 -translate-x-28"
              onClick={() => clickPrevHandler()}
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
          {HomeConstants.Testimonials.cards.map((p, i) => {
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
    </React.Fragment>
  );
};

Testimonials.defaultProps = ITestimonialsDefaultProps;

export default Testimonials;
