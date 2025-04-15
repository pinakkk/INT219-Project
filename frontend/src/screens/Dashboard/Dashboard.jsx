import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Dashboard.css";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("games");
  const [expandedGame, setExpandedGame] = useState(null);

  // Game data
  const games = [
    {
      id: 1,
      title: "IP Quest",
      emoji: "🕵️",
      description: "Embark on an educational journey through intellectual property concepts.",
      longDescription: "Solve puzzles and complete challenges to learn about patents, trademarks, and copyrights in an interactive adventure.",
      difficulty: "Beginner",
      points: 200,
      completed: 65,
      link: "/ipquest"
    },
    {
      id: 2,
      title: "IP Defender",
      emoji: "🛡️",
      description: "Test your knowledge with interactive puzzles about IP protection.",
      longDescription: "Protect your virtual company from IP threats by making the right legal decisions in this strategy game.",
      difficulty: "Intermediate",
      points: 350,
      completed: 40,
      link: "/ipdefender"
    },
    {
      id: 3,
      title: "Innovation Tycoon",
      emoji: "💼",
      description: "Build your startup and strategically manage intellectual property.",
      longDescription: "Grow your business from a garage startup to a multinational corporation by making smart IP decisions.",
      difficulty: "Advanced",
      points: 500,
      completed: 25,
      link: "/innovationtycoon"
    }
  ];

  // Recent activity data
  const recentActivity = [
    { id: 1, action: "Completed", item: "Trademark Basics Quiz", points: 50, time: "2 hours ago" },
    { id: 2, action: "Earned", item: "Patent Pioneer Badge", points: 100, time: "1 day ago" },
    { id: 3, action: "Started", item: "IP Defender Level 3", points: 0, time: "3 days ago" }
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
    <div className="min-h-screen p-6 md:p-8 dashboard-container bg-gradient-to-br from-amber-50 to-white">
      {/* Animated background elements */}
      <div className="animated-blob-1"></div>
      <div className="animated-blob-2"></div>
      <div className="animated-blob-3"></div>
      
      {/* Header with navigation */}
      <motion.header 
        className="relative z-10 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <motion.div 
              className="flex items-center group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="logo-container bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">IP</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 ml-4">
                IPQuest
              </h1>
            </motion.div>
            <nav className="hidden md:flex items-center space-x-6">
              {["games", "library", "progress"].map((tab) => (
                <motion.button 
                  key={tab}
                  className={`nav-link ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </nav>
            {/* Mobile navigation */}
            <div className="md:hidden flex justify-around w-full">
              {["games", "library", "progress"].map((tab) => (
                <motion.button 
                  key={tab}
                  className={`mobile-nav-link ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="flex items-center ml-4 md:ml-14">
            <div className="h-line-animation w-20 h-1 mr-4 bg-yellow-400"></div>
            <p className="text-lg tagline text-gray-600">
              Discover the world of Intellectual Property
            </p>
          </div>
        </div>
      </motion.header>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Games Section */}
        <AnimatePresence mode="wait">
          {activeTab === "games" && (
            <motion.section 
              className="mb-14"
              key="games"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeader 
                title="Game Center" 
                subtitle="Learn through interactive games and challenges"
              />
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {games.map(game => (
                  <motion.div key={game.id} variants={itemVariants}>
                    <GameCard 
                      game={game}
                      isExpanded={expandedGame === game.id}
                      onExpand={() => setExpandedGame(expandedGame === game.id ? null : game.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Game Categories */}
              <div className="mb-14">
                <h3 className="text-xl font-semibold mb-6 text-center">Browse by Category</h3>
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <CategoryCard icon="📜" title="Patents" color="from-blue-100 to-blue-50" />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <CategoryCard icon="™️" title="Trademarks" color="from-purple-100 to-purple-50" />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <CategoryCard icon="©️" title="Copyright" color="from-green-100 to-green-50" />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <CategoryCard icon="🔍" title="Research" color="from-orange-100 to-orange-50" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Library Section */}
          {activeTab === "library" && (
            <motion.section 
              className="mb-14"
              key="library"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeader 
                title="IP Library" 
                subtitle="Comprehensive resources for IP learning"
              />
              
              <motion.div 
                className="glass-card hover:shadow-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/5 flex justify-center mb-6 md:mb-0">
                      <motion.div 
                        className="library-emoji-container w-24 h-24 rounded-full flex items-center justify-center shadow-md bg-gradient-to-r from-amber-100 to-white"
                        animate={{ 
                          y: [0, -10, 0],
                          scale: [1, 1.05, 1] 
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <span className="text-4xl">📚</span>
                      </motion.div>
                    </div>
                    <div className="w-full md:w-4/5 md:pl-8">
                      <h3 className="text-xl font-semibold mb-3">Knowledge Resources</h3>
                      <p className="text-gray-600 mb-5">
                        Access comprehensive guides, case studies, and practical examples of intellectual property.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <GlassButton to="/library/patents" text="Patents" />
                        <GlassButton to="/library/trademarks" text="Trademarks" />
                        <GlassButton to="/library/copyright" text="Copyright" />
                        <PrimaryButton to="/library" text="Browse All" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Featured Resources */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <ResourceCard 
                    title="Patent Filing Guide" 
                    description="Step-by-step guide to filing your first patent application"
                    icon="📝"
                    progress={45}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <ResourceCard 
                    title="Trademark Case Studies" 
                    description="Real-world examples of trademark disputes and resolutions"
                    icon="🏛️"
                    progress={80}
                  />
                </motion.div>
              </motion.div>
            </motion.section>
          )}

          {/* Progress Section */}
          {activeTab === "progress" && (
            <motion.section 
              className="mb-14"
              key="progress"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeader 
                title="Your Progress" 
                subtitle="Track your learning journey"
              />
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Stats Card */}
                <motion.div 
                  className="glass-card p-6"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-4">Your Stats</h3>
                  <div className="space-y-4">
                    <StatItem label="Total Points" value="1,250" icon="🏆" />
                    <StatItem label="Level" value="3" icon="📈" />
                    <StatItem label="Badges" value="7" icon="🛡️" />
                    <StatItem label="Games Played" value="5" icon="🎮" />
                  </div>
                </motion.div>
                
                {/* Progress Card */}
                <motion.div 
                  className="glass-card p-6"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
                  <div className="space-y-6">
                    <ProgressItem title="Patents" progress={65} />
                    <ProgressItem title="Trademarks" progress={45} />
                    <ProgressItem title="Copyright" progress={30} />
                  </div>
                </motion.div>
                
                {/* Recent Activity */}
                <motion.div 
                  className="glass-card p-6"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div 
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ActivityItem activity={activity} />
                      </motion.div>
                    ))}
                  </div>
                  <motion.button 
                    className="text-sm text-primary mt-4 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Activity
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Badges Collection */}
              <motion.div 
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-6">Your Badges</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <BadgeCard emoji="🥇" title="First Steps" earned />
                  <BadgeCard emoji="🔍" title="Researcher" earned />
                  <BadgeCard emoji="💡" title="Innovator" earned />
                  <BadgeCard emoji="📚" title="Bookworm" locked />
                </div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <motion.footer 
        className="max-w-6xl mx-auto pt-8 pb-6 border-t border-gray-200 relative z-10 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="logo-container small bg-yellow-400 w-6 h-6 rounded-md flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">IP</span>
            </div>
            <p className="text-sm footer-text text-gray-600">
              © 2025 IPQuest - All Rights Reserved
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm hover:underline text-gray-600">Terms</Link>
            <Link to="/privacy" className="text-sm hover:underline text-gray-600">Privacy</Link>
            <Link to="/contactpage" className="text-sm hover:underline text-gray-600">Contact</Link>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

// Reusable Components
const GameCard = ({ game, isExpanded, onExpand }) => (
  <motion.div 
    className={`game-card ${isExpanded ? "expanded" : ""}`}
    whileHover={{ y: -5 }}
    layout
  >
    <div className="game-card-header" onClick={onExpand}>
      <motion.div 
        className="game-emoji-container"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <span className="text-4xl floating-emoji">{game.emoji}</span>
      </motion.div>
      <h3 className="game-title">{game.title}</h3>
      <p className="game-description">{game.description}</p>
      <div className="game-difficulty">{game.difficulty}</div>
    </div>
    
    <AnimatePresence>
      {isExpanded && (
        <motion.div 
          className="game-card-details"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 mb-4">{game.longDescription}</p>
          <div className="progress-container mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress: {game.completed}%</span>
              <span>{game.points} points</span>
            </div>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill" 
                initial={{ width: 0 }}
                animate={{ width: `${game.completed}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              ></motion.div>
            </div>
          </div>
          <PrimaryButton to={game.link} text={game.completed > 0 ? "Continue" : "Start Now"} fullWidth />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const CategoryCard = ({ icon, title, color }) => (
  <motion.div 
    className={`category-card bg-gradient-to-br ${color}`}
    whileHover={{ y: -5, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
  >
    <motion.span 
      className="text-3xl mb-2 inline-block"
      animate={{ 
        y: [0, -5, 0],
        rotate: [0, 5, 0]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {icon}
    </motion.span>
    <h4 className="font-medium">{title}</h4>
  </motion.div>
);

const ResourceCard = ({ title, description, icon, progress }) => (
  <motion.div 
    className="glass-card p-6 hover:shadow-lg transition-all"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-start mb-4">
      <motion.div 
        className="resource-icon-container mr-4"
        whileHover={{ rotate: [0, -10, 10, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl">{icon}</span>
      </motion.div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
    <div className="progress-container">
      <div className="flex justify-between text-xs mb-1">
        <span>Completed: {progress}%</span>
      </div>
      <div className="progress-bar">
        <motion.div 
          className="progress-fill" 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  </motion.div>
);

const StatItem = ({ label, value, icon }) => (
  <motion.div 
    className="flex items-center"
    whileHover={{ x: 5 }}
  >
    <motion.div 
      className="stat-icon-container mr-3"
      whileHover={{ scale: 1.2, rotate: 10 }}
    >
      <span>{icon}</span>
    </motion.div>
    <div>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  </motion.div>
);

const ProgressItem = ({ title, progress }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{title}</span>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress}%
      </motion.span>
    </div>
    <div className="progress-bar">
      <motion.div 
        className="progress-fill" 
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut" 
        }}
      ></motion.div>
    </div>
  </div>
);

const ActivityItem = ({ activity }) => (
  <motion.div 
    className="flex items-start"
    whileHover={{ 
      x: 5,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: "8px" 
    }}
  >
    <motion.div 
      className="activity-icon-container mr-3"
      whileHover={{ scale: 1.1 }}
    >
      <div className="activity-icon">
        {activity.action === "Completed" ? "✓" : activity.action === "Earned" ? "★" : "➤"}
      </div>
    </motion.div>
    <div className="flex-1">
      <div className="flex justify-between">
        <span className="font-medium">{activity.item}</span>
        {activity.points > 0 && (
          <motion.span 
            className="text-primary text-sm"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 0.5,
              delay: 0.3
            }}
          >
            +{activity.points} pts
          </motion.span>
        )}
      </div>
      <div className="text-xs text-gray-500">{activity.time}</div>
    </div>
  </motion.div>
);

const BadgeCard = ({ emoji, title, earned, locked }) => (
  <motion.div 
    className={`badge-card ${earned ? "earned" : ""} ${locked ? "locked" : ""}`}
    whileHover={{ y: -5, scale: earned ? 1.05 : 1 }}
  >
    <motion.div 
      className="badge-emoji-container"
      animate={earned ? { 
        y: [0, -5, 0],
        boxShadow: ["0px 4px 10px rgba(0, 0, 0, 0.05)", "0px 8px 15px rgba(255, 182, 65, 0.3)", "0px 4px 10px rgba(0, 0, 0, 0.05)"]
      } : {}}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <span className="text-2xl">{emoji}</span>
      {locked && <div className="badge-lock">🔒</div>}
    </motion.div>
    <div className="text-sm mt-2 text-center">{title}</div>
  </motion.div>
);

// Section components with animation
const SectionHeader = ({ title, subtitle }) => (
  <motion.div 
    className="mb-8 text-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2 
      className="text-3xl font-bold section-title mb-2"
      whileInView={{ 
        textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 2px 5px rgba(255, 182, 65, 0.5)", "0px 0px 0px rgba(0,0,0,0)"] 
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {title}
    </motion.h2>
    {subtitle && <p className="text-gray-600">{subtitle}</p>}
  </motion.div>
);

const GlassButton = ({ to, text, fullWidth = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link 
      to={to} 
      className={`glass-button py-2 px-4 rounded-lg text-sm font-medium transition-all 
        bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30
        hover:shadow-md text-yellow-600 ${fullWidth ? 'w-full block text-center' : 'inline-block'}`}
    >
      {text}
    </Link>
  </motion.div>
);

const PrimaryButton = ({ to, text, fullWidth = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link 
      to={to} 
      className={`primary-button ${fullWidth ? 'w-full' : ''}`}
    >
      {text}
    </Link>
  </motion.div>
);

export default Dashboard;