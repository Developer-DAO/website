import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const InfiniteScrollSection = ({ partners }:any) => {
  // Slider settings
  const settings = {
    infinite: true, // Enable infinite scrolling
    speed: 500, // Speed of the transition (in milliseconds)
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Speed of auto-scrolling (in milliseconds)
  };

  return (
    <section className="my-20 p-10 flex w-full items-center justify-center">
      <Slider {...settings}>
        {partners.map((partner:any, index:any) => (
          <div key={index} className="relative h-[100px] w-[300px] overflow-hidden grayscale transition-all hover:grayscale-0">
            {partner.image[1].url && (
              <Image
                layout="fill"
                objectFit="contain"
                src={partner.image[1].url}
                alt={partner.name || ""}
              />
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InfiniteScrollSection;
