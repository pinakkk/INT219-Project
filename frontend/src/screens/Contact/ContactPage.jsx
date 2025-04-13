import React, { useState } from "react";
import { motion } from "framer-motion";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/ipquest/backend/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      setResponseMessage("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="[background:linear-gradient(259deg,rgba(255,182,65,1)_0%,rgba(255,255,0,1)_100%)] flex flex-col items-center justify-center min-h-screen w-full overflow-hidden relative">
      {/* Clouds */}
      <motion.img
        className="hidden lg:block absolute top-0 left-[-50px] w-[374px] h-[147px] object-contain"
        alt="cloud-left"
        src="https://c.animaapp.com/ZKJyVNTk/img/adobe-express---file--1--5@2x.png"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.img
        className="hidden lg:block absolute bottom-0 right-[-50px] w-[315px] h-[147px] object-contain"
        alt="cloud-right"
        src="https://c.animaapp.com/ZKJyVNTk/img/adobe-express---file--1--4@2x.png"
        animate={{ x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Contact Window */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[95%] md:w-[90%] lg:w-[1050px] max-w-[1100px] bg-white border-4 border-black rounded-[15px] shadow-xl z-10"
      >
        {/* Header Bar with Dots */}
        <div className="flex items-center space-x-2 p-3 bg-white border-b-2 border-black rounded-t-[15px]">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>

        {/* Main Form Area */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row bg-[#ffe0b0] rounded-b-[15px] p-6 gap-6"
        >
          {/* Left Side Info */}
          <div className="md:w-1/2 space-y-4 font-comic">
            <h2 className="text-[40px] font-bold text-center">Contact Info</h2>
            <p className="text-xl text-center">For queries reach out to</p>
            <p className="text-xl font-bold text-center">bringcashhere@gmail.com</p>
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-center">Located at</h3>
              <p className="text-xl text-center">LPU, Punjab, India</p>
            </div>
            <div className="pt-2 text-center">
              <span className="font-bold text-xl">MON - SAT</span>
              <span className="mx-2">|</span>
              <span className="font-bold text-xl">9:00 AM - 5 PM</span>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 space-y-4 font-comic">
            <h2 className="text-[32px] font-bold text-center">Contact Us</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-black rounded-[15px] bg-[#ffffff80] text-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-black rounded-[15px] bg-[#ffffff80] text-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows="5"
              placeholder="Message goes here"
              className="w-full p-3 border border-black rounded-[15px] bg-[#ffffff80] text-xl"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-300 border-2 border-black rounded-[15px] py-3 px-8 text-2xl font-bold shadow-md w-full hover:bg-yellow-200 transition"
            >
              Submit
            </motion.button>

            {responseMessage && (
              <p className="text-center text-xl font-bold mt-4">{responseMessage}</p>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
