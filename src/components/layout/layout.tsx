import { StarsBgImage } from "@gordo-d/d-d-ui-components";
import { ReactNode } from "react";
import Footer from "../../website/src/components/layout/Footer";
import { TopBar } from "../../website/src/components/layout/TopBar";

export interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <article className="w-screen relative h-auto overflow-hidden">
      <div
        className="absolute top-0 h-[700vh] left-0 w-screen
      z-0">
        <StarsBgImage className="w-full h-full"></StarsBgImage>
      </div>
      <TopBar />
      <div className="bg-gradient-to-b from-primary-black to-neutral-900 top-0 w-full z-10 pb-60">{children}</div>
      <Footer />
    </article>
  );
};

export default AppLayout;
