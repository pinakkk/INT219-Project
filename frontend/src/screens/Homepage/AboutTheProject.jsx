import React from "react";
import { motion } from "framer-motion";
import { Component } from "../../../../components/Component";

export const AboutTheProject = () => {
  return (
    <motion.div
      className="w-full relative bg-[#ff46ff] overflow-hidden py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Character Animation */}
      <motion.img
        className="w-[200px] md:w-[781px] mx-auto"
        alt="Character"
        src="https://c.animaapp.com/LD12u2BN/img/adobe-express---file-2.png"
        animate={{
          y: [0, -10, 0], 
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* About Section with Comic-Style Border */}
      <motion.div
        className="max-w-2xl mx-auto bg-gradient-to-r from-yellow-400 to-white border-4 border-black rounded-2xl p-6 shadow-[5px_5px_0px_black] text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
          About The Project
        </h2>
        <h3 className="text-2xl text-black mb-4" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
          Why Intellectual Property Matters
        </h3>
        <p className="text-lg text-black" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
          Did you know that your ideas, stories, inventions, and artwork can be protected?
          Intellectual Property (IP) ensures that creators get credit for their hard work.
          Whether you’re an artist, writer, inventor, or musician, understanding IP helps
          you protect your creativity!
        </p>
      </motion.div>

      {/* Comic-Style Floating Banner */}
      <motion.div
        className="w-full bg-yellow-400 border-4 border-black shadow-[5px_5px_0px_black] rounded-lg mt-12 py-4 flex flex-wrap justify-center gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {["START", "QUIZ", "PUZZLES", "VIRTUAL IP", "STORY GAMES", "IP HERO"].map((text, index) => (
          <motion.div
            key={index}
            className="text-xl md:text-2xl text-black font-bold"
            style={{ fontFamily: "'Comic_Neue', Helvetica" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {text}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
