import { Body3, Button, DDLogoIcon } from "@d_d/ui-components";
import cx from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

const TopBarGrid = ({ children }: { children: ReactNode }) => (
  <div className="absolute top-0 left-0 w-screen z-20">
    <div className="w-full flex justify-center">
      <div
        className={cx(
          "flex w-full md:w-auto mx-5 md:grid grid-flow-row grid-cols-1 auto-rows-auto gap-y-16",
          "lg:grid-cols-lg lg:gap-lg",
          "xl:grid-cols-xl",
          "p-5 mt-5"
        )}>
        {children}
      </div>
    </div>
  </div>
);

export const TopBar = () => (
  <TopBarGrid>
    <div className="flex w-full col-start-1 col-end-13 items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <div className="h-[50px] w-[50px]">
            <DDLogoIcon />
          </div>
        </Link>
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
      </div>
      <div className="hidden md:flex gap-4">
        <Button>Dao Handbook</Button>
        <Button variant="secondary">Partner with us</Button>
      </div>
    </div>
  </TopBarGrid>
);
