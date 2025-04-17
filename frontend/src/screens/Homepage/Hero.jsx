import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Cloud2 from '../../assets/imgs/cloud2.png';
import $ from 'jquery'; // Import jQuery

const hero= ["LEARN", "GET CERTIFIED", "GET REWARDED", "BECOME AN IP HERO"];

const messages = [
  "Hii Learner, Welcome to IP Quest!",
  "Start your journey with us!",
  "Unlock new knowledge today!",
  "Get ready for an amazing experience!",
];

export const Hero = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const navigate = useNavigate();
  const buttonRef = useRef(null); // Reference to the button
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000); // Change message every 3 seconds
    
    // jQuery functionality for button hover effect
    if (buttonRef.current) {
      $(buttonRef.current).on('mouseenter', function() {
        $(this).find('span').animate({ 
          letterSpacing: '1px',
          fontSize: '1.1em'
        }, 300);
      }).on('mouseleave', function() {
        $(this).find('span').animate({ 
          letterSpacing: 'normal',
          fontSize: '1em'
        }, 200);
      });
    }
    
    // Cleanup function
    return () => {
      clearInterval(interval);
      if (buttonRef.current) {
        $(buttonRef.current).off('mouseenter mouseleave');
      }
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <>
      <motion.div
        id="hero"
        className="w-full relative bg-[#ff00ff] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Clouds Animation - Desktop only */}
        <motion.img
          className="hidden md:block absolute w-[25%] max-w-[245px] top-[10%] right-[5%] h-auto object-contain"
          alt="Cloud"
          src={Cloud2}
          animate={{ y: ["0px", "20px", "0px"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Character Animation */}
        <img
          className="absolute w-[815px] h-[682px] top-0 left-0 object-cover md:block hidden"
          alt="Character"
          src="https://c.animaapp.com/LD12u2BN/img/adobe-express---file-1.png"
        />

        <div className="hidden md:block relative max-w-full h-[682px] mx-auto">
          
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

          {/* Get Started Button - Enhanced with jQuery */}
          <motion.div
            ref={buttonRef}
            onClick={handleGetStarted}
            className="absolute w-[242px] h-[63px] top-72 left-[614px] bg-[#ffff00] rounded-[15px] border-2 border-black flex justify-center items-center cursor-pointer shadow-[3px_3px_0px_black]"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#ffff33",
              boxShadow: "5px 5px 0px black"
            }}
            whileTap={{ 
              scale: 0.95,
              boxShadow: "1px 1px 0px black" 
            }}
          >
            <p className="text-black text-2xl" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
              <span>Get Started</span>
            </p>
          </motion.div>
        </div>

        {/* Floating Clouds Animation - Desktop only */}
        <motion.img
          className="hidden md:block absolute w-[20%] max-w-[200px] bottom-[20%] left-[35%] h-auto object-contain"
          alt="Cloud"
          src={Cloud2}
          animate={{ y: ["0px", "20px", "0px"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mobile Hero - Modified for centered message box */}
        <div className="block md:hidden relative w-full min-h-[60ch] px-4 py-8 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-full w-full">
         
            {/* Mobile Character (Smaller version) */}
            <img
              className="absolute w-[800px] h-[550px] top-0 left-0 object-cover"
              alt="Character"
              src="https://c.animaapp.com/LD12u2BN/img/adobe-express---file-1.png"
            />

            {/* Animated Message Box with Comic Border (Mobile) - Now centered */}
            <div className="bg-white rounded-[15px] mt-[250px] border-[4px] border-black shadow-[5px_5px_0px_black] px-4 py-3 w-[90%] text-center flex justify-center items-center relative z-10 my-auto">
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

            {/* Mobile Get Started Button - with jQuery */}
            <motion.button
              ref={buttonRef}
              onClick={handleGetStarted}
              className="bg-[#ffff00] rounded-[15px] border-2 border-black px-6 py-3 relative z-10 shadow-[3px_3px_0px_black] mt-4"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#ffff33",
                boxShadow: "5px 5px 0px black"
              }}
              whileTap={{ 
                scale: 0.95, 
                boxShadow: "1px 1px 0px black" 
              }}
            >
              <span className="text-black text-xl font-bold" style={{ fontFamily: "'Comic_Neue', Helvetica" }}>
                Get Started
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
      <div className="w-full bg-[#FFFF00] border-[5px] border-l-0 border-r-0 border-black py-8 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...hero, ...hero].map((text, idx) => (
            <div
              key={idx}
              className="inline-block mx-8 text-2xl font-comic text-black"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
