"use client";

import { useState, useRef, Fragment } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { useIsVisible } from "./utils/use-invisible";

export default function ModalVideo({}) {

  const mainRef = useRef<HTMLDivElement>(null);
  const mainVisibile = useIsVisible(mainRef);

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  return (
    <>
      <div
        ref={mainRef}
        className={`w-full h-96 relative transition-opacity ease-in duration-700 ${
          mainVisibile ? "opacity-100" : "opacity-0"
        }`}
      > 
        <Image  
          quality={100}
          sizes="100%" 
          width="100"
          height="100"
          src="/images/macbook.png"
          alt="Testimonial 01"
        />
      </div>
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-700 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <>...your custom component here...</>
      </div>
      <div
        ref={ref2}
        className={`transition-opacity ease-in duration-700 ${
          isVisible2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <>...your custom component here...</>
      </div>
      <div
        ref={ref3}
        className={`transition-opacity ease-in duration-700 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <>...your custom component here...</>
      </div>
      <div
        ref={ref4}
        className={`transition-opacity ease-in duration-700 ${
          isVisible4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <>...your custom component here...</>
      </div>
    </>
  );
}

