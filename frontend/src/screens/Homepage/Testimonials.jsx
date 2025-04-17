import React from "react";
import { motion, AnimatePresence } from "framer-motion";



const testimonials = ["TESTIMONIALS", "TESTIMONIALS", "TESTIMONIALS", "TESTIMONIALS"];

export const Testimonials = () => {
  return (
    <>
      {/* Infinite Scrolling Testimonials */}
      <div className="w-full bg-[#FFFF00] border-[5px] border-l-0 border-r-0 border-black py-8 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((text, idx) => (
            <div
              key={idx}
              className="inline-block mx-8 text-2xl font-comic text-black"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="bg-[#ff00ff] w-full py-12 md:py-24 relative overflow-hidden">
        {/* Background clouds - positioned absolutely with responsive sizing */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.img
            className="w-1/3 md:w-[408px] top-0 left-0 md:left-[26px] absolute h-auto object-cover opacity-70"
            alt="Cloud"
            animate={{ y: ["0px", "20px", "0px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="https://c.animaapp.com/rQTbIU62/img/adobe-express---file--1--2@2x.png"
          />

          <motion.img
            className="w-1/3 md:w-[408px] top-8 md:top-[29px] left-1/4 md:left-[516px] absolute h-auto object-cover opacity-70"
            alt="Cloud"
            animate={{ y: ["0px", "20px", "0px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="https://c.animaapp.com/rQTbIU62/img/adobe-express---file--1--2@2x.png"
          />

          <motion.img
            className="w-1/3 md:w-[392px] top-0 right-0 md:left-[1048px] absolute h-auto object-cover opacity-70"
            alt="Cloud"
            animate={{ y: ["0px", "20px", "0px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="https://c.animaapp.com/rQTbIU62/img/adobe-express---file--1--3.png"
          />
        </div>

        {/* Testimonials container */}
        <div className="container mx-auto px-4 relative z-10">

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="w-full md:w-[400px] h-[450px] bg-[#ffdbd9] rounded-[50px] overflow-hidden border-[3px] border-solid border-white"
            >
              <div className="relative w-full h-full p-4">
                <motion.div 
                  whileHover={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                  className="w-full h-full rounded-[50px] overflow-hidden border-[3px] border-solid border-black bg-gradient-to-r from-[#FFFF00] to-white flex flex-col items-center justify-center p-6"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User avatar"
                    className="w-20 h-20 rounded-full mb-6 object-cover border-2 border-black"
                  />
                  <p className="font-comic-neue font-normal text-black text-xl md:text-2xl text-center leading-normal">
                    "This game helped me understand how to protect my artwork!"
                  </p>
                  <p className="mt-4 font-bold">- Sarah, Artist</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="w-full md:w-[400px] h-[450px] bg-[#ffdbd9] rounded-[50px] overflow-hidden border-[3px] border-solid border-white"
            >
              <div className="relative w-full h-full p-4">
                <motion.div 
                  whileHover={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                  className="w-full h-full rounded-[50px] overflow-hidden border-[3px] border-solid border-black bg-gradient-to-r from-[#FFFF00] to-white flex flex-col items-center justify-center p-6"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User avatar"
                    className="w-20 h-20 rounded-full mb-6 object-cover border-2 border-black"
                  />
                  <p className="font-comic-neue font-normal text-black text-xl md:text-2xl text-center leading-normal">
                    "A fun and interactive way to introduce students to IP concepts!"
                  </p>
                  <p className="mt-4 font-bold">- David, Teacher</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Testimonial 3 - hidden on small screens */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="hidden md:block w-full md:w-[400px] h-[450px] bg-[#ffdbd9] rounded-[50px] overflow-hidden border-[3px] border-solid border-white"
            >
              <div className="relative w-full h-full p-4">
                <motion.div 
                  whileHover={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                  className="w-full h-full rounded-[50px] overflow-hidden border-[3px] border-solid border-black bg-gradient-to-r from-[#FFFF00] to-white flex flex-col items-center justify-center p-6"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="User avatar"
                    className="w-20 h-20 rounded-full mb-6 object-cover border-2 border-black"
                  />
                  <p className="font-comic-neue font-normal text-black text-xl md:text-2xl text-center leading-normal">
                    "Now I know why trademarks and copyrights are important!"
                  </p>
                  <p className="mt-4 font-bold">- Maria, Student</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}