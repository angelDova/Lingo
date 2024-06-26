import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

type Props = {
  children: React.ReactNode;
};

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
