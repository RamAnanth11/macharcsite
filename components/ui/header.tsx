"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header>
      <div className="w-screen flex items-center justify-center">
        <div className="md:full xl:w-4/6 xs:w-full w-full sm:w-full mt-4 bg-indigo-50 rounded">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Site branding */}
              <div className="shrink-0 mr-4">
                <Logo />
              </div>

              {/* Desktop navigation */}
              <nav className="hidden md:flex md:grow">
                {/* Desktop sign in links */}
                <ul className="flex grow justify-start flex-wrap items-center">
                  <li>
                    <Link
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      About
                    </Link>
                  </li>
                </ul>
                <ul className="flex grow justify-end flex-wrap items-center">
                  <li>
                    <Link
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
                    >
                      Buy Macharc
                    </Link>
                  </li>
                </ul>
              </nav>

              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>

    // <header
    //   className={`fixed w-4/6 z-30 rounded mx-0 bg-indigo-50 transition duration-300 ease-in-out ${
    //     !top ? "bg-white-50 backdrop-blur-sm" : ""
    //   }`}
    // >

    // </header>
  );
}
