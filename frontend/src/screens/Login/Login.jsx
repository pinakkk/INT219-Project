import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const slides = [
    {
      title: "Welcome to IPQuest!",
      graphic: "",
      description:
        "Join us on an adventure to learn how your creative ideas can be protected! Discover the world of Intellectual Property through fun games and challenges designed especially for students.",
    },
    {
      title: "Learn Through Play",
      graphic: "",
      description: 
        "Play exciting games like IP Defender and Innovation Tycoon to understand patents, trademarks, and copyright. Complete quests, earn badges, and become an IP expert while having fun!",
    },
    {
      title: "Protect Your Creativity",
      graphic: "",
      description: 
        "Did you know the artwork, stories, inventions and projects you create at school can be protected? Learn how to safeguard your ideas and respect the work of others in our digital world.",
    },
  ]

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("/ipquest/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.status === "success") {
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(error.message || "Error connecting to the server");
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-yellow-400 to-yellow-200 overflow-x-hidden flex items-center justify-center">

      <motion.img
        className="hidden lg:block absolute top-0 left-0 max-w-[374px]"
        alt="cloud-left"
        src="https://c.animaapp.com/jUcZRsTP/img/adobe-express---file--1--5-1@2x.png"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        className="hidden lg:block absolute bottom-0 right-0 max-w-[315px]"
        alt="cloud-right"
        src="https://c.animaapp.com/jUcZRsTP/img/adobe-express---file--1--4-1@2x.png"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Window */}
      <div className="bg-[#ffe0b0] border-2 border-black rounded-[15px] w-[90%] md:w-[900px] max-w-[1000px] shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center space-x-2 p-3 bg-white border-b-2 border-black rounded-t-[15px]">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Panel - Login Form */}
          <div className="flex flex-col w-full md:w-1/2 p-6 gap-4">
            <h1 className="text-4xl font-bold text-center font-comic">Login</h1>

            <input
              type="text"
              placeholder="Username"
              className="border border-black rounded-[10px] p-3 text-lg font-comic"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-black rounded-[10px] p-3 text-lg font-comic"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <motion.button
              onClick={handleLogin}
              whileHover={{ scale: 1.05, backgroundColor: "#fbd336" }}
              className="bg-yellow-300 border-2 border-black rounded-[10px] py-3 text-xl font-bold font-comic shadow-md"
            >
              Login
            </motion.button>

            <p className="text-center font-comic">{message}</p>
            <p className="text-center font-comic">
              Don’t have an account?{" "}
              <Link to="/register" className="font-bold underline hover:text-blue-600">
                Register
              </Link>
            </p>
          </div>

          {/* Right Panel - Animated Box */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <div className="relative w-full max-w-[520px] h-[340px] border-2 border-[#343434] rounded-[15px] p-4 bg-gradient-to-r from-yellow-200 to-white shadow-inner overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 flex flex-col items-center text-center px-4"
                >
                  <h2 className="text-2xl mt-8 font-bold mb-2 font-comic">
                    {slides[slideIndex].title}
                  </h2>
                  <p className="text-lg mb-1 font-comic">{slides[slideIndex].graphic}</p>
                  <p className="text-md mt-4 font-comic">{slides[slideIndex].description}</p>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 border-2 border-black rounded-full ${index === slideIndex ? "bg-[#F9C0D1]" : "bg-white"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
