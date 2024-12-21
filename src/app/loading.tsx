"use client";

import Image from "next/image";
import logo2 from "/public/assets/logo/logo2.png";
import { motion } from "motion/react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 backdrop-blur-sm z-50">
      <motion.div
        animate={{
          scale: [1, 0.9, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src={logo2}
          alt="evertson logo"
          className="w-48 h-auto"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Loading;
