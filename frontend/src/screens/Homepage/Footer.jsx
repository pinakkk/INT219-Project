import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#ff46ff] py-12 px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Images */}
      <motion.img
        className="w-40 md:w-96 mx-auto absolute top-5 left-5"
        alt="Logo"
        src="https://c.animaapp.com/LD12u2BN/img/adobe-express---file--1--2@2x.png"
        animate={{
          y: [0, -5, 0],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.img
        className="w-40 md:w-96 mx-auto absolute top-32 right-5"
        alt="Logo"
        src="https://c.animaapp.com/LD12u2BN/img/adobe-express---file--1--5@2x.png"
        animate={{
          y: [0, -5, 0],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Community Box */}
      <motion.div
        className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400 to-white border-4 border-black rounded-2xl p-8 shadow-[5px_5px_0px_black] text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
          JOIN THE COMMUNITY
        </h2>
        <p className="text-xl text-black mb-4" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
          START LEARNING, AND PROTECT YOUR WORK
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <motion.button
            className="bg-white border-2 border-black px-6 py-2 text-xl rounded-lg font-bold shadow-[3px_3px_0px_black]"
            whileHover={{ scale: 1.1 }}
          >
            Get Started!
          </motion.button>
          <motion.button
            className="bg-white border-2 border-black px-6 py-2 text-xl rounded-lg font-bold shadow-[3px_3px_0px_black]"
            whileHover={{ scale: 1.1 }}
          >
            Watch Demo
          </motion.button>
        </div>

        {/* Socials */}
        <div className="mt-6">
          <p className="text-xl text-black mb-2" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
            Our Socials
          </p>
          <div className="flex justify-center gap-4">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={i}
                  className="w-14 h-14 border-2 border-black rounded-lg shadow-[2px_2px_0px_black] bg-white"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
          </div>
        </div>
      </motion.div>

      {/* Copyright Text */}
      <p className="text-center text-white text-lg mt-8">
        IPQUEST - All Rights Reserved
      </p>
    </motion.footer>
  );
};
