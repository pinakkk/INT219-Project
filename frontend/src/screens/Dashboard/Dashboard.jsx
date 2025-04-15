// // Dashboard.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Dashboard.css";

// function Dashboard() {
//   // Enhanced color palette
//   const colors = {
//     primary: "#FFB641",
//     accent: "#FFFF00",
//     light: "#FFE1B0",
//     dark: "#141414",
//     neutral: "#FDD7C4",
//     background: "#f8f2e8" // Soft, warm background
//   };

//   return (
//     <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-gray-50 to-amber-50" style={{ backgroundColor: colors.background }}>
//       {/* Decorative elements */}
//       <div className="fixed top-0 right-0 w-96 h-96 rounded-full" style={{ 
//         backgroundColor: `${colors.primary}20`, 
//         filter: 'blur(150px)',
//         zIndex: '0'
//       }}></div>
//       <div className="fixed bottom-0 left-10 w-64 h-64 rounded-full" style={{ 
//         backgroundColor: `${colors.neutral}40`, 
//         filter: 'blur(130px)',
//         zIndex: '0'
//       }}></div>
      
//       {/* Modern sleek header */}
//       <header className="relative z-10 mb-12">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center mb-2">
//             <div className="w-10 h-10 rounded-lg mr-4 flex items-center justify-center" 
//                  style={{ backgroundColor: colors.primary }}>
//               <span className="text-white text-xl font-bold">IP</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold" style={{ color: colors.dark }}>
//               IPQuest
//             </h1>
//           </div>
//           <div className="flex items-center ml-14">
//             <div className="w-20 h-1 mr-4" style={{ backgroundColor: colors.primary }}></div>
//             <p className="text-lg" style={{ color: 'rgba(20,20,20,0.7)' }}>
//               Discover the world of Intellectual Property
//             </p>
//           </div>
//         </div>
//       </header>

//       {/* Main content container */}
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Games Section */}
//         <section className="mb-14">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
//               Game Center
//             </h2>
//             <div className="h-px w-2/3" style={{ background: `linear-gradient(to right, ${colors.primary}50, transparent)` }}></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* IP Quest Card - Glassmorphism */}
//             <div className="rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2" 
//                  style={{ 
//                    background: 'rgba(255, 255, 255, 0.7)',
//                    backdropFilter: 'blur(10px)',
//                    border: '1px solid rgba(255, 255, 255, 0.8)',
//                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)'
//                  }}>
//               <div className="h-44 flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0" style={{ backgroundColor: `${colors.light}90` }}></div>
//                 <span className="text-5xl relative z-10">🕵️</span>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: colors.dark }}>
//                   IP Quest
//                 </h3>
//                 <p className="text-gray-600 mb-5 text-sm">
//                   Embark on an educational journey through intellectual property concepts.
//                 </p>
//                 <Link 
//                   to="/ipquest" 
//                   className="inline-block py-2.5 px-5 rounded-lg font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
//                   style={{ 
//                     background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd)`,
//                     transform: 'translateZ(0)'
//                   }}
//                 >
//                   Start Quest
//                 </Link>
//               </div>
//             </div>
            
//             {/* IP Defender Card - Glassmorphism */}
//             <div className="rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2" 
//                  style={{ 
//                    background: 'rgba(255, 255, 255, 0.7)',
//                    backdropFilter: 'blur(10px)',
//                    border: '1px solid rgba(255, 255, 255, 0.8)',
//                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)'
//                  }}>
//               <div className="h-44 flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0" style={{ backgroundColor: `${colors.neutral}90` }}></div>
//                 <span className="text-5xl relative z-10">🛡️</span>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: colors.dark }}>
//                   IP Defender
//                 </h3>
//                 <p className="text-gray-600 mb-5 text-sm">
//                   Test your knowledge with interactive puzzles about IP protection.
//                 </p>
//                 <Link 
//                   to="/ipdefender" 
//                   className="inline-block py-2.5 px-5 rounded-lg font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
//                   style={{ 
//                     background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd)`,
//                     transform: 'translateZ(0)'
//                   }}
//                 >
//                   Play Now
//                 </Link>
//               </div>
//             </div>

