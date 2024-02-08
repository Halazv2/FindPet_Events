import React, { ReactNode } from "react";

import Footer from "@layouts/Footer";
import Header from "@layouts/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="absolute left-0 top-0 flex w-full flex-col items-center ">
        <Header />
      </div>
      <main className="min-h-svh">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
