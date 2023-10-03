import {
  ArrowTopRightIcon,
  Body3,
  Button,
  DDLogoIcon,
  ThunderIcon,
} from "@gordo-d/d-d-ui-components";
import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import navData from "../../constants/navigation.json";

const TopBarGrid = ({ children }: { children: ReactNode }) => (
  <div className="absolute left-0 top-0 z-50 w-screen">
    <div className="flex w-full justify-center">
      <div
        className={cx(
          "mx-5 flex w-full grid-flow-row auto-rows-auto grid-cols-1 gap-y-16 md:grid md:w-auto",
          "lg:grid-cols-lg lg:gap-lg",
          "xl:grid-cols-xl",
          "mt-5 p-5"
        )}>
        {children}
      </div>
    </div>
  </div>
);

export const TopBar = () => {
  const router = useRouter(); // Hook to get the current route
  const isPartnersRoute = router.pathname === "/partners";
  return (
    <TopBarGrid>
      <div className="col-start-1 col-end-13 flex w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={"/"}>
            <DDLogoIcon className="h-[70px] w-[70px]" />
          </Link>
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
                  <ArrowTopRightIcon className="mb-1 opacity-70 hover:opacity-100" />
                )}
              </Link>
            ))}
          </ul>
        </div>
        <div className="hidden gap-4 md:flex">
          {isPartnersRoute ? (
            <Button
              icon={<ThunderIcon className="h-6 w-6" />}
              className="font-paragraph font-semibold tracking-wider transition-all hover:drop-shadow-[10px_0_20px_rgba(254,254,254,0.472)]">
              Get in touch
            </Button>
          ) : (
            <>
              <Link href={"/partners"}>
                <Button className="font-paragraph font-semibold tracking-wider transition-all hover:drop-shadow-[10px_0_20px_rgba(254,254,254,0.472)]">
                  Dao Handbook
                </Button>
              </Link>
              <Link href={"/partners"}>
                <Button
                  className="font-paragraph font-semibold tracking-wider"
                  variant="secondary">
                  Partner with us
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </TopBarGrid>
  );
};
