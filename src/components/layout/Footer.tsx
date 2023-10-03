import {
  ArrowTopRightIcon,
  Body1,
  Body3,
  DDLogoIcon,
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@gordo-d/d-d-ui-components";
import Link from "next/link";
import React from "react";
import navData from "../../constants/navigation.json";
type IFooterProps = object;

const IFooterDefaultProps = {};

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <section className="absolute bottom-0 left-0 flex h-40 w-full justify-center">
      <div className="backdrop-blur-xs mx-10 flex w-full justify-between rounded-t-2xl bg-gradient-to-l from-neutral-500/10 to-neutral-700/10 p-6">
        <div>
          <DDLogoIcon className="h-16 w-16" />
        </div>
        <div className="flex h-full flex-col items-center justify-between">
          <ul className="font-secondary hidden gap-8 md:flex">
            {navData.navigation.map((navEl, i) => (
              <Link
                className="flex gap-2"
                key={i}
                href={navEl.link}
                target={navEl.external ? "_blank" : "_self"}>
                <Body3
                  color="neutral-500"
                  className="hover:text-primary-white transition-colors">
                  {navEl.name}
                </Body3>
                {navEl.external && (
                  <ArrowTopRightIcon className=" opacity-70 hover:opacity-100" />
                )}
              </Link>
            ))}
          </ul>
          <Body3 color={"neutral-600"} className="">
            Built with ❤️️ at Agency
          </Body3>
        </div>

        <div className="flex flex-col items-end gap-3">
          <Body1 className="text-xl font-extralight">Developer DAO</Body1>
          <div className="flex gap-2">
            <Link href={"https://twitter.com/developerdao"} target="_blank">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-700 p-3">
                <TwitterIcon />
              </div>
            </Link>
            <Link href={"https://youtube.com/developerdao"} target="_blank">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-700 p-3">
                <YoutubeIcon />
              </div>
            </Link>
            <Link href={"https://github.com/developerdao"} target="_blank">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-700 p-3">
                <GithubIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.defaultProps = IFooterDefaultProps;

export default Footer;
