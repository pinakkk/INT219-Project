import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./InnovationTycoon.css";

const InnovationTycoon = () => {
  const navigate = useNavigate();
  
  // Game state
  const [state, setState] = useState({
    gameStatus: "intro", // intro, playing, paused, completed
    week: 1,
    cash: 10000,
    reputation: 50,
    intellectualProperty: [],
    competitors: [],
    events: [],
    researchPoints: 0,
    showTutorial: true,
    isLoading: false,
    saveStatus: null,
    lastSaved: null,
    businessName: "",
    businessType: "",
    selectedAction: null,
    actionHistory: [],
    showNotification: false,
    notification: { type: "", message: "" }
  });

  // Destructure state for easier access
  const { 
    gameStatus, week, cash, reputation, intellectualProperty,
    competitors, events, researchPoints, showTutorial, businessName,
    businessType, selectedAction, actionHistory, showNotification, notification
  } = state;
  
  // Get current user ID
  const userId = localStorage.getItem('userId') || 'guest';

  // Helper function to update specific state properties
  const updateState = useCallback((newState) => {
    setState(prevState => ({ ...prevState, ...newState }));
  }, []);

  // Business types with their properties
  const businessTypes = {
    "tech": { 
      name: "Technology Startup", 
      startingCash: 10000,
      icon: "💻",
      ipStrategy: "Patents are crucial for protecting your innovations",
      description: "Develop cutting-edge software and hardware solutions"
    },
    "creative": { 
      name: "Creative Studio", 
      startingCash: 8000, 
      icon: "🎨",
      ipStrategy: "Copyright protection is essential for your creative works",
      description: "Create and market original designs, music, and media"
    },
    "product": { 
      name: "Product Company", 
      startingCash: 12000,
      icon: "🛍️",
      ipStrategy: "Both patents and trademarks will be important for your brand",
      description: "Design, manufacture and sell physical products"
    }
  };

  // Available actions
  const actions = {
    "research": {
      name: "Research & Development",
      icon: "🔬",
      description: "Invest in creating new innovations",
      cost: 2000,
      reputationImpact: 0,
      researchPoints: 20,
      requires: {}
    },
    "patent": {
      name: "File Patent",
      icon: "📜",
      description: "Protect your invention with a patent",
      cost: 5000,
      reputationImpact: 10,
      researchPoints: -30,
      requires: { researchPoints: 30 }
    },
    "trademark": {
      name: "Register Trademark",
      icon: "™️",
      description: "Protect your brand identity",
      cost: 2000,
      reputationImpact: 5,
      requires: {}
    },
    "copyright": {
      name: "Copyright Registration",
      icon: "©️",
      description: "Officially register your creative works",
      cost: 1000,
      reputationImpact: 5,
      requires: { businessType: "creative" }
    },
    "marketing": {
      name: "Marketing Campaign",
      icon: "📣",
      description: "Increase awareness and reputation",
      cost: 3000,
      reputationImpact: 15,
      requires: {}
    },
    "license": {
      name: "License IP",
      icon: "🔑",
      description: "Generate revenue from your IP",
      cost: 1000,
      income: 2000,
      reputationImpact: 5,
      requires: { intellectualProperty: 1 }
    },
    "enforce": {
      name: "Enforce IP Rights",
      icon: "⚖️",
      description: "Take action against infringers",
      cost: 4000,
      reputationImpact: -5,
      requires: { intellectualProperty: 1 }
    }
  };
  
  // Random events that can occur
  const possibleEvents = [
    {
      name: "Competitor Infringement",
      description: "A competitor has released a product very similar to yours",
      options: [
        { text: "Enforce your IP rights ($4,000)", action: "enforce", cost: 4000, reputation: -5, successRate: 70 },
        { text: "Ignore it", action: "ignore", cost: 0, reputation: -10, successRate: 100 }
      ]
    },
    {
      name: "Partnership Opportunity",
      description: "A larger company wants to partner with you",
      options: [
        { text: "Accept partnership", action: "partner", cost: 0, cashReward: 5000, reputation: 15, successRate: 100 },
        { text: "Decline offer", action: "decline", cost: 0, reputation: 0, successRate: 100 }
      ]
    },
    {
      name: "IP Audit Recommendation",
      description: "Your advisor suggests conducting an IP audit",
      options: [
        { text: "Conduct audit ($2,000)", action: "audit", cost: 2000, reputation: 5, successRate: 100 },
        { text: "Skip audit", action: "skip", cost: 0, reputation: 0, successRate: 100 }
      ]
    }
  ];

  // Handle action selection
  const handleAction = (actionKey) => {
    const action = actions[actionKey];
    
    // Check if requirements are met
    if (action.requires.researchPoints && researchPoints < action.requires.researchPoints) {
      showGameNotification("error", `Not enough research points. Need ${action.requires.researchPoints}.`);
      return;
    }
    
    if (action.requires.intellectualProperty && intellectualProperty.length < action.requires.intellectualProperty) {
      showGameNotification("error", "You need at least one IP asset first.");
      return;
    }
    
    if (action.requires.businessType && action.requires.businessType !== businessType) {
      showGameNotification("error", `This action is only available for ${businessTypes[action.requires.businessType].name}.`);
      return;
    }
    
    // Check if enough cash
    if (cash < action.cost) {
      showGameNotification("error", "Not enough cash for this action.");
      return;
    }
    
    // Apply action
    const results = {
      cash: cash - action.cost,
      reputation: reputation + action.reputationImpact
    };
    
    // Additional effects
    if (action.researchPoints) {
      results.researchPoints = researchPoints + action.researchPoints;
    }
    
    if (action.income) {
      results.cash += action.income;
    }
    
    // Add to IP portfolio for patent/trademark/copyright actions
    if (actionKey === "patent" || actionKey === "trademark" || actionKey === "copyright") {
      const newIP = {
        type: actionKey,
        name: generateIPName(actionKey),
        value: actionKey === "patent" ? 10000 : actionKey === "trademark" ? 5000 : 2000,
        weekCreated: week
      };
      
      results.intellectualProperty = [...intellectualProperty, newIP];
      showGameNotification("success", `${newIP.name} successfully registered!`);
    } else {
      showGameNotification("success", `${action.name} action completed.`);
    }
    
    // Add to action history
    results.actionHistory = [...actionHistory, {
      week,
      action: actionKey,
      name: action.name,
      cost: action.cost,
      income: action.income || 0
    }];
    
    // Update state
    updateState(results);
    
    // Advance time
    advanceWeek();
  };
  
  // Function to advance game time
  const advanceWeek = () => {
    // Calculate weekly income based on IP portfolio
    let weeklyIncome = 0;
    intellectualProperty.forEach(ip => {
      if (ip.type === "patent") weeklyIncome += 500;
      if (ip.type === "trademark") weeklyIncome += 300;
      if (ip.type === "copyright") weeklyIncome += 200;
    });
    
    // Check for random events (33% chance)
    let newEvents = [...events];
    if (Math.random() < 0.33 && week > 2) {
      const randomEvent = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
      newEvents.push({
        ...randomEvent,
        weekOccurred: week
      });
    }
    
    // Update state with new week and income
    updateState({
      week: week + 1,
      cash: cash + weeklyIncome,
      events: newEvents,
      selectedAction: null
    });
    
    // Check for game end (week 20)
    if (week >= 20) {
      endGame();
    }
  };
  
  // Function to end the game
  const endGame = () => {
    // Calculate final score
    const totalIPValue = intellectualProperty.reduce((sum, ip) => sum + ip.value, 0);
    const finalScore = cash + totalIPValue + (reputation * 100);
    
    updateState({
      gameStatus: "completed",
      finalScore: finalScore
    });
  };
  
  // Function to start new game
  const startGame = (type, name) => {
    if (!name || name.trim().length === 0) {
      showGameNotification("error", "Please enter a business name");
      return;
    }
    
    updateState({
      gameStatus: "playing",
      businessType: type,
      businessName: name,
      cash: businessTypes[type].startingCash,
      week: 1,
      reputation: 50,
      intellectualProperty: [],
      actionHistory: [],
      researchPoints: 0,
      events: []
    });
  };
  
  // Helper function to generate random IP names
  const generateIPName = (type) => {
    const prefixes = ["Super", "Ultra", "Mega", "Smart", "Inno", "Tech", "Creative", "Dynamic"];
    const techWords = ["Algorithm", "System", "Framework", "Engine", "Platform", "Suite", "Tool"];
    const trademarkWords = ["Brand", "Mark", "Signature", "Identity", "Symbol", "Logo"];
    const copyrightWords = ["Design", "Composition", "Collection", "Opus", "Creation"];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    
    let suffix = "";
    if (type === "patent") {
      suffix = techWords[Math.floor(Math.random() * techWords.length)];
    } else if (type === "trademark") {
      suffix = trademarkWords[Math.floor(Math.random() * trademarkWords.length)];
    } else if (type === "copyright") {
      suffix = copyrightWords[Math.floor(Math.random() * copyrightWords.length)];
    }
    
    return `${prefix}${suffix}`;
  };
  
  // Show notification
  const showGameNotification = (type, message) => {
    updateState({
      showNotification: true,
      notification: { type, message }
    });
    
    // Hide after 3 seconds
    setTimeout(() => {
      updateState({ showNotification: false });
    }, 3000);
  };
  
  // Handle event option selection
  const handleEventOption = (event, option) => {
    // Check if enough cash
    if (cash < option.cost) {
      showGameNotification("error", "Not enough cash for this option.");
      return;
    }
    
    let success = true;
    // Check if action succeeds based on success rate
    if (option.successRate < 100) {
      success = Math.random() * 100 < option.successRate;
    }
    
    const results = {
      cash: cash - option.cost,
      reputation: reputation + (success ? option.reputation : Math.floor(option.reputation / 2)),
      events: events.filter(e => e !== event)
    };
    
    if (option.cashReward && success) {
      results.cash += option.cashReward;
    }
    
    // Add to action history
    results.actionHistory = [...actionHistory, {
      week,
      action: option.action,
      name: event.name,
      result: success ? "Success" : "Partial success",
      cost: option.cost,
      income: (option.cashReward && success) ? option.cashReward : 0
    }];
    
    updateState(results);
    
    showGameNotification(
      success ? "success" : "warning",
      success ? `${event.name}: Action successful!` : `${event.name}: Partially successful.`
    );
  };
  
  // Render intro screen
  const renderIntroScreen = () => (
    <motion.div 
      className="intro-screen bg-white bg-opacity-90 rounded-xl p-8 max-w-2xl mx-auto shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-5xl mb-6 mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        💼
      </motion.div>
      <h2 className="text-3xl font-bold mb-3">Innovation Tycoon</h2>
      <p className="text-gray-600 mb-6">Build your startup and strategically manage intellectual property to become an industry leader.</p>
      
      <div className="glass-card p-6 mb-6">
        <h3 className="font-semibold text-lg mb-3">Choose Your Business</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {Object.keys(businessTypes).map(type => (
            <motion.div
              key={type}
              className={`p-4 border rounded-lg cursor-pointer ${
                businessType === type ? 'bg-green-50 border-green-400' : 'bg-white border-gray-200'
              }`}
              whileHover={{ scale: 1.03, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              onClick={() => updateState({ businessType: type })}
            >
              <div className="text-3xl mb-2">{businessTypes[type].icon}</div>
              <h4 className="font-medium">{businessTypes[type].name}</h4>
              <p className="text-xs text-gray-500 mt-1">{businessTypes[type].description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border rounded-md"
            value={businessName}
            onChange={(e) => updateState({ businessName: e.target.value })}
            placeholder="Enter your business name"
          />
        </div>
        
        {businessType && (
          <div className="text-sm bg-blue-50 p-3 rounded-md mb-4">
            <strong>IP Strategy Tip:</strong> {businessTypes[businessType].ipStrategy}
          </div>
        )}
      </div>
      
      <motion.button
        className="px-8 py-3 bg-green-500 text-white rounded-lg font-bold w-full"
        whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => startGame(businessType, businessName)}
        disabled={!businessType}
      >
        Start Your Business
      </motion.button>
    </motion.div>
  );
  
  // Render game completion screen
  const renderCompletionScreen = () => {
    const totalIPValue = intellectualProperty.reduce((sum, ip) => sum + ip.value, 0);
    const finalScore = cash + totalIPValue + (reputation * 100);
    
    let rating = "Beginner";
    if (finalScore > 50000) rating = "Entrepreneur";
    if (finalScore > 100000) rating = "Business Maverick";
    if (finalScore > 150000) rating = "IP Tycoon";
    
    return (
      <motion.div 
        className="completion-screen bg-white bg-opacity-90 rounded-xl p-8 max-w-2xl mx-auto shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-6xl mb-6 mx-auto"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🏆
        </motion.div>
        <h2 className="text-3xl font-bold mb-3">Game Complete!</h2>
        <p className="text-xl mb-6">You've run {businessName} for 20 weeks</p>
        
        <div className="glass-card p-6 mb-6">
          <h3 className="font-semibold text-lg mb-3">Final Results</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">Cash</div>
              <div className="text-xl font-bold">${cash.toLocaleString()}</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">IP Portfolio Value</div>
              <div className="text-xl font-bold">${totalIPValue.toLocaleString()}</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">Reputation Value</div>
              <div className="text-xl font-bold">${(reputation * 100).toLocaleString()}</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-500">Total Score</div>
              <div className="text-xl font-bold">${finalScore.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <div className="text-sm text-yellow-700">Your Rating</div>
            <div className="text-2xl font-bold text-yellow-600">{rating}</div>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <motion.button
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold flex-1"
            whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => updateState({ gameStatus: "intro" })}
          >
            Play Again
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </motion.button>
        </div>
      </motion.div>
    );
  };
  
  // Render main game screen
  const renderGameScreen = () => (
    <div className="max-w-6xl mx-auto">
      {/* Game header with business info */}
      <div className="glass-card bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <div className="text-3xl mr-3">{businessTypes[businessType].icon}</div>
            <div>
              <h2 className="text-xl font-bold">{businessName}</h2>
              <p className="text-sm text-gray-600">{businessTypes[businessType].name}</p>
            </div>
          </div>
          
          <div className="flex space-x-6 mt-2 md:mt-0">
            <div className="stat-item">
              <div className="text-sm text-gray-500">Week</div>
              <div className="font-bold">{week}/20</div>
            </div>
            <div className="stat-item">
              <div className="text-sm text-gray-500">Cash</div>
              <div className="font-bold">${cash.toLocaleString()}</div>
            </div>
            <div className="stat-item">
              <div className="text-sm text-gray-500">Reputation</div>
              <div className="font-bold">{reputation}</div>
            </div>
            <div className="stat-item">
              <div className="text-sm text-gray-500">Research</div>
              <div className="font-bold">{researchPoints} pts</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main gameplay area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left panel: Actions */}
        <div className="col-span-1">
          <div className="glass-card bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-md">
            <h3 className="font-semibold text-lg mb-3">Available Actions</h3>
            <div className="space-y-2">
              {Object.keys(actions).map(actionKey => {
                const action = actions[actionKey];
                // Check if requirements are met for disabling
                let disabled = false;
                if (action.requires.researchPoints && researchPoints < action.requires.researchPoints) {
                  disabled = true;
                }
                if (action.requires.intellectualProperty && intellectualProperty.length < action.requires.intellectualProperty) {
                  disabled = true;
                }
                if (action.requires.businessType && action.requires.businessType !== businessType) {
                  disabled = true;
                }
                if (action.cost > cash) {
                  disabled = true;
                }
                
                return (
                  <motion.div
                    key={actionKey}
                    className={`p-3 rounded-lg border ${
                      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'
                    } ${selectedAction === actionKey ? 'bg-green-50 border-green-300' : 'border-gray-200'}`}
                    whileHover={!disabled ? { scale: 1.02 } : {}}
                    whileTap={!disabled ? { scale: 0.98 } : {}}
                    onClick={() => !disabled && handleAction(actionKey)}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-2">{action.icon}</span>
                      <div>
                        <div className="font-medium">{action.name}</div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <span className="mr-1">💰</span>${action.cost.toLocaleString()}
                          {action.income && <span className="ml-2 text-green-600">+${action.income.toLocaleString()}</span>}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{action.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Middle panel: Events & IP Portfolio */}
        <div className="col-span-2">
          {/* Events */}
          {events.length > 0 && (
            <div className="glass-card bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-md">
              <h3 className="font-semibold text-lg mb-3">Current Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-lg">{event.name}</h4>
                    <p className="mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.options.map((option, optIndex) => (
                        <motion.button
                          key={optIndex}
                          className={`px-3 py-2 rounded-lg text-sm ${
                            option.cost > cash ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'
                          }`}
                          whileHover={option.cost <= cash ? { scale: 1.05 } : {}}
                          whileTap={option.cost <= cash ? { scale: 0.95 } : {}}
                          onClick={() => option.cost <= cash && handleEventOption(event, option)}
                          disabled={option.cost > cash}
                        >
                          {option.text}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* IP Portfolio */}
          <div className="glass-card bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-md">
            <h3 className="font-semibold text-lg mb-3">IP Portfolio</h3>
            {intellectualProperty.length === 0 ? (
              <div className="text-center p-6 border border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500">No intellectual property assets yet</p>
                <p className="text-sm text-gray-400 mt-1">Invest in R&D and file for IP protection</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {intellectualProperty.map((ip, index) => (
                  <motion.div
                    key={index}
                    className="p-3 border rounded-lg bg-white"
                    whileHover={{ y: -3, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-2">
                        {ip.type === "patent" ? "📜" : ip.type === "trademark" ? "™️" : "©️"}
                      </span>
                      <div>
                        <div className="font-medium">{ip.name}</div>
                        <div className="text-xs text-gray-500">
                          {ip.type.charAt(0).toUpperCase() + ip.type.slice(1)} • 
                          Week {ip.weekCreated} •
                          ${ip.value.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          {/* Activity Log */}
          <div className="glass-card bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 shadow-md">
            <h3 className="font-semibold text-lg mb-3">Activity Log</h3>
            {actionHistory.length === 0 ? (
              <p className="text-gray-500 text-center">No activities yet</p>
            ) : (
              <div className="max-h-60 overflow-y-auto">
                {[...actionHistory].reverse().map((activity, index) => (
                  <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Week {activity.week}: </span>
                        <span>{activity.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {activity.cost > 0 && <span className="text-red-500">-${activity.cost.toLocaleString()}</span>}
                        {activity.income > 0 && <span className="text-green-500">+${activity.income.toLocaleString()}</span>}
                      </div>
                    </div>
                    {activity.result && <div className="text-xs text-gray-500">{activity.result}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Game notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className={`fixed bottom-4 right-4 p-3 rounded-lg shadow-lg ${
              notification.type === "success" ? "bg-green-500" : 
              notification.type === "error" ? "bg-red-500" : 
              "bg-yellow-500"
            } text-white max-w-xs`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 overflow-x-hidden p-4 md:p-6">
      {/* Game header with navigation */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex justify-between items-center">
          <Link to="/dashboard" className="text-gray-700 hover:text-gray-900 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
          
          {gameStatus === "playing" && (
            <div className="game-controls flex items-center space-x-3">
              <motion.button
                className="text-gray-700 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => updateState({ showTutorial: true })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Help
              </motion.button>
            </div>
          )}
        </div>
      </div>
      
      {/* Game content */}
      {gameStatus === "intro" && renderIntroScreen()}
      {gameStatus === "playing" && renderGameScreen()}
      {gameStatus === "completed" && renderCompletionScreen()}
      
      {/* Tutorial overlay */}
      <AnimatePresence>
        {showTutorial && gameStatus === "playing" && (
          <motion.div 
            className="tutorial-overlay fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="tutorial-content bg-white rounded-xl p-8 max-w-lg shadow-lg"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">How to Play</h2>
              <div className="space-y-4 mb-6">
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mr-3">1</div>
                  <p>Invest in Research & Development to generate research points</p>
                </div>
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mr-3">2</div>
                  <p>Use research points to create patentable inventions</p>
                </div>
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mr-3">3</div>
                  <p>Protect your ideas with patents, trademarks, and copyrights</p>
                </div>
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mr-3">4</div>
                  <p>License your IP or enforce your rights when needed</p>
                </div>
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mr-3">5</div>
                  <p>Run your business for 20 weeks and aim for the highest score</p>
                </div>
              </div>
              <motion.button
                className="px-6 py-2 bg-green-500 text-white rounded-lg font-bold w-full"
                whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => updateState({ showTutorial: false })}
              >
                Got It!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InnovationTycoon;