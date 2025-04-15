import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./IPDefender.css";

const IPDefender = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    level: 1,
    score: 0,
    lives: 3,
    money: 100,
    gameStatus: "intro", // intro, playing, paused, won, lost
    selectedDefender: null,
    defenders: [],
    threats: [],
    wave: 1,
    isPaused: false,
    showTutorial: true,
    isLoading: false,
    gameTime: 0,
    saveStatus: null,
    lastSaved: null
  });
  
  // Destructure state for easier access
  const { 
    level, score, lives, money, gameStatus, selectedDefender, 
    defenders, threats, wave, isPaused, showTutorial, 
    isLoading, gameTime
  } = state;
  
  // Get current user ID
  const userId = localStorage.getItem('userId') || 'guest';
  
  // Define grid dimensions
  const GRID_WIDTH = 10;
  const GRID_HEIGHT = 8;
  
  // Game levels data
  const levels = [
    {
      id: 1,
      title: "Patent Protection",
      description: "Defend your patents from infringers by strategically placing legal protections",
      background: "from-blue-100 to-blue-50",
      assetType: "Patent",
      assetIcon: "📜",
      availableDefenders: ["patent-attorney", "cease-and-desist", "patent-wall"],
      waves: 3,
      tutorial: [
        "Welcome to IP Defender! Your mission is to protect your valuable patents.",
        "Drag defenders from the sidebar and place them on the grid to stop infringers.",
        "Patent attorneys can spot infringements early, cease-and-desist letters slow down infringers, and patent walls block pathways.",
        "Let's protect your innovations!"
      ]
    },
    {
      id: 2,
      title: "Trademark Shield",
      description: "Protect your brand identity from counterfeiters and trademark trolls",
      background: "from-purple-100 to-purple-50",
      assetType: "Trademark",
      assetIcon: "™️",
      availableDefenders: ["trademark-monitor", "legal-team", "registration-barrier"],
      waves: 4,
      tutorial: [
        "Your trademarks need protection! Counterfeiters are trying to steal your brand identity.",
        "Trademark monitors detect unauthorized uses, legal teams send enforcement notices, and registration barriers protect unregistered marks.",
        "Protect your brand reputation by stopping these threats!"
      ]
    },
    {
      id: 3,
      title: "Copyright Defense",
      description: "Guard your creative works against unauthorized copying and distribution",
      background: "from-green-100 to-green-50",
      assetType: "Copyright",
      assetIcon: "©️",
      availableDefenders: ["dmca-notice", "watermark", "copyright-registry"],
      waves: 5,
      tutorial: [
        "Your creative works are being copied without permission!",
        "DMCA notices can take down infringing content, watermarks help identify your works, and copyright registry provides legal evidence of ownership.",
        "Stop the pirates from stealing your creative content!"
      ]
    }
  ];
  
  // Defender types with their properties
  const defenderTypes = {
    "patent-attorney": { name: "Patent Attorney", cost: 50, range: 3, power: 15, cooldown: 3, description: "Specialists in patent law who can identify infringement early", icon: "👨‍⚖️" },
    "cease-and-desist": { name: "Cease & Desist", cost: 30, range: 2, power: 10, cooldown: 1, description: "Legal letters demanding infringers stop their activities", icon: "📝" },
    "patent-wall": { name: "Patent Wall", cost: 100, range: 1, power: 30, cooldown: 5, description: "A strong portfolio of related patents that blocks competition", icon: "🧱" },
    "trademark-monitor": { name: "Trademark Monitor", cost: 40, range: 4, power: 10, cooldown: 2, description: "Scanning services that detect unauthorized trademark usage", icon: "🔍" },
    "legal-team": { name: "Legal Team", cost: 80, range: 3, power: 25, cooldown: 4, description: "IP lawyers specialized in trademark enforcement", icon: "👥" },
    "registration-barrier": { name: "Registration Barrier", cost: 60, range: 2, power: 20, cooldown: 3, description: "Formal trademark registration that provides legal protection", icon: "🛡️" },
    "dmca-notice": { name: "DMCA Notice", cost: 25, range: 3, power: 15, cooldown: 1, description: "Legal notices demanding removal of infringing content", icon: "📨" },
    "watermark": { name: "Watermark", cost: 15, range: 2, power: 5, cooldown: 1, description: "Visual or digital markers that help identify copied works", icon: "💧" },
    "copyright-registry": { name: "Copyright Registry", cost: 70, range: 3, power: 20, cooldown: 4, description: "Official registration that provides enhanced legal protection", icon: "📚" }
  };
  
  // Threat types
  const threatTypes = {
    "infringer": { name: "Infringer", health: 50, speed: 1, damage: 1, reward: 20, description: "Companies or individuals using your IP without permission", icon: "🦹‍♂️" },
    "copier": { name: "Copier", health: 30, speed: 2, damage: 1, reward: 15, description: "Fast-moving entities creating similar versions of your IP", icon: "📠" },
    "troll": { name: "IP Troll", health: 100, speed: 0.5, damage: 2, reward: 40, description: "Entities that acquire IP to file predatory lawsuits", icon: "👹" }
  };
  
  // Current level data
  const currentLevelData = levels[level - 1];
  
  // Grid state - represents what's placed where
  const [grid, setGrid] = useState(Array(GRID_HEIGHT).fill().map(() => Array(GRID_WIDTH).fill(null)));
  
  // Asset position - what the threats are trying to reach
  const assetPosition = { x: Math.floor(GRID_WIDTH / 2), y: Math.floor(GRID_HEIGHT / 2) };
  
  // Helper function to update specific state properties
  const updateState = useCallback((newState) => {
    setState(prevState => ({ ...prevState, ...newState }));
  }, []);
  
  // Game loop
  useEffect(() => {
    if (gameStatus !== "playing" || isPaused) return;
    
    const gameLoop = setInterval(() => {
      updateState({ gameTime: gameTime + 1 });
      
      // Move threats and handle attacks in one pass
      const updatedThreats = [...threats];
      const updatedDefenders = defenders.map(defender => {
        // Handle defender cooldown
        if (defender.cooldownRemaining > 0) {
          return { ...defender, cooldownRemaining: defender.cooldownRemaining - 1 };
        }
        
        // Find threats in range
        const threatsInRange = updatedThreats.filter(threat => {
          const distance = Math.sqrt(
            Math.pow(defender.position.x - threat.position.x, 2) + 
            Math.pow(defender.position.y - threat.position.y, 2)
          );
          return distance <= defenderTypes[defender.type].range && threat.health > 0;
        });
        
        // Attack the first threat in range
        if (threatsInRange.length > 0) {
          const targetThreat = threatsInRange[0];
          const threatIndex = updatedThreats.findIndex(t => t.id === targetThreat.id);
          
          if (threatIndex >= 0) {
            // Apply damage
            updatedThreats[threatIndex].health -= defenderTypes[defender.type].power;
            
            // Check if threat defeated
            if (updatedThreats[threatIndex].health <= 0) {
              updateState({
                money: money + threatTypes[targetThreat.type].reward,
                score: score + threatTypes[targetThreat.type].reward
              });
              // Mark for removal
              updatedThreats[threatIndex].defeated = true;
            }
          }
          
          // Reset cooldown
          return { ...defender, cooldownRemaining: defenderTypes[defender.type].cooldown };
        }
        
        return defender;
      });
      
      // Update threat positions and remove defeated threats
      const newThreats = updatedThreats.filter(threat => !threat.defeated).map(threat => {
        // Calculate movement toward asset
        const dx = assetPosition.x - threat.position.x;
        const dy = assetPosition.y - threat.position.y;
        const angle = Math.atan2(dy, dx);
        
        const newX = threat.position.x + Math.cos(angle) * threatTypes[threat.type].speed * 0.1;
        const newY = threat.position.y + Math.sin(angle) * threatTypes[threat.type].speed * 0.1;
        
        // Check if reached asset
        const distanceToAsset = Math.sqrt(
          Math.pow(assetPosition.x - newX, 2) + 
          Math.pow(assetPosition.y - newY, 2)
        );
        
        if (distanceToAsset < 0.5) {
          // Damage the asset/player
          updateState({ lives: Math.max(0, lives - threatTypes[threat.type].damage) });
          return null; // Remove threat
        }
        
        return {
          ...threat,
          position: { x: newX, y: newY }
        };
      }).filter(Boolean); // Remove nulls
      
      // Generate new threats based on wave and time
      if (gameTime % 30 === 0 && newThreats.length < 5 + wave * 2) {
        const threatType = Object.keys(threatTypes)[Math.floor(Math.random() * Object.keys(threatTypes).length)];
        const edgeSide = Math.floor(Math.random() * 4);
        let position;
        
        // Spawn from a random edge but make sure coordinates are valid
        switch (edgeSide) {
          case 0: // Top
            position = { x: Math.floor(Math.random() * GRID_WIDTH), y: 0 };
            break;
          case 1: // Right
            position = { x: GRID_WIDTH - 1, y: Math.floor(Math.random() * GRID_HEIGHT) };
            break;
          case 2: // Bottom
            position = { x: Math.floor(Math.random() * GRID_WIDTH), y: GRID_HEIGHT - 1 };
            break;
          case 3: // Left
            position = { x: 0, y: Math.floor(Math.random() * GRID_HEIGHT) };
            break;
          default:
            position = { x: 0, y: 0 };
        }
        
        newThreats.push({
          id: Date.now(),
          type: threatType,
          health: threatTypes[threatType].health,
          position
        });
      }
      
      // Check wave completion and level status
      if (gameTime % 300 === 0 && newThreats.length === 0) {
        if (wave < currentLevelData.waves) {
          updateState({ 
            wave: wave + 1,
            money: money + 50 // Bonus for completing wave
          });
        } else {
          // Level completed
          updateState({ gameStatus: "won" });
          saveGameProgress();
        }
      }
      
      // Check game over
      if (lives <= 0) {
        updateState({ gameStatus: "lost" });
      }
      
      // Update state with new threats and defenders
      updateState({ threats: newThreats, defenders: updatedDefenders });
      
    }, 100); // 10 FPS
    
    return () => clearInterval(gameLoop);
  }, [gameStatus, isPaused, threats, defenders, wave, lives, gameTime, money, score, updateState]);
  
  // Save game progress
  const saveGameProgress = async () => {
    try {
      updateState({ saveStatus: 'saving', isLoading: true });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      updateState({ 
        saveStatus: 'saved',
        isLoading: false,
        lastSaved: new Date()
      });
      
      // Reset status after 3 seconds
      setTimeout(() => updateState({ saveStatus: null }), 3000);
    } catch (error) {
      console.error('Error saving progress:', error);
      updateState({ saveStatus: 'error', isLoading: false });
    }
  };
  
  // Place defender on grid
  const handleCellClick = (rowIndex, colIndex) => {
    if (gameStatus !== "playing" || !selectedDefender) return;
    
    // Check if cell is empty and we have enough money
    if (grid[rowIndex][colIndex] !== null || defenderTypes[selectedDefender].cost > money) return;
    
    // Update grid
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = selectedDefender;
    setGrid(newGrid);
    
    // Update state
    updateState({
      money: money - defenderTypes[selectedDefender].cost,
      selectedDefender: null,
      defenders: [
        ...defenders,
        {
          id: Date.now(),
          type: selectedDefender,
          position: { x: colIndex, y: rowIndex },
          cooldownRemaining: 0
        }
      ]
    });
  };
  
  // Game state management functions
  const gameActions = {
    start: () => updateState({ gameStatus: "playing", showTutorial: true }),
    reset: () => {
      setGrid(Array(GRID_HEIGHT).fill().map(() => Array(GRID_WIDTH).fill(null)));
      updateState({
        defenders: [],
        threats: [],
        wave: 1,
        lives: 3,
        money: 100,
        gameTime: 0,
        gameStatus: "intro"
      });
    },
    nextLevel: () => {
      if (level < levels.length) {
        updateState({ level: level + 1 });
        gameActions.reset();
      } else {
        navigate('/dashboard', { state: { message: 'Congratulations! You have completed IP Defender!' } });
      }
    }
  };
  
  // Render game grid with threats
  const renderGrid = () => (
    <div className="grid-container bg-white bg-opacity-30 rounded-lg p-2 shadow-inner relative">
      {/* Grid cells */}
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <motion.div
              key={`${rowIndex}-${colIndex}`}
              className={`cell w-12 h-12 m-0.5 rounded-md flex items-center justify-center cursor-pointer border border-gray-200 ${
                cell ? 'bg-white bg-opacity-80' : 'bg-white bg-opacity-40 hover:bg-opacity-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-2xl">
                  {defenderTypes[cell].icon}
                </motion.div>
              )}
              
              {/* Show asset in the middle */}
              {rowIndex === assetPosition.y && colIndex === assetPosition.x && !cell && (
                <motion.div
                  className="text-3xl"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {currentLevelData.assetIcon}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      ))}
      
      {/* Threats - positioned relative to the grid */}
      {threats.map(threat => {
        // Calculate cell size (3.5rem = 14 * 0.25rem) to match cell size including margins
        const cellSize = 14; // 12 (width/height class) + 2 (margins)
        
        // Calculate exact position within the grid
        const leftPos = `calc(${threat.position.x} * ${cellSize}px + 8px)`; // 8px for grid padding
        const topPos = `calc(${threat.position.y} * ${cellSize}px + 8px)`; // 8px for grid padding
        
        return (
          <motion.div
            key={threat.id}
            className="threat absolute text-2xl"
            style={{ left: leftPos, top: topPos, zIndex: 50 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {threatTypes[threat.type].icon}
            
            {/* Health bar */}
            <div className="w-10 h-1 bg-gray-200 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-red-500" 
                style={{ width: `${(threat.health / threatTypes[threat.type].health) * 100}%` }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
  
  // Render panels and screens - condensed
  const renderDefenderPanel = () => (
    <div className="defender-panel bg-white bg-opacity-80 rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-bold mb-3">Defenders</h3>
      <div className="grid grid-cols-1 gap-2">
        {currentLevelData.availableDefenders.map(defenderType => {
          const canAfford = defenderTypes[defenderType].cost <= money;
          return (
            <motion.div
              key={defenderType}
              className={`defender-option p-3 rounded-lg border ${
                selectedDefender === defenderType ? 'bg-yellow-100 border-yellow-400' : 'bg-white border-gray-200'
              } ${canAfford ? 'cursor-pointer hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'}`}
              whileHover={{ scale: canAfford ? 1.03 : 1 }}
              whileTap={{ scale: canAfford ? 0.97 : 1 }}
              onClick={() => canAfford && updateState({ 
                selectedDefender: defenderType === selectedDefender ? null : defenderType 
              })}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{defenderTypes[defenderType].icon}</span>
                <div>
                  <div className="font-medium">{defenderTypes[defenderType].name}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <span className="mr-1">💰</span>{defenderTypes[defenderType].cost}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Range: {defenderTypes[defenderType].range}</span>
                  <span>Power: {defenderTypes[defenderType].power}</span>
                </div>
                <p className="mt-1">{defenderTypes[defenderType].description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
  
  const renderThreatPanel = () => (
    <div className="threat-panel bg-white bg-opacity-80 rounded-lg p-4 shadow-md mt-4">
      <h3 className="text-lg font-bold mb-3">Incoming Threats</h3>
      <div className="space-y-2">
        {Object.keys(threatTypes).map(threatType => (
          <div key={threatType} className="flex items-center p-2 rounded-lg border border-gray-200">
            <span className="text-2xl mr-3">{threatTypes[threatType].icon}</span>
            <div>
              <div className="font-medium">{threatTypes[threatType].name}</div>
              <div className="text-xs text-gray-600 mt-1">
                Health: {threatTypes[threatType].health} • 
                Speed: {threatTypes[threatType].speed} • 
                Damage: {threatTypes[threatType].damage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Game screens - condensed
  const renderIntroScreen = () => (
    <motion.div 
      className="intro-screen bg-white bg-opacity-90 rounded-xl p-8 text-center max-w-2xl mx-auto shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-5xl mb-6 mx-auto w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {currentLevelData.assetIcon}
      </motion.div>
      <h2 className="text-3xl font-bold mb-3">{currentLevelData.title}</h2>
      <p className="text-gray-600 mb-6">{currentLevelData.description}</p>
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 text-left">
        <h3 className="font-semibold mb-2">Mission:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Protect your {currentLevelData.assetType.toLowerCase()} from infringers and threats</li>
          <li>Place defenders strategically on the grid</li>
          <li>Survive {currentLevelData.waves} waves of attacks</li>
          <li>Earn money by defeating threats to buy more defenders</li>
        </ul>
      </div>
      <motion.button
        className="px-8 py-3 bg-yellow-400 text-white rounded-lg font-bold"
        whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
        whileTap={{ scale: 0.95 }}
        onClick={gameActions.start}
      >
        Start Defense
      </motion.button>
    </motion.div>
  );
  
  const renderResultScreen = (isWin) => (
    <motion.div 
      className={`${isWin ? 'won' : 'lost'}-screen bg-white bg-opacity-90 rounded-xl p-8 text-center max-w-2xl mx-auto shadow-lg`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-6xl mb-6"
        animate={{ 
          scale: isWin ? [1, 1.5, 1] : 1,
          rotate: [0, 10, 0, -10, 0]
        }}
        transition={{ duration: isWin ? 2 : 3, repeat: Infinity }}
      >
        {isWin ? '🏆' : '😔'}
      </motion.div>
      <h2 className="text-3xl font-bold mb-3">{isWin ? 'Level Complete!' : 'Defense Failed'}</h2>
      <p className="text-xl text-gray-600 mb-4">
        {isWin 
          ? `You successfully protected your ${currentLevelData.assetType.toLowerCase()}!` 
          : `Your ${currentLevelData.assetType.toLowerCase()} was compromised!`}
      </p>
      <div className={`stats bg-${isWin ? 'yellow' : 'red'}-50 p-4 rounded-lg mb-6`}>
        <div className={`grid grid-cols-${isWin ? '3' : '2'} gap-4`}>
          <div className="stat-item">
            <div className="text-lg font-semibold">{score}</div>
            <div className="text-sm text-gray-500">Points</div>
          </div>
          <div className="stat-item">
            <div className="text-lg font-semibold">{isWin ? lives : wave}</div>
            <div className="text-sm text-gray-500">{isWin ? 'Lives Left' : 'Wave Reached'}</div>
          </div>
          {isWin && (
            <div className="stat-item">
              <div className="text-lg font-semibold">{Math.floor(gameTime / 10)}</div>
              <div className="text-sm text-gray-500">Seconds</div>
            </div>
          )}
        </div>
      </div>
      <div className={`bg-${isWin ? 'green' : 'blue'}-50 p-4 rounded-lg mb-6`}>
        <h3 className="font-semibold mb-2">{isWin ? 'Knowledge Gained:' : 'Lesson Learned:'}</h3>
        <p className="text-sm text-gray-600">
          {level === 1 && (isWin 
            ? "You've learned how to protect patents through legal action and strategic portfolio development."
            : "Patents require vigilant defense through strategic placement of legal resources. Consider focusing on high-traffic areas first."
          )}
          {level === 2 && (isWin 
            ? "You've mastered trademark protection strategies to safeguard your brand identity."
            : "Trademark protection is most effective when you can identify and stop counterfeiters early. Monitor your perimeter carefully."
          )}
          {level === 3 && (isWin 
            ? "You now understand how to defend copyrighted works from unauthorized use and distribution."
            : "Copyright infringement happens quickly. Focus on placing deterrents in multiple locations to catch copying before it spreads."
          )}
        </p>
      </div>
      {isWin ? (
        level < levels.length ? (
          <motion.button
            className="px-8 py-3 bg-yellow-400 text-white rounded-lg font-bold"
            whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
            whileTap={{ scale: 0.95 }}
            onClick={gameActions.nextLevel}
          >
            Next Level
          </motion.button>
        ) : (
          <motion.button
            className="px-8 py-3 bg-green-500 text-white rounded-lg font-bold"
            whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard', { state: { message: 'Congratulations! You have completed IP Defender!' } })}
          >
            Complete Game
          </motion.button>
        )
      ) : (
        <div className="flex justify-center space-x-4">
          <motion.button
            className="px-6 py-3 bg-yellow-400 text-white rounded-lg font-bold"
            whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
            whileTap={{ scale: 0.95 }}
            onClick={gameActions.reset}
          >
            Try Again
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold"
            whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </motion.button>
        </div>
      )}
    </motion.div>
  );
  
  // Tutorial overlay
  const renderTutorial = () => (
    <AnimatePresence>
      {showTutorial && (
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
              {currentLevelData.tutorial.map((step, index) => (
                <div key={index} className="flex">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 mr-3">
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <motion.button
              className="px-6 py-2 bg-yellow-400 text-white rounded-lg font-bold w-full"
              whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => updateState({ showTutorial: false })}
            >
              Got It!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  
  // Loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Loading game...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentLevelData.background} overflow-x-hidden p-4 md:p-6`}>
      {gameStatus === "intro" && renderIntroScreen()}
      {gameStatus === "won" && renderResultScreen(true)}
      {gameStatus === "lost" && renderResultScreen(false)}
      
      {gameStatus === "playing" && (
        <>
          {/* Game header with navigation */}
          <div className="max-w-6xl mx-auto mb-4">
            <div className="flex justify-between items-center">
              <Link to="/dashboard" className="text-gray-700 hover:text-gray-900 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Dashboard
              </Link>
              
              <div className="flex space-x-4">
                <motion.button
                  onClick={() => updateState({ showTutorial: true })}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-80"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Tutorial</span>
                </motion.button>
                
                <motion.button
                  onClick={() => updateState({ isPaused: !isPaused })}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-80"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPaused ? "Resume" : "Pause"}
                </motion.button>
              </div>
            </div>
          </div>
          
          {/* Game status bar */}
          <div className="max-w-6xl mx-auto mb-6">
            <div className="game-status-bar flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-2 px-4 shadow-md">
              <div className="flex space-x-6">
                <div className="stat-item flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  <span className="font-semibold">{money}</span>
                </div>
                <div className="stat-item flex items-center">
                  <span className="text-xl mr-2">❤️</span>
                  <span className="font-semibold">{lives}</span>
                </div>
                <div className="stat-item flex items-center">
                  <span className="text-xl mr-2">🏆</span>
                  <span className="font-semibold">{score}</span>
                </div>
              </div>
              <div className="wave-indicator">
                <span className="text-sm text-gray-600 mr-2">Wave:</span>
                <span className="font-semibold">{wave}/{currentLevelData.waves}</span>
              </div>
            </div>
          </div>
          
          {/* Game content */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">{renderGrid()}</div>
              <div className="w-full md:w-64 shrink-0">
                {renderDefenderPanel()}
                {renderThreatPanel()}
              </div>
            </div>
          </div>
          
          {/* Tutorial overlay */}
          {renderTutorial()}
          
          {/* Pause overlay */}
          <AnimatePresence>
            {isPaused && (
              <motion.div 
                className="pause-overlay fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className="bg-white rounded-xl p-8 max-w-md text-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                >
                  <h2 className="text-3xl font-bold mb-4">Game Paused</h2>
                  <p className="mb-6 text-gray-600">Take a moment to think about your strategy!</p>
                  <div className="flex space-x-4 justify-center">
                    <motion.button
                      className="px-6 py-2 bg-yellow-400 text-white rounded-lg font-bold"
                      whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateState({ isPaused: false })}
                    >
                      Resume
                    </motion.button>
                    <motion.button
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-bold"
                      whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/dashboard')}
                    >
                      Quit
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default IPDefender;