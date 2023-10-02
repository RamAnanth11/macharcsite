import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./css/machbook.module.css";

const MacbookComponent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      const currentScrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(currentScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-start justify-center overflow-hidden
      ${scrollPercentage <= 2 ? "h-400" : "h-100"}
      relative`}
    >
      <Image
        src="/images/macbook.png"
        alt="Macbook"
        width="960"
        height="500"
        className={`transition-transform transform ${
          scrollPercentage <= 5 ? "scale-100" : "scale-75 origin-top"
        }`}
      />
      {scrollPercentage > 5 && (
        <>
          <Image
            width="200"
            height="200"
            src="/images/intel-reporting.png"
            alt="Image 1"
            className="absolute top-0 left-16 transform -translate-x-1/4 transition-transform"
          />
          <Image
            width="200"
            height="200"
            src="/images/front-end-creation.png"
            alt="Image 2"
            className="absolute top-0 right-16 transform translate-x-1/4 transition-transform"
          />
          <Image
            width="200"
            height="200"
            src="/images/rel-management.png"
            alt="Image 3"
            className="absolute bottom-56 left-16 transform -translate-x-1/4 translate-y-1/2 transition-transform"
          />
          <Image
            width="200"
            height="200"
            src="/images/micro-generation.png"
            alt="Image 4"
            className="absolute bottom-56 right-16 transform translate-x-1/4 translate-y-1/4 transition-transform"
          />

          {/* <img src="/images/rel-management.png" alt="Image 1" className="absolute top-0 left-0 transform -translate-x-full -translate-y-full transition-transform" /> */}
          {/* <img src="/images/front-end-creation.png" alt="Image 2" className="absolute top-0 right-0 transform translate-x-full -translate-y-full transition-transform" /> */}
          {/* <img src="/images/intel-reporting.png" alt="Image 3" className="absolute bottom-0 left-0 transform -translate-x-full translate-y-full transition-transform" /> */}
          {/* <img src="/images/micro-generation.png" alt="Image 4" className="absolute bottom-0 right-0 transform translate-x-full translate-y-full transition-transform" /> */}
        </>
      )}
    </div>
  );
};

export default MacbookComponent;
