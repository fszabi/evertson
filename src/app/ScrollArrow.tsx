"use client";

import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";

const ScrollArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ArrowUpCircleIcon
      onClick={scrollToTop}
      className="w-12 h-12 fixed bottom-5 right-5 text-[#d80001] cursor-pointer hover:opacity-70 transition-opacity"
      aria-label="scroll arrow"
    />
  );
};

export default ScrollArrow;