//             {/* Innovation Tycoon Card - Glassmorphism */}
//             <div className="rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2" 
//                  style={{ 
//                    background: 'rgba(255, 255, 255, 0.7)',
//                    backdropFilter: 'blur(10px)',
//                    border: '1px solid rgba(255, 255, 255, 0.8)',
//                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)'
//                  }}>
//               <div className="h-44 flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0" style={{ backgroundColor: `${colors.light}90` }}></div>
//                 <span className="text-5xl relative z-10">💼</span>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: colors.dark }}>
//                   Innovation Tycoon
//                 </h3>
//                 <p className="text-gray-600 mb-5 text-sm">
//                   Build your startup and strategically manage intellectual property.
//                 </p>
//                 <Link 
//                   to="/innovationtycoon" 
//                   className="inline-block py-2.5 px-5 rounded-lg font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
//                   style={{ 
//                     background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd)`,
//                     transform: 'translateZ(0)'
//                   }}
//                 >
//                   Start Building
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Library Section */}
//         <section className="mb-14">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
//               IP Library
//             </h2>
//             <div className="h-px w-2/3" style={{ background: `linear-gradient(to right, ${colors.primary}50, transparent)` }}></div>
//           </div>
          
//           <div className="rounded-xl transition-all duration-300 hover:shadow-xl p-1"
//                style={{ 
//                  background: 'rgba(255, 255, 255, 0.7)',
//                  backdropFilter: 'blur(10px)',
//                  border: '1px solid rgba(255, 255, 255, 0.8)',
//                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.08)'
//                }}>
//             <div className="p-6">
//               <div className="flex flex-col md:flex-row items-center">
//                 <div className="w-full md:w-1/5 flex justify-center mb-6 md:mb-0">
//                   <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-md" 
//                        style={{ 
//                          background: `linear-gradient(135deg, ${colors.neutral}, ${colors.neutral}80)`,
//                        }}>
//                     <span className="text-4xl">📚</span>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-4/5 md:pl-8">
//                   <h3 className="text-xl font-semibold mb-3" style={{ color: colors.dark }}>
//                     Knowledge Resources
//                   </h3>
//                   <p className="text-gray-600 mb-5">
//                     Access comprehensive guides, case studies, and practical examples of intellectual property.
//                   </p>
//                   <div className="flex flex-wrap gap-3">
//                     <Link 
//                       to="/library/patents" 
//                       className="py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md"
//                       style={{ 
//                         background: `rgba(255, 182, 65, 0.1)`, 
//                         color: colors.primary,
//                         border: `1px solid ${colors.primary}40`
//                       }}
//                     >
//                       Patents
//                     </Link>
//                     <Link 
//                       to="/library/trademarks" 
//                       className="py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md"
//                       style={{ 
//                         background: `rgba(255, 182, 65, 0.1)`, 
//                         color: colors.primary,
//                         border: `1px solid ${colors.primary}40`
//                       }}
//                     >
//                       Trademarks
//                     </Link>
//                     <Link 
//                       to="/library/copyright" 
//                       className="py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md"
//                       style={{ 
//                         background: `rgba(255, 182, 65, 0.1)`, 
//                         color: colors.primary,
//                         border: `1px solid ${colors.primary}40`
//                       }}
//                     >
//                       Copyright
//                     </Link>
//                     <Link 
//                       to="/library" 
//                       className="py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
//                       style={{ 
//                         background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd)`,
//                         color: "white"
//                       }}
//                     >
//                       Browse All
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* User Progress Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//           {/* Scorecard */}
//           <section>
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
//                 Your Progress
//               </h2>
//               <div className="h-px w-1/2" style={{ background: `linear-gradient(to right, ${colors.primary}50, transparent)` }}></div>
//             </div>
            
