"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ServicesDemo(props: any) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {props.mainHeading || 'Unleash the power of'}<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {props.secondHeading || 'Scroll Animations'}
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/${props.imgUrl}` || `/gloval.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
