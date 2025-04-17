// import React from "react";
// import { motion } from "framer-motion";
// import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

// export const Footer = () => {
//   return (
//     <>
//       <div className="w-full bg-[#FFFF00] border-[5px] border-l-0 border-r-0 border-black py-8 overflow-hidden ">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{ x: ["-50%", "0%"] }}
//           transition={{ duration: 15, ease: "linear", repeat: Infinity }}
//         >
//           {[..."SO WHAT ARE YOU WAITING FOR? | "].map((char, idx) => (
//             <span
//               key={idx}
//               className="inline-block mx-2 text-2xl font-comic text-black"
//             >
//               {char}
//             </span>
//           ))}
//           {[..."SO WHAT ARE YOU WAITING FOR? | "].map((char, idx) => (
//             <span
//               key={idx + 1000}
//               className="inline-block mx-2 text-2xl font-comic text-black"
//             >
//               {char}
//             </span>
//           ))}
//         </motion.div>
//       </div>

//       <div className="bg-[#ff46ff] w-full flex justify-center px-4 py-10">
//         <div className="w-full max-w-screen-xl flex flex-col items-center relative">
//           {/* Background Decorative Images */}
//           <img
//             className="absolute top-0 left-0 w-32 md:w-60 object-cover"
//             alt="Decoration 1"
//             src="https://c.animaapp.com/usEVPoqe/img/adobe-express---file--1--6@2x.png"
//           />
//           <img
//             className="absolute top-[40%] right-0 w-32 md:w-60 object-cover"
//             alt="Decoration 2"
//             src="https://c.animaapp.com/usEVPoqe/img/adobe-express---file--1--5@2x.png"
//           />
//           <img
//             className="absolute bottom-0 left-4 w-32 md:w-60 object-cover"
//             alt="Decoration 3"
//             src="https://c.animaapp.com/usEVPoqe/img/adobe-express---file--1--6@2x.png"
//           />

//           {/* Main Card */}
//           <div className="relative bg-[#ffdbd980] border-4 border-white rounded-[40px] w-full max-w-5xl p-6 sm:p-10">
//             <div className="bg-gradient-to-r from-yellow-400 to-white border-4 border-black rounded-[30px] p-6 sm:p-10">
//               <h2 className="text-3xl sm:text-5xl font-comic text-center text-black mb-6">
//                 JOIN THE COMMUNITY
//               </h2>
//               <p className="text-xl sm:text-2xl text-center text-black font-comic mb-8">
//                 START LEARNING, AND PROTECT YOUR WORK
//               </p>

//               {/* Buttons */}
//               <div className="flex flex-wrap justify-center gap-4 mb-8">
//                 <button className="bg-white border-2 border-black px-6 py-2 rounded-[15px] font-comic text-xl">
//                   Get Started!
//                 </button>
//                 <button className="bg-white border-2 border-black px-6 py-2 rounded-[15px] font-comic text-xl">
//                   Watch Demo
//                 </button>
//               </div>

//               {/* Socials */}
//               <p className="text-black text-xl text-center font-comic mb-4">
//                 Our Socials
//               </p>
//               <div className="flex justify-center gap-6">
//                 <div className="w-14 h-14 flex items-center justify-center border-2 border-black rounded-[15px] bg-white">
//                   <BsFacebook className="text-black text-xl" />
//                 </div>
//                 <div className="w-14 h-14 flex items-center justify-center border-2 border-black rounded-[15px] bg-white">
//                   <BsInstagram className="text-black text-xl" />
//                 </div>
//                 <div className="w-14 h-14 flex items-center justify-center border-2 border-black rounded-[15px] bg-white">
//                   <BsTwitter className="text-black text-xl" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer Text */}
//           <p className="text-white text-center text-lg sm:text-2xl mt-12 font-poppins">
//             IPQUEST - All Rights Reserved
//           </p>
//         </div>
//       </div>

//     </>
//   );
// };

import React from "react";
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#FFFF00] border-[5px] border-l-0 border-r-0 border-black py-8 overflow-hidden">
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

      <div className="bg-[#ff46ff] w-full flex justify-center px-4 py-10">
        <div className="w-full max-w-screen-xl flex flex-col items-center relative">
          {/* Background Decorative Images */}
          <motion.img
            className="absolute top-0 left-0 w-32 md:w-60 object-cover"
            alt="Decoration 1"
            src="https://c.animaapp.com/usEVPoqe/img/adobe-express---file--1--6@2x.png"
            animate={{ y: ["0px", "20px", "0px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            className="absolute top-[40%] right-0 w-32 md:w-60 object-cover"
            alt="Decoration 2"
            animate={{ y: ["0px", "20px", "0px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="https://c.animaapp.com/usEVPoqe/img/adobe-express---file--1--5@2x.png"
          />
          <motion.img
            className="absolute bottom-0 left-4 w-32 md:w-60 object-cover"
            alt="Decoration 3"
            animate={{ y: ["0px", "20px", "0px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="https://c.animaapp.com/usEVPoqe/img/adobe-express---file--1--6@2x.png"
          />

          {/* Main Card with animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-[#ffdbd980] border-4 border-white rounded-[40px] w-full max-w-5xl p-6 sm:p-10"
          >
            <div className="bg-gradient-to-r from-[#FFFF00] to-white border-4 border-black rounded-[30px] p-6 sm:p-10">
              <h2 className="text-3xl sm:text-5xl font-comic text-center text-black mb-6">
                JOIN THE COMMUNITY
              </h2>
              <p className="text-xl sm:text-2xl text-center text-black font-comic mb-8">
                START LEARNING, AND PROTECT YOUR WORK
              </p>

              {/* Buttons with motion + hover */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["Get Started!", "Watch Demo"].map((text, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white border-2 border-black px-6 py-2 rounded-[15px] font-comic text-xl transition duration-300 hover:bg-black hover:text-white"
                  >
                    {text}
                  </motion.button>
                ))}
              </div>

              {/* Socials with hover & animation */}
              <p className="text-black text-xl text-center font-comic mb-4">
                Our Socials
              </p>
              <div className="flex justify-center gap-6">
                {[BsFacebook, BsInstagram, BsTwitter].map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 flex items-center justify-center border-2 border-black rounded-[15px] bg-white cursor-pointer transition duration-300 "
                  >
                    <Icon className="text-black text-xl  transition duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer Text */}
          <p className="text-white text-center text-lg sm:text-2xl mt-12 font-poppins">
            IPQUEST - All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};