//             <div className="rounded-xl h-full transition-all duration-300 hover:shadow-xl p-1"
//                  style={{ 
//                    background: 'rgba(255, 255, 255, 0.7)',
//                    backdropFilter: 'blur(10px)',
//                    border: '1px solid rgba(255, 255, 255, 0.8)',
//                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.08)'
//                  }}>
//               <div className="p-6">
//                 <div className="mb-6">
//                   <div className="flex justify-between mb-4">
//                     <span className="text-gray-600">Total Points</span>
//                     <span className="font-semibold text-2xl" style={{ color: colors.primary }}>1,250</span>
//                   </div>
//                   <div className="mb-6">
//                     <div className="flex justify-between mb-2">
//                       <span className="text-sm text-gray-600">Level Progress</span>
//                       <span className="text-sm font-medium" style={{ color: colors.primary }}>Level 3 of 5</span>
//                     </div>
//                     <div className="w-full h-3 rounded-full overflow-hidden p-0.5" 
//                          style={{ 
//                            background: 'rgba(255, 255, 255, 0.6)',
//                            border: '1px solid rgba(255, 255, 255, 0.8)'
//                          }}>
//                       <div 
//                         className="h-full rounded-full transition-all duration-500"
//                         style={{ 
//                           width: '65%', 
//                           background: `linear-gradient(to right, ${colors.primary}, ${colors.primary}99)`
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex justify-between mb-3">
//                       <span className="text-gray-600">Badges Earned</span>
//                       <span className="font-semibold" style={{ color: colors.dark }}>7</span>
//                     </div>
//                     <div className="flex gap-3">
//                       <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
//                            style={{ 
//                              background: 'rgba(255, 255, 255, 0.6)',
//                              border: '1px solid rgba(255, 255, 255, 0.8)'
//                            }}>
//                         <span>🥇</span>
//                       </div>
//                       <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
//                            style={{ 
//                              background: 'rgba(255, 255, 255, 0.6)',
//                              border: '1px solid rgba(255, 255, 255, 0.8)'
//                            }}>
//                         <span>🔍</span>
//                       </div>
//                       <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
//                            style={{ 
//                              background: 'rgba(255, 255, 255, 0.6)',
//                              border: '1px solid rgba(255, 255, 255, 0.8)'
//                            }}>
//                         <span>💡</span>
//                       </div>
//                       <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
//                            style={{ 
//                              background: 'rgba(255, 255, 255, 0.6)',
//                              border: '1px solid rgba(255, 255, 255, 0.8)'
//                            }}>
//                         <span>+4</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <Link 
//                   to="/scoreboard" 
//                   className="block text-center py-2.5 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90"
//                   style={{ 
//                     background: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}30)`,
//                     color: colors.primary,
//                     border: `1px solid ${colors.primary}30`
//                   }}
//                 >
//                   View Leaderboard
//                 </Link>
//               </div>
//             </div>
//           </section>
          
//           {/* Avatar */}
//           <section>
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
//                 Your Avatar
//               </h2>
//               <div className="h-px w-1/2" style={{ background: `linear-gradient(to right, ${colors.primary}50, transparent)` }}></div>
//             </div>
            
//             <div className="rounded-xl h-full transition-all duration-300 hover:shadow-xl p-1"
//                  style={{ 
//                    background: 'rgba(255, 255, 255, 0.7)',
//                    backdropFilter: 'blur(10px)',
//                    border: '1px solid rgba(255, 255, 255, 0.8)',
//                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.08)'
//                  }}>
//               <div className="p-6 flex flex-col items-center justify-center h-full">
//                 <div className="w-32 h-32 rounded-full mb-6 flex items-center justify-center shadow-lg" 
//                      style={{ 
//                        background: `linear-gradient(135deg, ${colors.light}, ${colors.light}80)`,
//                        border: `3px solid rgba(255, 255, 255, 0.8)`
//                      }}>
//                   <span className="text-5xl">😎</span>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2" style={{ color: colors.dark }}>
//                   IP Innovator
//                 </h3>
//                 <p className="text-gray-600 mb-6 text-sm text-center">
//                   Customize your profile to reflect your IP journey.
//                 </p>
//                 <Link 
//                   to="/avatar" 
//                   className="block w-full text-center py-2.5 px-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
//                   style={{ 
//                     background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd)`,
//                     color: "white"
//                   }}
//                 >
//                   Customize Avatar
//                 </Link>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
      
