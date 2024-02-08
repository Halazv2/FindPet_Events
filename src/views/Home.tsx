import React from "react";

import { About } from "@components/home/About";
import { Events } from "@components/home/Events";
import { HomeHero } from "@components/home/Hero";
import { Sponsors } from "@components/home/Sponsors";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHero />
      <div className="flex w-full flex-col items-center justify-center bg-white">
        <Sponsors />
        <About />
      </div>
      <div>
        <Events />
      </div>
    </div>
  );
};

export default Home;
