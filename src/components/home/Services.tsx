import { services } from "@src/utils/constants";
import {
  PointedCircle,
  ShowMore,
  SpringLine,
  WaveArrow
} from "@src/utils/svgs/services";

import React from "react";

export const Services: React.FC = () => {
  return (
    <div className="container mx-2 flex min-h-[450px] flex-col rounded-xl bg-services-pattern bg-cover lg:flex-row">
      <div className="relative flex flex-auto flex-col lg:w-40">
        <SpringLine className="mt-3 h-[50px] w-[180px]" />
        <h3 className="mx-auto mt-4 max-h-[185px] max-w-[280px] text-[62px] font-semibold leading-[65px] text-white lg:absolute lg:left-20 lg:top-20">
          See what we can do for you
        </h3>
      </div>
      <div className="relative hidden w-20 flex-auto lg:flex">
        <div className="absolute top-40 flex md:w-3/4 md:rotate-[-30deg] lg:w-full lg:rotate-[-45deg]">
          <PointedCircle className="size-[115px] stroke-current" />
          <WaveArrow className="h-[200px] w-[250px] translate-x-10  rotate-45" />
        </div>
      </div>
      <div className="flex-auto py-8 pl-5 lg:w-60 lg:p-0">
        <ul className="flex  size-full flex-col justify-center gap-4">
          {services.map((service, index) => (
            <li
              key={service.name}
              className={`svg-container flex justify-between pb-5 pr-5 text-[24px] text-white md:text-[33px] ${index !== services.length - 1 ? "border-b-2" : ""}`}
            >
              {service.name}
              <ShowMore className="your-svg" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
