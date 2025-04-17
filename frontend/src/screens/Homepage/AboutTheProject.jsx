import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutTheProject = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div id="about" className="bg-[#ff46ff] flex flex-row justify-center w-full">
      <div className="bg-[#ff46ff] w-full h-auto relative">
        {/* Cloud image as background - visible on all screen sizes */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <motion.img
            className="absolute w-full max-w-[408px] h-auto top-0 left-0 object-cover z-0 opacity-70"
            alt="Cloud background"
            src="https://c.animaapp.com/RJqnVjRE/img/adobe-express---file--1--5.png"
            animate={{ y: [0, 20, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            className="absolute w-full max-w-[408px] h-auto bottom-20 right-0 object-cover z-0 opacity-70"
            alt="Cloud background"
            src="https://c.animaapp.com/RJqnVjRE/img/adobe-express---file--1--5.png"
            animate={{ y: [10, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="relative w-full max-w-[1421px] h-auto min-h-[500px] md:min-h-[798px] md pt-[18px] px-3.5">
          <div className="relative w-full max-w-[1338px] h-auto min-h-[500px] md:min-h-[781px] mt-[17px] ml-0 md:ml-[83px]">
            {/* Main image - visible on all screens, positioned differently */}
            <img
              className="block w-full max-w-[781px] h-auto aspect-square mx-auto -mb-10 md:mb-0 md:absolute md:top-0 md:left-auto md:right-0 object-cover"
              alt="Adobe express file"
              src="https://c.animaapp.com/RJqnVjRE/img/adobe-express---file-2.png"
              // animate={{ y: [0, 20, 0] }}
              // transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              // initial={{ scale: 0.9, opacity: 0 }}
              // whileInView={{ scale: 1, opacity: 1 }}
              // viewport={{ once: true }}
            />
            
            <motion.div 
              className="relative mb-8 md:mb-0 md:absolute w-full max-w-[559px] h-auto min-h-[374px] md:top-[130px] md:left-0 rounded-[15px] overflow-hidden border-[5px] border-black rounded-[20px] p-8 shadow-[6px_6px_0_#000] [background:linear-gradient(90deg,rgba(255,255,0,1)_0%,rgba(255,255,255,1)_100%)] z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "8px 8px 0 #000" }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-full w-full"
              >
                <motion.div 
                  variants={itemVariants}
                  className="relative md:absolute py-4 md:h-[59px] md:top-[19px] w-full md:left-0 md:right-0 [font-family:'Commissioner',Helvetica] font-normal text-black text-4xl md:text-5xl text-center tracking-[0] leading-[normal]"
                >
                  About The Project
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="relative md:absolute py-3 md:h-[37px] md:top-[100px] md:left-0 md:right-0 [font-family:'Comic_Neue',Helvetica] font-normal text-black text-2xl md:text-[32px] text-center tracking-[0] leading-[normal]"
                >
                  Why Intellectual Property Matters
                </motion.div>

                <motion.p 
                  variants={itemVariants}
                  className="relative md:absolute w-[90%] max-w-[500px] mx-auto py-4 md:h-auto md:top-[159px] md:left-0 md:right-0 md:mx-auto [font-family:'Comic_Neue',Helvetica] font-normal text-black text-lg md:text-xl text-center tracking-[0] leading-[normal] px-4"
                >
                  Did you know that your ideas, stories, inventions, and artwork
                  can be protected? Intellectual Property (IP) ensures that
                  creators get credit for their hard work. Whether you're an
                  artist, writer, inventor, or musician, understanding IP helps
                  you protect your creativity!
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};