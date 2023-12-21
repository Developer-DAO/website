import {
  Body1,
  BodyHeadline,
  ShineImage,
  StarShineImage,
} from '@gordo-d/d-d-ui-components';
import React from 'react';

interface SectionTitleProps {
  headline: string;
  subheadline: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  headline,
  subheadline,
  className,
}) => {
  return (
    <div className={`relative text-center ${className ? className : ''}`}>
      <div className="max-w-3xl p-3 md:p-0">
        <div className="absolute -top-28 md:left-40 left-26">
          <StarShineImage className="h-[280px] w-[280px]" />
        </div>
        <div className="absolute -top-[250px] left-16">
          <ShineImage className="h-[600px] w-[600px]" />
        </div>

        <BodyHeadline
          style={{fontSize: 40}}
          className="font-paragraph relative mb-6 text-4xl">
          {headline}
        </BodyHeadline>

        <Body1 color="neutral-600" className="font-paragraph font-normal relative ">
          {subheadline}
        </Body1>
      </div>
    </div>
  );
};

export default SectionTitle;
