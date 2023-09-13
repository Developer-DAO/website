import { ReactNode } from "react";
import Footer from "./Footer";
import { TopBar } from "./TopBar";

export interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <section className="bg-black">
      <TopBar />
      APP LAYOUT
      <div className="min-h-screen w-full">{children}</div>
      <Footer />
    </section>
  );
};

export default AppLayout;
