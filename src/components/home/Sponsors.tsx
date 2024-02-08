import { sponsors } from "@src/utils/constants";

import React from "react";

export const Sponsors: React.FC = () => {
  return (
    <div className="container m-auto -mt-8 w-full">
      <div className="flex size-full items-center justify-center rounded-t-2xl bg-white p-6">
        <div className="flex size-full items-center justify-around">
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.name}
              alt={sponsor.alt}
              className="h-full w-28 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
