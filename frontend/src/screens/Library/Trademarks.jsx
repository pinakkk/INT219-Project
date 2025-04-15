import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Trademarks = () => {
  const trademarkResources = [
    {
      id: 1,
      title: "Trademark Basics",
      description: "Understanding the fundamentals of trademark protection",
      icon: "™️",
      level: "Beginner",
      timeToComplete: "25 min",
      categories: ["Guide", "Basics"]
    },
    {
      id: 2,
      title: "Trademark Registration",
      description: "Step-by-step process for registering your trademark",
      icon: "📝",
      level: "Beginner",
      timeToComplete: "30 min",
      categories: ["Process", "Legal"]
    },
    {
      id: 3,
      title: "Trademark Monitoring & Enforcement",
      description: "How to protect your trademark from infringement",
      icon: "👁️",
      level: "Intermediate",
      timeToComplete: "40 min",
      categories: ["Legal", "Protection"]
    },
    {
      id: 4,
      title: "International Trademark Strategy",
      description: "Protecting your trademarks globally",
      icon: "🌎",
      level: "Advanced",
      timeToComplete: "55 min",
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
    <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-purple-50 to-white">
      {/* Animated background elements */}
      <div className="animated-blob-1" style={{ background: "rgba(147, 51, 234, 0.15)" }}></div>
      <div className="animated-blob-2" style={{ background: "rgba(233, 213, 255, 0.2)" }}></div>
      
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
          <h1 className="text-4xl font-bold mb-2 text-purple-700">Trademark Resources</h1>
          <p className="text-gray-600">Protect your brand identity and business reputation</p>
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
            className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-purple-100 border-4 border-white shadow-lg"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-5xl">™️</span>
          </motion.div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">What is a Trademark?</h2>
            <p className="mb-4">A trademark is a recognizable sign, design, or expression that identifies products or services from a particular source, distinguishing them from those of others.</p>
            <p>Trademarks can include words, phrases, symbols, designs, or a combination of these elements that identify and distinguish the source of goods or services of one party from those of others.</p>
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
          {trademarkResources.map(resource => (
            <motion.div
              key={resource.id}
              className="glass-card p-6"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-start mb-4">
                <motion.div 
                  className="resource-icon-container mr-4 bg-purple-50"
                  whileHover={{ rotate: 10 }}
                >
                  <span className="text-2xl">{resource.icon}</span>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-purple-700">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource.categories.map((category, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
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
                className="mt-4 w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Types of Trademarks */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Types of Trademarks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="glass-card p-6"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl">
                🔤
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-purple-700">Word Marks</h3>
            <p className="text-gray-600 text-center">Text-based trademarks consisting of letters, words, or numbers.</p>
            <p className="text-sm text-center mt-2 text-purple-600">Example: "Coca-Cola"</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl">
                🎨
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-purple-700">Design Marks</h3>
            <p className="text-gray-600 text-center">Graphical elements, symbols, or logos that identify your brand.</p>
            <p className="text-sm text-center mt-2 text-purple-600">Example: Apple's apple logo</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl">
                🎵
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-purple-700">Sound Marks</h3>
            <p className="text-gray-600 text-center">Distinctive sounds that identify products or services.</p>
            <p className="text-sm text-center mt-2 text-purple-600">Example: NBC's three-note chime</p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl">
                🌈
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-purple-700">Color Marks</h3>
            <p className="text-gray-600 text-center">Specific colors associated with your brand.</p>
            <p className="text-sm text-center mt-2 text-purple-600">Example: Tiffany's blue color</p>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Trademark Registration Process */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Trademark Registration Process</h2>
        
        <div className="glass-card p-6">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-purple-100 transform -translate-x-1/2"></div>
            
            <div className="relative grid grid-cols-1 gap-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl shrink-0 z-10 mr-4">1</div>
                <div className="glass-card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-700">Search</h3>
                  <p>Conduct a comprehensive trademark search to ensure your mark doesn't conflict with existing registrations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl shrink-0 z-10 mr-4">2</div>
                <div className="glass-card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-700">File Application</h3>
                  <p>Submit your trademark application with the appropriate intellectual property office, including a clear representation of your mark and list of goods/services.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl shrink-0 z-10 mr-4">3</div>
                <div className="glass-card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-700">Examination</h3>
                  <p>An examiner reviews your application for compliance and conducts a search for conflicting marks. You may need to respond to office actions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl shrink-0 z-10 mr-4">4</div>
                <div className="glass-card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-700">Publication & Registration</h3>
                  <p>If approved, your mark is published for opposition. If no one opposes, or oppositions are overcome, your trademark registers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-10 text-center text-gray-600">
        <div className="flex justify-center gap-4 mb-4">
          <Link to="/library/patents" className="text-purple-600 hover:underline">Patents</Link>
          <Link to="/library/copyright" className="text-purple-600 hover:underline">Copyright</Link>
          <Link to="/library" className="text-purple-600 hover:underline">All Resources</Link>
        </div>
        <p>© 2025 IPQuest - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Trademarks;