import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Patents = () => {
  const patentResources = [
    {
      id: 1,
      title: "Patent Fundamentals",
      description: "Learn the basics of patents and invention protection",
      icon: "📄",
      level: "Beginner",
      timeToComplete: "30 min",
      categories: ["Guide", "Basics"]
    },
    {
      id: 2,
      title: "Patent Search Tutorial",
      description: "How to conduct an effective patent search before filing",
      icon: "🔍",
      level: "Beginner",
      timeToComplete: "45 min",
      categories: ["Research", "Prior Art"]
    },
    {
      id: 3,
      title: "Patent Application Process",
      description: "Step-by-step guide to filing a patent application",
      icon: "✏️",
      level: "Intermediate",
      timeToComplete: "60 min",
      categories: ["Process", "Legal"]
    },
    {
      id: 4,
      title: "International Patent Strategy",
      description: "Understanding global patent protection and PCT applications",
      icon: "🌎",
      level: "Advanced",
      timeToComplete: "75 min",
      categories: ["Strategy", "International"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white">
      {/* Animated background elements */}
      <div className="animated-blob-1" style={{ background: "rgba(59, 130, 246, 0.15)" }}></div>
      <div className="animated-blob-2" style={{ background: "rgba(191, 219, 254, 0.2)" }}></div>
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link to="/library" className="text-gray-600 hover:text-gray-900 flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Library
        </Link>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2 text-blue-700">Patent Resources</h1>
          <p className="text-gray-600">Learn about patent protection for your inventions and innovations</p>
        </motion.div>
      </div>
      
      {/* Introduction */}
      <motion.div
        className="max-w-6xl mx-auto mb-10 glass-card p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <motion.div 
            className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-blue-100 border-4 border-white shadow-lg"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-5xl">📜</span>
          </motion.div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">What is a Patent?</h2>
            <p className="mb-4">A patent is a form of intellectual property that gives its owner the legal right to exclude others from making, using, or selling an invention for a limited period of time in exchange for publishing an enabling disclosure of the invention.</p>
            <p>Patents are crucial for protecting innovations, incentivizing research and development, and providing a competitive advantage in the marketplace.</p>
          </div>
        </div>
      </motion.div>
      
      {/* Patent Process */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">The Patent Process</h2>
        
        <div className="glass-card p-8">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Invention Disclosure</h3>
                <p className="text-gray-600">Document your invention thoroughly, including how it works, what problem it solves, and how it differs from existing solutions.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Patentability Search</h3>
                <p className="text-gray-600">Conduct a thorough search of existing patents and prior art to ensure your invention is novel and non-obvious.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Prepare and File Application</h3>
                <p className="text-gray-600">Draft a patent application with claims, specifications, and drawings that clearly describe your invention.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Patent Examination</h3>
                <p className="text-gray-600">The patent office examines your application and may issue "office actions" requiring responses and amendments.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">5</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Patent Grant</h3>
                <p className="text-gray-600">If approved, your patent is granted and provides protection for a limited time (typically 20 years from filing).</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resources */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Learning Resources</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {patentResources.map(resource => (
            <motion.div
              key={resource.id}
              className="glass-card p-6"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-start mb-4">
                <motion.div 
                  className="resource-icon-container mr-4 bg-blue-50"
                  whileHover={{ rotate: 10 }}
                >
                  <span className="text-2xl">{resource.icon}</span>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-blue-700">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource.categories.map((category, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className={`px-2 py-1 rounded-full ${
                      resource.level === "Beginner" ? "bg-green-100 text-green-700" :
                      resource.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {resource.level}
                    </span>
                    <span>⏱️ {resource.timeToComplete}</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                className="mt-4 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-10 text-center text-gray-600">
        <div className="flex justify-center gap-4 mb-4">
          <Link to="/library/trademarks" className="text-blue-600 hover:underline">Trademarks</Link>
          <Link to="/library/copyright" className="text-blue-600 hover:underline">Copyright</Link>
          <Link to="/library" className="text-blue-600 hover:underline">All Resources</Link>
        </div>
        <p>© 2025 IPQuest - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Patents;