//       {/* Minimal footer */}
//       <footer className="max-w-6xl mx-auto pt-8 pb-6 border-t border-gray-200 relative z-10">
//         <div className="flex justify-center items-center">
//           <div className="w-6 h-6 rounded-md mr-3 flex items-center justify-center" 
//                 style={{ backgroundColor: colors.primary }}>
//             <span className="text-white text-xs font-bold">IP</span>
//           </div>
//           <p className="text-sm" style={{ color: 'rgba(20,20,20,0.6)' }}>
//             © 2025 IPQuest - All Rights Reserved
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Dashboard;

// Dashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="min-h-screen p-6 md:p-8 dashboard-container">
      {/* Animated background elements */}
      <div className="animated-blob-1"></div>
      <div className="animated-blob-2"></div>
      <div className="animated-blob-3"></div>
      
      {/* Header with navigation */}
      <header className="relative z-10 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center group">
              <div className="logo-container">
                <span className="text-white text-xl font-bold">IP</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold logo-text ml-4">
                IPQuest
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                className={`nav-link ${activeTab === "games" ? "active" : ""}`}
                onClick={() => setActiveTab("games")}
              >
                Games
              </button>
              <button 
                className={`nav-link ${activeTab === "library" ? "active" : ""}`}
                onClick={() => setActiveTab("library")}
              >
                Library
              </button>
              <button 
                className={`nav-link ${activeTab === "progress" ? "active" : ""}`}
                onClick={() => setActiveTab("progress")}
              >
                Progress
              </button>
            </nav>
          </div>
          <div className="flex items-center ml-14">
            <div className="h-line-animation"></div>
            <p className="text-lg tagline">
              Discover the world of Intellectual Property
            </p>
          </div>
        </div>
      </header>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Games Section */}
        <section className={`mb-14 ${activeTab !== "games" ? "hidden" : ""}`}>
          <SectionHeader 
            title="Game Center" 
            subtitle="Learn through interactive games and challenges"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {games.map(game => (
              <GameCard 
                key={game.id}
                game={game}
                isExpanded={expandedGame === game.id}
                onExpand={() => setExpandedGame(expandedGame === game.id ? null : game.id)}
              />
            ))}
          </div>

          {/* Game Categories */}
          <div className="mb-14">
            <h3 className="text-xl font-semibold mb-6 text-center">Browse by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CategoryCard icon="📜" title="Patents" color="from-blue-100 to-blue-50" />
              <CategoryCard icon="™️" title="Trademarks" color="from-purple-100 to-purple-50" />
              <CategoryCard icon="©️" title="Copyright" color="from-green-100 to-green-50" />
              <CategoryCard icon="🔍" title="Research" color="from-orange-100 to-orange-50" />
            </div>
          </div>
        </section>

        {/* Library Section */}
        <section className={`mb-14 ${activeTab !== "library" ? "hidden" : ""}`}>
          <SectionHeader 
            title="IP Library" 
            subtitle="Comprehensive resources for IP learning"
          />
          
          <div className="glass-card hover:shadow-xl mb-8">
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/5 flex justify-center mb-6 md:mb-0">
                  <div className="library-emoji-container">
                    <span className="text-4xl floating-emoji">📚</span>
                  </div>
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
          </div>

          {/* Featured Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard 
              title="Patent Filing Guide" 
              description="Step-by-step guide to filing your first patent application"
              icon="📝"
              progress={45}
            />
            <ResourceCard 
              title="Trademark Case Studies" 
              description="Real-world examples of trademark disputes and resolutions"
              icon="🏛️"
              progress={80}
            />
          </div>
        </section>

        {/* Progress Section */}
        <section className={`mb-14 ${activeTab !== "progress" ? "hidden" : ""}`}>
          <SectionHeader 
            title="Your Progress" 
            subtitle="Track your learning journey"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Stats Card */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Your Stats</h3>
              <div className="space-y-4">
                <StatItem label="Total Points" value="1,250" icon="🏆" />
                <StatItem label="Level" value="3" icon="📈" />
                <StatItem label="Badges" value="7" icon="🛡️" />
                <StatItem label="Games Played" value="5" icon="🎮" />
              </div>
            </div>
            
            {/* Progress Card */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
              <div className="space-y-6">
                <ProgressItem title="Patents" progress={65} />
                <ProgressItem title="Trademarks" progress={45} />
                <ProgressItem title="Copyright" progress={30} />
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
              <button className="text-sm text-primary mt-4 hover:underline">
                View All Activity
              </button>
            </div>
          </div>

          {/* Badges Collection */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-6">Your Badges</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <BadgeCard emoji="🥇" title="First Steps" earned />
              <BadgeCard emoji="🔍" title="Researcher" earned />
              <BadgeCard emoji="💡" title="Innovator" earned />
              <BadgeCard emoji="📚" title="Bookworm" locked />
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="max-w-6xl mx-auto pt-8 pb-6 border-t border-gray-200 relative z-10 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="logo-container small mr-3">
              <span className="text-white text-xs font-bold">IP</span>
            </div>
            <p className="text-sm footer-text">
              © 2025 IPQuest - All Rights Reserved
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:underline">Terms</a>
            <a href="#" className="text-sm hover:underline">Privacy</a>
            <a href="#" className="text-sm hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reusable Components
const GameCard = ({ game, isExpanded, onExpand }) => (
  <div className={`game-card ${isExpanded ? "expanded" : ""}`}>
    <div className="game-card-header" onClick={onExpand}>
      <div className="game-emoji-container">
        <span className="text-4xl floating-emoji">{game.emoji}</span>
      </div>
      <h3 className="game-title">{game.title}</h3>
      <p className="game-description">{game.description}</p>
      <div className="game-difficulty">{game.difficulty}</div>
    </div>
    
    {isExpanded && (
      <div className="game-card-details">
        <p className="text-gray-600 mb-4">{game.longDescription}</p>
        <div className="progress-container mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress: {game.completed}%</span>
            <span>{game.points} points</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${game.completed}%` }}></div>
          </div>
        </div>
        <PrimaryButton to={game.link} text={game.completed > 0 ? "Continue" : "Start Now"} fullWidth />
      </div>
    )}
  </div>
);

const CategoryCard = ({ icon, title, color }) => (
  <div className={`category-card bg-gradient-to-br ${color}`}>
    <span className="text-3xl mb-2">{icon}</span>
    <h4 className="font-medium">{title}</h4>
  </div>
);

const ResourceCard = ({ title, description, icon, progress }) => (
  <div className="glass-card p-6 hover:shadow-lg transition-all">
    <div className="flex items-start mb-4">
      <div className="resource-icon-container mr-4">
        <span className="text-2xl">{icon}</span>
      </div>
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
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  </div>
);

const StatItem = ({ label, value, icon }) => (
  <div className="flex items-center">
    <div className="stat-icon-container mr-3">
      <span>{icon}</span>
    </div>
    <div>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  </div>
);

const ProgressItem = ({ title, progress }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{title}</span>
      <span>{progress}%</span>
    </div>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

const ActivityItem = ({ activity }) => (
  <div className="flex items-start">
    <div className="activity-icon-container mr-3">
      <div className="activity-icon">
        {activity.action === "Completed" ? "✓" : activity.action === "Earned" ? "★" : "➤"}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex justify-between">
        <span className="font-medium">{activity.item}</span>
        {activity.points > 0 && (
          <span className="text-primary text-sm">+{activity.points} pts</span>
        )}
      </div>
      <div className="text-xs text-gray-500">{activity.time}</div>
    </div>
  </div>
);

const BadgeCard = ({ emoji, title, earned, locked }) => (
  <div className={`badge-card ${earned ? "earned" : ""} ${locked ? "locked" : ""}`}>
    <div className="badge-emoji-container">
      <span className="text-2xl">{emoji}</span>
      {locked && <div className="badge-lock">🔒</div>}
    </div>
    <div className="text-sm mt-2 text-center">{title}</div>
  </div>
);

// Section components remain the same as previous version
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-bold section-title mb-2">{title}</h2>
    {subtitle && <p className="text-gray-600">{subtitle}</p>}
  </div>
);

const GlassButton = ({ to, text, fullWidth = false }) => (
  <Link 
    to={to} 
    className={`glass-button ${fullWidth ? 'w-full' : ''}`}
  >
    {text}
  </Link>
);

const PrimaryButton = ({ to, text, fullWidth = false }) => (
  <Link 
    to={to} 
    className={`primary-button ${fullWidth ? 'w-full' : ''}`}
  >
    {text}
  </Link>
);

export default Dashboard;