import React from "react";

import gallery from "@assets/imgs/about-us-gallery.png";
import shape from "@assets/svgs/shapes/about-us-shape.svg";

export const About: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 bg-white pb-20 pt-10 lg:flex-row">
      {/* left */}
      {/* for test  */}

      <div className="size-full">
        <img src={gallery} alt="gallery" />
      </div>
      {/* right */}
      <div className="flex flex-col gap-5">
        <div className="w-full items-end justify-between lg:flex">
          <h1 className="text-title font-medium text-solid-primary md:text-title-lg lg:text-title-xl ">
            About Us
          </h1>
          <img
            src={shape}
            alt="shape"
            className="hidden size-40 object-contain lg:block"
          />
        </div>
        <div>
          <p className="text-body font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};
