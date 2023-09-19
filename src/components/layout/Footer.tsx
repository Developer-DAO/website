import { Body3, DDLogoIcon } from "@d_d/ui-components";
import Link from "next/link";
import React from "react";

type IFooterProps = object;

const IFooterDefaultProps = {};

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <section className="w-full h-40 flex justify-center bg-black">
      <div className="mx-10 flex justify-between w-full backdrop-blur-sm rounded-t-2xl p-6 bg-gradient-to-l from-neutral-500/50 to-neutral-700/50">
        <div>
          <DDLogoIcon className="h-16 w-16" />
          <Body3>Back to top</Body3>
        </div>
        <ul className="hidden md:flex font-secondary text-white gap-8">
          <Link href={""}>
            <Body3 className="hover:text-primary-grey transition-colors">
              {"What's Developer DAO"}
            </Body3>
          </Link>
          <Link href={""}>
            <Body3 className="hover:text-primary-grey transition-colors">
              {"Our Vision"}
            </Body3>
          </Link>
          <Link href={""}>
            <Body3 className="hover:text-primary-grey transition-colors">
              {"Partner with us"}
            </Body3>
          </Link>
          <Link href={""}>
            <Body3 className="hover:text-primary-grey transition-colors">
              {"Academy"}
            </Body3>
          </Link>
          <Link href={"https://agency.developerdao.com"} target="_blank">
            <Body3 className="hover:text-primary-grey transition-colors">
              {"Agency"}
            </Body3>
          </Link>
        </ul>

        <div>
          <Body3>Developer DAO</Body3>
          <div className="flex gap-2">
            <div className="rouded-full bg-neutral-800"></div>
            <div className="rouded-full bg-neutral-800"></div>
            <div className="rouded-full bg-neutral-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.defaultProps = IFooterDefaultProps;

export default Footer;
