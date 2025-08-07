import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function CallToAction() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col justify-center items-center gap-10">
        <h2
          id="contact"
          className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
        >
          So, what are you waiting for?{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Let&apos;s Connect...</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Let&apos;s Connect...</span>
            </div>
          </div>
        </h2>
        <div className="flex justify-center items-center gap-5 text-center">
          <a href="tel:+919586091534" className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Call Now
          </a>
          <a href="mailto:akmpwebdevelopers@gmail.com" className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Mail Us
          </a>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
