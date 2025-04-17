import React from "react";
import { motion } from "framer-motion";
const heading = ["How It Works?", "How It Works?", "How It Works?", "How It Works?"];

export const HowItWorks = () => {

  return (
    <>
      <div className="w-full bg-[#FFFF00] border-[5px] border-l-0 border-r-0 border-black py-8 overflow-hidden relative z-20">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...heading, ...heading].map((text, idx) => (
            <div
              key={idx}
              className="inline-block mx-8 text-2xl font-comic text-black"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      <div id="how-it-works" className="relative bg-[#ff00ff] overflow-hidden">
        {/* Floating Clouds */}
        <motion.img
        src="https://c.animaapp.com/UBuW8UdC/img/adobe-express---file--1--4.png"
        alt="Cloud Top"
        className="absolute -top-16 -left-10 w-1/3 h-auto z-0 opacity-80"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://c.animaapp.com/UBuW8UdC/img/adobe-express---file--1--5.png"
        alt="Cloud Bottom"
        className="absolute -bottom-16 right-0 w-1/3 h-auto z-0 opacity-80"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

        {/* Main Panels */}
        <div className="relative z-10 py-12 px-4">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8">

            {/* Flow Diagram */}
            <motion.div
              className="flex-1 bg-gradient-to-r from-[#FFFF00] to-[#FFFFFF] 
                       border-[5px] border-black rounded-[20px] p-8 shadow-[6px_6px_0_#000]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-[#ffdeff] border-[5px] border-black 
                              rounded-[20px] px-8 py-3 text-2xl font-comic text-center">
                  Choose a game
                </div>
                <img
                  src="https://c.animaapp.com/UBuW8UdC/img/arrow-3.svg"
                  alt="Arrow Down"
                  className="h-12"
                />
                <div className="bg-[#ffdeff] border-[5px] border-black 
                              rounded-[20px] px-8 py-3 text-2xl font-comic text-center">
                  Play &amp; Learn
                </div>
                <img
                  src="https://c.animaapp.com/UBuW8UdC/img/arrow-3.svg"
                  alt="Arrow Down"
                  className="h-12"
                />
                <div className="bg-[#ffdeff] border-[5px] border-black 
                              rounded-[20px] px-8 py-3 text-2xl font-comic text-center">
                  Earn Rewards
                </div>
              </div>
            </motion.div>

            {/* Text Explanation */}
            <motion.div
              className="flex-1 bg-gradient-to-r from-[#FFFF00] to-[#FFFFFF] 
                       border-[5px] border-black rounded-[20px] p-8 shadow-[6px_6px_0_#000]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-commissioner text-black mb-6">
                How it works?
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-2xl font-comic text-black">
                <li>
                  <strong>Choose a Game</strong> – Pick from quizzes, puzzles, or
                  story‑based adventures.
                </li>
                <li>
                  <strong>Play &amp; Learn</strong> – Interact with fun activities
                  while understanding key IP concepts.
                </li>
                <li>
                  <strong>Earn Rewards</strong> – Win badges and certificates as
                  you complete challenges!
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </div>

    </>
  );
};
