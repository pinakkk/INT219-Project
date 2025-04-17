import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="w-full bg-[#FFFF00] border-[5px] border-l-0 border-r-0 border-black py-8 overflow-hidden ">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      >
        {[..."SO WHAT ARE YOU WAITING FOR? | "].map((char, idx) => (
          <span
            key={idx}
            className="inline-block mx-2 text-2xl font-comic text-black"
          >
            {char}
          </span>
        ))}
        {[..."SO WHAT ARE YOU WAITING FOR? | "].map((char, idx) => (
          <span
            key={idx + 1000}
            className="inline-block mx-2 text-2xl font-comic text-black"
          >
            {char}
          </span>
        ))}
      </motion.div>
    </div>

  );
};
