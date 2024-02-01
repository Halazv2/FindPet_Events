import React, { ReactNode } from "react";

import Footer from "@layouts/Footer";
import Header from "@layouts/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="relative flex flex-col items-center ">
        <Header />
      </div>
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
