import {} from "@d_d/ui-components";
import cx from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

const TopBarGrid = ({ children }: { children: ReactNode }) => (
  <div className="absolute top w-full z-20">
    <div className="w-full flex justify-center">
      <div
        className={cx(
          "flex w-full md:w-auto mx-min2 md:grid grid-flow-row grid-cols-1 auto-rows-auto gap-y-16",
          "lg:grid-cols-lg lg:gap-24",
          "xl:grid-cols-xl",
          "border-2 bg-glass-c-50 border-glass-c-80 backdrop-blur-sm rounded-full p-min2 mt-min3"
        )}>
        {children}
      </div>
    </div>
  </div>
);

export const TopBar = () => {
  return (
    <TopBarGrid>
      <div className="flex w-full col-start-1 col-end-13 items-center justify-between">
        <div>
          <div>Logo</div>
          <ul className="flex font-secondary text-white gap-8">
            <Link href={""}>
              <li>{"What's Developer DAO"}</li>
            </Link>
            <Link href={""}>
              <li>{"Our Vision"}</li>
            </Link>
            <Link href={""}>
              <li>{"Partner with us"}</li>
            </Link>
            <Link href={""}>
              <li>{"Academy"}</li>
            </Link>
            <Link href={""}>
              <li>{"Agency"}</li>
            </Link>
          </ul>
        </div>
      </div>
    </TopBarGrid>
  );
};
