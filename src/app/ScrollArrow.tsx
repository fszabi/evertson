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
      className="w-12 h-12 fixed bottom-5 right-5 text-red-600 cursor-pointer hover:text-red-500 transition-colors"
      aria-label="scroll arrow"
    />
  );
};

export default ScrollArrow;
