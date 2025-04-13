import React from "react";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  return (
    <section className="relative w-full bg-[#ff00ff] py-16 overflow-hidden">
      {/* Floating Clouds */}
      <motion.img
        className="absolute w-40 md:w-96 top-5 left-5"
        alt="Cloud"
        src="https://c.animaapp.com/LD12u2BN/img/big-cloud.svg"
        animate={{ y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      />

      <motion.img
        className="absolute w-20 md:w-64 top-32 left-10"
        alt="Cloud"
        src="https://c.animaapp.com/LD12u2BN/img/big-cloud-1.svg"
        animate={{ y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-400 to-white border-4 border-black rounded-2xl p-8 text-center shadow-[5px_5px_0px_black]">
        <motion.h2
          className="text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "'Comic_Neue', Helvetica" }}
        >
          How It Works?
        </motion.h2>

        {/* Steps */}
        <div className="space-y-6">
          {[
            { text: "Choose a Game – Pick from quizzes, puzzles, or adventures.", delay: 0.2 },
            { text: "Play & Learn – Interact with fun activities & understand IP concepts.", delay: 0.4 },
            { text: "Earn Rewards – Win badges and certificates as you complete challenges!", delay: 0.6 },
          ].map(({ text, delay }, index) => (
            <motion.div
              key={index}
              className="bg-[#ffdeff] border-2 border-black rounded-lg py-3 px-6 text-xl shadow-[3px_3px_0px_black]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay }}
              style={{ fontFamily: "'Comic_Neue', Helvetica" }}
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Banner */}
      <div className="mt-16 text-center">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={i}
              className={`w-full bg-yellow-400 border-2 border-black py-4 text-3xl font-bold text-black ${
                i % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"
              } shadow-[3px_3px_0px_black]`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ fontFamily: "'Comic_Neue', Helvetica" }}
            >
              TESTIMONIALS
            </motion.div>
          ))}
      </div>
    </section>
  );
};
