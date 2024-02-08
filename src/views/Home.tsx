import React from "react";

import { About } from "@components/home/About";
import { HomeHero } from "@components/home/Hero";
import { Projects } from "@components/home/Projects";
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
        <Projects />
      </div>
    </div>
  );
};

export default Home;
