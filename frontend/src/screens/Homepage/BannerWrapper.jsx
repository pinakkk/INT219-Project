import React from "react";
import { motion } from "framer-motion";

export const BannerWrapper = () => {
  return (
    <motion.div
      className="w-full max-w-[1557px] mx-auto absolute top-[633px] left-0 rotate-[4.17deg] h-28 bg-[#ffff00] border-[4px] border-black shadow-[5px_5px_0px_black] flex justify-center items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 w-full px-4">
        {["LEARN", "GET REWARDED", "GET CERTIFIED", "IP HERO"].map((text, index) => (
          <motion.div
            key={index}
            className="text-black text-[24px] md:text-[32px] font-normal text-center"
            style={{ fontFamily: "'Comic_Neue', Helvetica" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
