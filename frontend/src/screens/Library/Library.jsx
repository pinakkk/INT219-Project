import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Define one resource per category
const resourcesData = [
  { 
    id: 1,
    title: "Patent Filing Guide",
    category: "patents",
    icon: "📄",
    description: "Complete guide to filing a patent application",
    level: "Beginner",
    progress: 45,
    timeToComplete: "45 min",
    tags: ["Application", "Process", "Inventor"]
  },
  { 
    id: 3,
    title: "Trademark Basics",
    category: "trademarks",
    icon: "™️",
    description: "Understanding trademark protection and enforcement",
    level: "Beginner",
    progress: 80,
    timeToComplete: "30 min",
    tags: ["Branding", "Protection", "Business"]
  },
  { 
    id: 5,
    title: "Copyright Fundamentals",
    category: "copyright",
    icon: "©️",
    description: "Essential information about copyright protection",
    level: "Beginner",
    progress: 65,
    timeToComplete: "25 min",
    tags: ["Creative Works", "Protection", "Rights"]
  },
  { 
    id: 7,
    title: "IP Research Methodology",
    category: "research",
    icon: "📊",
    description: "How to research existing intellectual property",
    level: "Advanced",
    progress: 15,
    timeToComplete: "90 min",
    tags: ["Analysis", "Data", "Strategy"]
  }
];

const categories = [
  { id: "all", name: "All Resources", color: "bg-blue-100 text-blue-700" },
  { id: "patents", name: "Patents", color: "bg-blue-100 text-blue-700" },
  { id: "trademarks", name: "Trademarks", color: "bg-purple-100 text-purple-700" },
  { id: "copyright", name: "Copyright", color: "bg-green-100 text-green-700" },
  { id: "research", name: "Research Methods", color: "bg-orange-100 text-orange-700" }
];

export default function Library() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Memoize filtered resources
  const filteredResources = useMemo(() => {
    let filtered = resourcesData;
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (resource) => resource.category === activeCategory
      );
    }
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(term) ||
          resource.description.toLowerCase().includes(term) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }
    return filtered;
  }, [activeCategory, searchTerm]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-amber-50 to-white">
      {/* Animated Background Elements */}
      <div className="animated-blob-1"></div>
      <div className="animated-blob-2"></div>
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path 
              fillRule="evenodd" 
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to Dashboard
        </Link>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">IP Library</h1>
          <p className="text-gray-600">Comprehensive resources to master intellectual property concepts</p>
        </motion.div>
      </div>
      
      {/* Search and Category Filter */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          {/* Search Bar */}
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </motion.div>
        
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                type="button"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id 
                    ? "bg-yellow-400 text-white" 
                    : "bg-white text-gray-700 hover:bg-yellow-50"
                } shadow-sm`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Resource Cards */}
      <div className="max-w-6xl mx-auto">
        {filteredResources.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-600">No resources found</h3>
            <p className="mt-2 text-gray-500">Try a different search term or category</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                className="glass-card p-6 relative overflow-hidden"
                variants={itemVariants}
                layout
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              >
                <span className={`absolute top-0 right-0 w-24 text-xs text-center py-1 text-white transform rotate-45 translate-y-2 translate-x-6 ${
                  resource.category === "patents" ? "bg-blue-500" :
                  resource.category === "trademarks" ? "bg-purple-500" :
                  resource.category === "copyright" ? "bg-green-500" :
                  "bg-orange-500"
                }`}>
                  {resource.category}
                </span>
                
                <div className="flex items-start mb-4">
                  <motion.div 
                    className="resource-icon-container mr-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <span className="text-2xl">{resource.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {resource.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        resource.level === "Beginner" ? "bg-green-100 text-green-700" :
                        resource.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {resource.level}
                      </span>
                      <span className="text-xs text-gray-500">⏱️ {resource.timeToComplete}</span>
                    </div>
                  </div>
                </div>
                
                <div className="progress-container mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress: {resource.progress}%</span>
                    {resource.progress === 0 ? 
                      <span className="text-blue-600">Not Started</span> : 
                      resource.progress === 100 ? 
                      <span className="text-green-600">Completed</span> : 
                      <span className="text-yellow-600">In Progress</span>
                    }
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill bg-yellow-400 h-2 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: `${resource.progress}%` }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                </div>
                
                <motion.button
                  type="button"
                  className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg font-medium transition-all shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`/resource/${resource.id}`)}
                >
                  {resource.progress === 0 
                    ? "Start Learning" 
                    : resource.progress === 100 
                    ? "Review Again" 
                    : "Continue"}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      
      {/* Quick Navigation: Learn More...*/}
      <div className="max-w-6xl mx-auto mt-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Learn More...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/library/patents">
            <motion.div 
              className="glass-card p-6 text-center hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Patents</h3>
              <p className="text-sm text-gray-600">Explore guides on patent filing, searching, and strategy</p>
            </motion.div>
          </Link>
          
          <Link to="/library/trademarks">
            <motion.div 
              className="glass-card p-6 text-center hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">™️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Trademarks</h3>
              <p className="text-sm text-gray-600">Learn about brand protection, registration, and enforcement</p>
            </motion.div>
          </Link>
          
          <Link to="/library/copyright">
            <motion.div 
              className="glass-card p-6 text-center hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">©️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-700">Copyright</h3>
              <p className="text-sm text-gray-600">Discover resources on protecting creative works and fair use</p>
            </motion.div>
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto pt-8 pb-6 border-t border-gray-200 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">IP</span>
            </div>
            <p className="text-sm text-gray-600">© 2025 IPQuest - All Rights Reserved</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm hover:underline text-gray-600">Terms</Link>
            <Link to="/privacy" className="text-sm hover:underline text-gray-600">Privacy</Link>
            <Link to="/contact" className="text-sm hover:underline text-gray-600">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}