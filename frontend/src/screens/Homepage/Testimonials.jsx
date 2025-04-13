import React from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonials = [
    { text: "This game helped me understand how to protect my artwork!" },
    { text: "A fun and interactive way to introduce students to IP concepts!" },
    { text: "Now I know why trademarks and copyrights are important!" },
  ];

  return (
    <section className="relative w-full bg-[#ff00ff] py-16 text-center overflow-hidden">
      {/* Logos */}
      <div className="flex justify-center gap-8 mb-10">
        {Array(3)
          .fill("https://c.animaapp.com/LD12u2BN/img/adobe-express---file--1--2@2x.png")
          .map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt="Brand Logo"
              className="w-40 md:w-52 object-cover"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
          ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[#ffdbd9] rounded-[50px] border-4 border-white p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="bg-gradient-to-r from-yellow-400 to-white border-4 border-black rounded-[50px] p-8">
              <p className="text-2xl font-bold text-black" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
                “{item.text}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
