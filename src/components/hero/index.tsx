import React from "react";

export const HomeHero: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 z-0 h-[37rem] w-full bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="container relative flex size-full justify-end">
        <div className="debug relative">
          <div className="text-bold relative z-10 flex h-full w-fit flex-col items-end justify-center text-center text-display font-bold uppercase leading-none text-white">
            <h1>Be a Hero</h1>
            <div className="flex items-center justify-center gap-x-2">
              <h2 className="h-fit border-b-8 border-b-system-primary text-title-xl font-bold leading-10 text-solid-primary">
                For
              </h2>
              <h2>The</h2>
            </div>
            <h2>Voiceless</h2>
          </div>
          <div className="debug absolute top-14 z-0 ml-[4rem] size-full bg-shape bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
};
