import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Copyright = () => {
  const copyrightResources = [
    {
      id: 1,
      title: "Copyright Fundamentals",
      description: "Essential information about copyright protection for creative works",
      icon: "©️",
      level: "Beginner",
      timeToComplete: "30 min",
      categories: ["Guide", "Basics"]
    },
    {
      id: 2,
      title: "Copyright Registration",
      description: "How to register your works for enhanced copyright protection",
      icon: "📝",
      level: "Beginner",
      timeToComplete: "25 min",
      categories: ["Process", "Legal"]
    },
    {
      id: 3,
      title: "Fair Use Doctrine",
      description: "Understanding fair use exceptions to copyright protection",
      icon: "⚖️",
      level: "Intermediate",
      timeToComplete: "45 min",
      categories: ["Legal", "Exceptions"]
    },
    {
      id: 4,
      title: "Digital Rights Management",
      description: "Protecting copyrighted works in the digital environment",
      icon: "🔒",
      level: "Advanced",
      timeToComplete: "60 min",
      categories: ["Technical", "Protection"]
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
    <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-green-50 to-white">
      {/* Animated background elements */}
      <div className="animated-blob-1" style={{ background: "rgba(34, 197, 94, 0.15)" }}></div>
      <div className="animated-blob-2" style={{ background: "rgba(187, 247, 208, 0.2)" }}></div>
      
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
          <h1 className="text-4xl font-bold mb-2 text-green-700">Copyright Resources</h1>
          <p className="text-gray-600">Protect your creative works with copyright knowledge</p>
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
            className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-green-100 border-4 border-white shadow-lg"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-5xl">©️</span>
          </motion.div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-green-700">What is Copyright?</h2>
            <p className="mb-4">Copyright is a legal right that grants the creator of an original work exclusive rights to determine whether and under what conditions this original work may be copied and used by others.</p>
            <p>Copyright protects literary, dramatic, musical, artistic, and certain other intellectual works, whether published or unpublished.</p>
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
          {copyrightResources.map(resource => (
            <motion.div
              key={resource.id}
              className="glass-card p-6"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-start mb-4">
                <motion.div 
                  className="resource-icon-container mr-4 bg-green-50"
                  whileHover={{ rotate: 10 }}
                >
                  <span className="text-2xl">{resource.icon}</span>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-green-700">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource.categories.map((category, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
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
                className="mt-4 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* What Copyright Protects */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">What Copyright Protects</h2>
        
        <div className="glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700 border-b border-green-200 pb-2">Protected Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Literary works:</strong> Books, articles, poems, software code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Musical works:</strong> Songs, compositions, sound recordings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Dramatic works:</strong> Plays, screenplays, choreography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Artistic works:</strong> Paintings, sculptures, photographs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Audiovisual works:</strong> Movies, videos, broadcasts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Architecture:</strong> Building designs and architectural plans</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700 border-b border-red-200 pb-2">Not Protected by Copyright</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Ideas:</strong> Concepts, principles, discoveries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Facts:</strong> Historical events, news, data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Systems:</strong> Methods of operation, procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Titles and names:</strong> Short phrases, slogans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Works in public domain:</strong> Expired copyright or dedicated to public</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span><strong>Government works:</strong> Laws, regulations, court decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Copyright Duration */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Copyright Duration</h2>
        
        <div className="glass-card p-6">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-green-100 transform -translate-x-1/2"></div>
            
            <div className="relative grid grid-cols-1 gap-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xl shrink-0 z-10 mr-4">1</div>
                <div className="glass-card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-700">Works Created After January 1, 1978</h3>
                  <p>Life of the author plus 70 years. For works made for hire, anonymous, or pseudonymous works: 95 years from publication or 120 years from creation, whichever is shorter.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xl shrink-0 z-10 mr-4">2</div>
                <div className="glass-card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-700">Works Published Before 1978</h3>
                  <p>Generally, 95 years from the date of publication. Rules vary based on whether and when the work was published, registered, or had its copyright renewed.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xl shrink-0 z-10 mr-4">3</div>
                <div className="glass-card p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-700">International Considerations</h3>
                  <p>Copyright duration varies by country. Works may be protected in one country but in the public domain in another due to different copyright terms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-10 text-center text-gray-600">
        <div className="flex justify-center gap-4 mb-4">
          <Link to="/library/patents" className="text-green-600 hover:underline">Patents</Link>
          <Link to="/library/trademarks" className="text-green-600 hover:underline">Trademarks</Link>
          <Link to="/library" className="text-green-600 hover:underline">All Resources</Link>
        </div>
        <p>© 2025 IPQuest - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Copyright;