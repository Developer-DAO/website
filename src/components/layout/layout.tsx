import { StarsBgImage } from "@gordo-d/d-d-ui-components";
import Footer from "./Footer";
import { TopBar } from "./TopBar";

export interface LayoutProps {
  children: any;
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <article className="relative h-auto w-full max-w-screen overflow-hidden">
      <div
        className="absolute left-0 top-0 z-0 h-[700vh]
      w-screen">
        <StarsBgImage className="h-full w-full"></StarsBgImage>
      </div>
      <TopBar />
      <div className="from-primary-black top-0 z-10 w-full bg-gradient-to-b to-neutral-900 pb-60">
        {children}
      </div>
      <Footer />
    </article>
  );
};

export default AppLayout;
