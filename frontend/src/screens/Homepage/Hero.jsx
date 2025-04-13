// Version - 1.0.0

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const messages = [
//   "Hii Learner, Welcome to IP Quest!",
//   "Start your journey with us!",
//   "Unlock new knowledge today!",
//   "Get ready for an amazing experience!",
// ];

// export const Hero = () => {
//   const [currentMessage, setCurrentMessage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentMessage((prev) => (prev + 1) % messages.length);
//     }, 3000); // Change message every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       className="w-full relative bg-[#ff00ff]"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Floating Cloud Effect */}
//       <motion.img
//         className="absolute w-[815px] h-[682px] top-0 left-0 object-cover"
//         alt="Cloud Image"
//         src="https://c.animaapp.com/LD12u2BN/img/adobe-express---file-1.png"
//         animate={{ y: ["0px", "20px", "0px"] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="hidden md:block relative max-w-full h-[682px] mx-auto">
//         <img
//           className="absolute w-[114px] h-[78px] top-[199px] left-[547px]"
//           alt="Polygon"
//           src="https://c.animaapp.com/LD12u2BN/img/polygon-1.svg"
//         />
        
//         {/* Animated Message Box with Comic Border */}
//         <div className="absolute w-[560px] h-[110px] top-[151px] left-[614px] bg-white rounded-[15px] border-[4px] border-black shadow-[5px_5px_0px_black] flex justify-center items-center">
//           <AnimatePresence mode="wait">
//             <motion.p
//               key={currentMessage}
//               className="text-black text-2xl text-center"
//               style={{ fontFamily: "'Comic_Neue', Helvetica" }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               transition={{ duration: 0.5 }}
//             >
//               {messages[currentMessage]}
//             </motion.p>
//           </AnimatePresence>
//         </div>

//         {/* Get Started Button */}
//         <motion.div
//           className="absolute w-[242px] h-[63px] top-72 left-[614px] bg-[#ffff00] rounded-[15px] border-2 border-black flex justify-center items-center cursor-pointer"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <p className="text-black text-2xl" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
//             Get Started
//           </p>
//         </motion.div>
//       </div>

//       {/* Mobile Hero */}
//       <div className="block md:hidden relative w-full px-4 py-8">
//         <div className="flex flex-col items-center space-y-6">
//           <img className="w-20 h-auto" alt="Polygon" src="https://c.animaapp.com/LD12u2BN/img/polygon-1.svg" />

//           {/* Floating Cloud for Mobile */}
//           <motion.img
//             className="w-full max-w-md h-auto object-cover"
//             alt="Cloud Image"
//             src="https://c.animaapp.com/LD12u2BN/img/adobe-express---file-1.png"
//             animate={{ y: ["0px", "15px", "0px"] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           />

//           {/* Animated Message Box with Comic Border (Mobile) */}
//           <div className="bg-white rounded-[15px] border-[4px] border-black shadow-[5px_5px_0px_black] px-4 py-2 text-center flex justify-center items-center">
//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={currentMessage}
//                 className="text-black text-xl"
//                 style={{ fontFamily: "'Comic_Neue', Helvetica" }}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 10 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {messages[currentMessage]}
//               </motion.p>
//             </AnimatePresence>
//           </div>

//           {/* Animated Button */}
//           <motion.button
//             className="bg-[#ffff00] rounded-[15px] border-2 border-black px-6 py-2 transition-colors duration-200 hover:bg-gray-200"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="text-black text-xl" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
//               Get Started
//             </span>
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cloud2 from '../../assets/imgs/cloud2.png'; // Import your cloud image here


const messages = [
  "Hii Learner, Welcome to IP Quest!",
  "Start your journey with us!",
  "Unlock new knowledge today!",
  "Get ready for an amazing experience!",
];

export const Hero = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000); // Change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full relative bg-[#ff00ff]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Clouds Animation */}
      <motion.img
        className="absolute w-[245px] top-[65px] left-[1195px] h-[200px] object-cover"
        alt="Cloud"
        src="https://c.animaapp.com/LD12u2BN/img/c1@2x.png"
        animate={{ y: ["0px", "20px", "0px"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Character Animation */}
      <motion.img
        className="absolute w-[815px] h-[682px] top-0 left-0 object-cover"
        alt="Character"
        src="https://c.animaapp.com/LD12u2BN/img/adobe-express---file-1.png"
        animate={{ x: ["-5px", "5px", "-5px"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hidden md:block relative max-w-full h-[682px] mx-auto">
        <img
          className="absolute w-[114px] h-[78px] top-[199px] left-[547px]"
          alt="Polygon"
          src="https://c.animaapp.com/LD12u2BN/img/polygon-1.svg"
        />

        {/* Animated Message Box with Comic Border */}
        <div className="absolute w-[560px] h-[110px] top-[151px] left-[614px] bg-white rounded-[15px] border-[4px] border-black shadow-[5px_5px_0px_black] flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentMessage}
              className="text-black text-2xl text-center"
              style={{ fontFamily: "'Comic_Neue', Helvetica" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              {messages[currentMessage]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Get Started Button */}
        <motion.div
          className="absolute w-[242px] h-[63px] top-72 left-[614px] bg-[#ffff00] rounded-[15px] border-2 border-black flex justify-center items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="text-black text-2xl" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
            Get Started
          </p>
        </motion.div>
      </div>

       {/* Floating Clouds Animation */}
       <motion.img
        className="absolute w-auto top-[400px] left-[500px] h-[200px] object-contain"
        alt="Cloud"
        src={Cloud2}
        animate={{ y: ["0px", "20px", "0px"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mobile Hero */}
      <div className="block md:hidden relative w-full px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          <img className="w-20 h-auto" alt="Polygon" src="https://c.animaapp.com/LD12u2BN/img/polygon-1.svg" />

          {/* Floating Cloud for Mobile */}
          <motion.img
            className="w-full max-w-md h-auto object-cover"
            alt="Cloud"
            src="https://c.animaapp.com/LD12u2BN/img/c1@2x.png"
            animate={{ y: ["0px", "15px", "0px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated Message Box with Comic Border (Mobile) */}
          <div className="bg-white rounded-[15px] border-[4px] border-black shadow-[5px_5px_0px_black] px-4 py-2 text-center flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessage}
                className="text-black text-xl"
                style={{ fontFamily: "'Comic_Neue', Helvetica" }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                {messages[currentMessage]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Animated Button */}
          <motion.button
            className="bg-[#ffff00] rounded-[15px] border-2 border-black px-6 py-2 transition-colors duration-200 hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-black text-xl" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
              Get Started
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
