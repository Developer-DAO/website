import { Body3, DDLogoIcon } from "@gordo-d/d-d-ui-components";
import Link from "next/link";
import React from "react";
import footerData from "../../constants/footer.json";

type IFooterProps = object;

const IFooterDefaultProps = {};

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <section className="w-full h-40 flex justify-center absolute bottom-0 left-0">
      <div className="mx-10 flex justify-between w-full backdrop-blur-xs rounded-t-2xl p-6 bg-gradient-to-l from-neutral-500/10 to-neutral-700/10">
        <div>
          <DDLogoIcon className="h-16 w-16" />
          <Body3>Back to top</Body3>
        </div>
        <div className="flex flex-col items-center justify-between h-full">
          <ul className="hidden md:flex font-secondary text-white gap-8">
            {footerData.links.map((l, i) => (
              <Link key={i} href={l.link}>
                <Body3 className="hover:text-primary-grey transition-colors">
                  {l.name}
                </Body3>
              </Link>
            ))}
          </ul>
          <Body3 color={"neutral-600"} className="">
            Built with ❤️️ at Agency
          </Body3>
        </div>

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
