import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const IPQuest = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuest, setCurrentQuest] = useState(0);
  const [showDialog, setShowDialog] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [questCompleted, setQuestCompleted] = useState(false);
  const [completedQuests, setCompletedQuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastSaved, setLastSaved] = useState(null);
  const [saveStatus, setSaveStatus] = useState(null);
  
  // Get current user ID (you should implement proper authentication)
  const userId = localStorage.getItem('userId') || 'guest';
  
  // Game levels data
  const levels = [
    {
      id: 1,
      title: "Patent Pioneers",
      description: "Explore the world of patents and innovation",
      background: "from-blue-100 to-blue-50",
      character: "👨‍🔬",
      quests: [
        {
          id: 1,
          title: "Invention Discovery",
          description: "Help Professor Patent identify patentable inventions",
          dialogues: [
            "Welcome to IPQuest! I'm Professor Patent and I need your help.",
            "Patents protect novel inventions that are useful and non-obvious.",
            "Let's identify which innovations can be patented!"
          ],
          challenge: {
            type: "sorting",
            question: "Drag each innovation to the correct category:",
            items: [
              { id: 1, text: "A new chemical formula for cleaner fuel", category: "patentable" },
              { id: 2, text: "A mathematical equation", category: "not-patentable" },
              { id: 3, text: "A natural plant discovered in the wild", category: "not-patentable" },
              { id: 4, text: "A device that converts ocean waves to electricity", category: "patentable" }
            ],
            categories: ["patentable", "not-patentable"]
          },
          hint: "Remember: patents protect inventions that are new, useful, and non-obvious. Natural discoveries and abstract ideas cannot be patented.",
          reward: {
            points: 50,
            item: "Patent Certificate"
          }
        },
        {
          id: 2,
          title: "Patent Application",
          description: "Draft a patent application for a groundbreaking invention",
          dialogues: [
            "Great job identifying patentable inventions!",
            "Now let's learn how to prepare a basic patent application.",
            "A good patent application needs several key components."
          ],
          challenge: {
            type: "ordering",
            question: "Put these patent application sections in the correct order:",
            items: [
              { id: 1, text: "Title of Invention" },
              { id: 2, text: "Abstract" },
              { id: 3, text: "Background" },
              { id: 4, text: "Detailed Description" },
              { id: 5, text: "Claims" }
            ]
          },
          hint: "Think about how a patent is structured - from the general information to the specific legal claims.",
          reward: {
            points: 75,
            item: "Patent Drafter Badge"
          }
        }
      ]
    },
    {
      id: 2,
      title: "Trademark Territory",
      description: "Navigate the world of trademarks and brand protection",
      background: "from-purple-100 to-purple-50",
      character: "👩‍⚖️",
      quests: [
        {
          id: 1,
          title: "Brand Protection",
          description: "Help businesses protect their brand identities",
          dialogues: [
            "Welcome to Trademark Territory! I'm Judge Trademark.",
            "Trademarks protect brand identities like names, logos, and slogans.",
            "Let's explore what makes a strong, protectable trademark!"
          ],
          challenge: {
            type: "ranking",
            question: "Rank these trademarks from strongest (most distinctive) to weakest:",
            items: [
              { id: 1, text: "KODAK for cameras", strength: 1 },
              { id: 2, text: "APPLE for computers", strength: 2 },
              { id: 3, text: "SPEEDY for delivery services", strength: 3 },
              { id: 4, text: "BEST PIZZA for a pizza restaurant", strength: 4 }
            ]
          },
          hint: "The strongest trademarks are fanciful (made-up words) or arbitrary (common words used for unrelated products).",
          reward: {
            points: 50,
            item: "Trademark Certificate"
          }
        }
      ]
    },
    {
      id: 3,
      title: "Copyright Cove",
      description: "Discover how copyright protects creative works",
      background: "from-green-100 to-green-50",
      character: "👩‍🎨",
      quests: [
        {
          id: 1,
          title: "Creative Rights",
          description: "Understand what works are protected by copyright",
          dialogues: [
            "Welcome to Copyright Cove! I'm Creative Clara.",
            "Copyright automatically protects original works of authorship.",
            "Let's learn about what can and cannot be copyrighted!"
          ],
          challenge: {
            type: "quiz",
            question: "Which of these works can be protected by copyright?",
            options: [
              { id: 1, text: "A novel about space exploration", correct: true },
              { id: 2, text: "The idea for a TV show", correct: false },
              { id: 3, text: "A choreographed dance routine", correct: true },
              { id: 4, text: "A list of ingredients in a recipe", correct: false }
            ],
            multipleCorrect: true
          },
          hint: "Copyright protects original, creative expression that is fixed in a tangible medium, but not ideas or facts.",
          reward: {
            points: 50,
            item: "Copyright Certificate"
          }
        }
      ]
    }
  ];

  // Get current level and quest objects
  const level = levels[currentLevel - 1];
  const quest = level?.quests[currentQuest];
  
  // Load saved progress when component mounts
  useEffect(() => {
    const loadProgress = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/ipquest/backend/load-progress.php?userId=${userId}`);
        const result = await response.json();
        
        if (result.status === 'success' && result.data) {
          setCurrentLevel(result.data.currentLevel);
          setCurrentQuest(result.data.currentQuest);
          setScore(result.data.score);
          setInventory(result.data.inventory);
          setCompletedQuests(result.data.completedQuests);
          setLastSaved(new Date(result.data.lastUpdated));
          
          // If the quest was already completed, show completion screen
          const questKey = `${result.data.currentLevel}-${result.data.currentQuest}`;
          if (result.data.completedQuests.includes(questKey)) {
            setQuestCompleted(true);
            setShowDialog(false);
          }
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProgress();
  }, [userId]);
  
  // Save progress function
  const saveProgress = async () => {
    try {
      setSaveStatus('saving');
      const response = await fetch('/ipquest/backend/save-progress.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          currentLevel,
          currentQuest,
          score,
          inventory,
          completedQuests
        }),
      });
      
      const result = await response.json();
      
      if (result.status === 'success') {
        setSaveStatus('saved');
        setLastSaved(new Date());
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setSaveStatus(null);
        }, 3000);
      } else {
        setSaveStatus('error');
      }
    } catch (error) {
      console.error('Error saving progress:', error);
      setSaveStatus('error');
    }
  };

  // Function to handle challenge completion
  const handleChallengeComplete = useCallback((isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + quest.reward.points);
      setInventory(prevInventory => [...prevInventory, quest.reward.item]);
      setQuestCompleted(true);
      
      // Mark this quest as completed
      const questKey = `${currentLevel}-${currentQuest}`;
      if (!completedQuests.includes(questKey)) {
        setCompletedQuests(prev => [...prev, questKey]);
      }
      
      // Automatically save progress when completing a quest
      setTimeout(() => {
        saveProgress();
      }, 500);
    } else {
      // Optional: Provide feedback for incorrect answers
      alert("That's not quite right. Try again!");
    }
  }, [quest, currentLevel, currentQuest, completedQuests]);

  // Function to go to next quest
  const goToNextQuest = useCallback(() => {
    if (currentQuest < level.quests.length - 1) {
      setCurrentQuest(currentQuest + 1);
    } else if (currentLevel < levels.length) {
      setCurrentLevel(currentLevel + 1);
      setCurrentQuest(0);
    } else {
      // Game completed - redirect to dashboard with success message
      navigate('/dashboard', { state: { message: 'Congratulations! You have completed IPQuest!' } });
      return;
    }
    
    setQuestCompleted(false);
    setShowDialog(true);
    setShowHint(false);
    
    // Save progress when moving to next quest
    setTimeout(() => {
      saveProgress();
    }, 500);
  }, [currentQuest, currentLevel, level?.quests.length, levels.length, navigate]);

  // Show loading spinner while loading progress
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${level?.background || 'from-amber-100 to-amber-50'} overflow-x-hidden p-4 md:p-6`}>
      {/* Game header with navigation */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link to="/dashboard" className="text-gray-700 hover:text-gray-900 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
          
          <div className="flex space-x-4">
            {/* Save button */}
            <motion.button
              onClick={saveProgress}
              disabled={saveStatus === 'saving'}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                saveStatus === 'saved' ? 'bg-green-100 text-green-700' :
                saveStatus === 'error' ? 'bg-red-100 text-red-700' :
                saveStatus === 'saving' ? 'bg-gray-100 text-gray-500' :
                'bg-white bg-opacity-80 text-gray-700 hover:bg-yellow-50'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {saveStatus === 'saved' ? 'Saved ✓' :
               saveStatus === 'error' ? 'Error ✕' :
               saveStatus === 'saving' ? 'Saving...' :
               'Save Progress'}
            </motion.button>
            
            <motion.div 
              className="game-stats px-3 py-1 rounded-full bg-white bg-opacity-80 backdrop-blur-sm shadow-sm"
              whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            >
              <span className="font-medium">Score: {score}</span>
            </motion.div>
            
            <motion.div 
              className="game-stats px-3 py-1 rounded-full bg-white bg-opacity-80 backdrop-blur-sm shadow-sm"
              whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            >
              <span className="font-medium">Level: {currentLevel}</span>
            </motion.div>
          </div>
        </div>
        
        {/* Last saved indicator */}
        {lastSaved && (
          <div className="text-right text-xs text-gray-500 mb-4">
            Last saved: {lastSaved.toLocaleString()}
          </div>
        )}
        
        {/* Game title and level info */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{level?.title}</h1>
          <p className="text-gray-700">{level?.description}</p>
          
          {/* Progress indicator */}
          <div className="mt-4 mx-auto max-w-md">
            <div className="flex justify-between text-sm mb-1">
              <span>Quest {currentQuest + 1} of {level?.quests.length}</span>
              <span>Level {currentLevel} of {levels.length}</span>
            </div>
            <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((currentQuest + (questCompleted ? 1 : 0)) / level?.quests.length) * 100}%` 
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Rest of the component remains the same */}
        {/* ... */}
        
        {/* Main game area */}
        <div className="max-w-4xl mx-auto">
          {/* Quest card */}
          <motion.div 
            className="glass-card bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start mb-4">
              <motion.div 
                className="mr-4 p-4 bg-white rounded-full shadow-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-4xl">{level?.character}</span>
              </motion.div>
              <div>
                <h2 className="text-xl font-bold mb-1">{quest?.title}</h2>
                <p className="text-gray-600">{quest?.description}</p>
              </div>
            </div>
            
            {/* Character dialog */}
            <AnimatePresence>
              {showDialog && (
                <DialogBox 
                  dialogues={quest?.dialogues} 
                  character={level?.character}
                  onComplete={() => setShowDialog(false)}
                />
              )}
            </AnimatePresence>
            
            {/* Challenge area - only shown when dialog is complete */}
            {!showDialog && !questCompleted && (
              <ChallengeArea 
                challenge={quest?.challenge}
                hint={quest?.hint}
                showHint={showHint}
                setShowHint={setShowHint}
                onComplete={handleChallengeComplete}
              />
            )}
            
            {/* Quest completion */}
            {questCompleted && (
              <QuestComplete 
                reward={quest?.reward}
                isLastQuest={currentQuest === level?.quests.length - 1}
                isLastLevel={currentLevel === levels.length}
                onContinue={goToNextQuest}
              />
            )}
          </motion.div>
          
          {/* Inventory section */}
          {inventory.length > 0 && <InventorySection inventory={inventory} />}
          
          {/* Progress overview section */}
          <ProgressOverview 
            completedQuests={completedQuests} 
            levels={levels}
          />
        </div>
      </div>
    </div>
  );
};

// Replace the ProgressOverview component with this simpler version
const ProgressOverview = ({ completedQuests, levels }) => {
  // Calculate overall completion percentage
  const totalQuests = levels.reduce((acc, level) => acc + level.quests.length, 0);
  const completionPercentage = (completedQuests.length / totalQuests) * 100;
  
  return (
    <motion.div
      className="glass-card bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-md mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Your Progress</h2>
      
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Overall Completion</span>
          <span>{Math.round(completionPercentage)}%</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Dialog Box Component
const DialogBox = ({ dialogues, character, onComplete }) => {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  
  const goToNextDialogue = () => {
    if (currentDialogue < dialogues.length - 1) {
      setCurrentDialogue(currentDialogue + 1);
    } else {
      onComplete();
    }
  };
  
  return (
    <motion.div 
      className="bg-white rounded-xl p-4 mb-6 border border-gray-200 shadow-sm"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start">
        <div className="mr-3 text-2xl">{character}</div>
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentDialogue}
              className="mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {dialogues[currentDialogue]}
            </motion.p>
          </AnimatePresence>
          <motion.button
            className="text-sm font-medium text-yellow-600 hover:text-yellow-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNextDialogue}
          >
            {currentDialogue < dialogues.length - 1 ? "Next" : "Start Challenge"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Challenge Area Component
const ChallengeArea = ({ challenge, hint, showHint, setShowHint, onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-3">{challenge.question}</h3>
      
      {/* Different challenge types */}
      {challenge.type === "quiz" && <QuizChallenge challenge={challenge} onComplete={onComplete} />}
      {challenge.type === "sorting" && <SortingChallenge challenge={challenge} onComplete={onComplete} />}
      {challenge.type === "ordering" && <OrderingChallenge challenge={challenge} onComplete={onComplete} />}
      {challenge.type === "ranking" && <RankingChallenge challenge={challenge} onComplete={onComplete} />}
      
      {/* Hint button */}
      <div className="mt-6 text-center">
        <motion.button
          className="px-4 py-2 text-sm text-yellow-600 hover:text-yellow-700 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Hide Hint" : "Show Hint"}
        </motion.button>
        
        <AnimatePresence>
          {showHint && (
            <motion.div
              className="mt-2 p-3 bg-yellow-50 rounded-lg text-sm"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>{hint}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Quest Complete Component
const QuestComplete = ({ reward, isLastQuest, isLastLevel, onContinue }) => {
  return (
    <motion.div
      className="text-center py-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4"
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(255, 182, 65, 0.7)", "0px 0px 0px rgba(0,0,0,0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-4xl">🏆</span>
      </motion.div>
      <h3 className="text-xl font-bold mb-2">Quest Complete!</h3>
      <p className="text-gray-600 mb-4">You've earned {reward.points} points and received a {reward.item}!</p>
      <motion.button
        className="px-6 py-3 bg-yellow-400 text-white rounded-lg font-medium"
        whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
      >
        {!isLastQuest ? "Next Quest" : 
         !isLastLevel ? "Next Level" : "Complete Game"}
      </motion.button>
    </motion.div>
  );
};

// Inventory Section Component
const InventorySection = ({ inventory }) => {
  return (
    <motion.div
      className="glass-card bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Your Inventory</h2>
      <div className="flex flex-wrap gap-3">
        {inventory.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Challenge Components
const QuizChallenge = ({ challenge, onComplete }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const toggleOption = (id) => {
    setSelectedOptions(prev => 
      prev.includes(id) 
        ? prev.filter(optionId => optionId !== id) 
        : [...prev, id]
    );
  };
  
  const checkAnswer = () => {
    const correctOptionIds = challenge.options
      .filter(option => option.correct)
      .map(option => option.id);
    
    const isCorrect = 
      selectedOptions.length === correctOptionIds.length &&
      selectedOptions.every(id => correctOptionIds.includes(id));
    
    onComplete(isCorrect);
  };
  
  return (
    <div>
      <div className="space-y-3 mb-6">
        {challenge.options.map(option => (
          <motion.div
            key={option.id}
            className={`p-3 rounded-lg border cursor-pointer ${
              selectedOptions.includes(option.id) 
                ? "bg-blue-50 border-blue-300" 
                : "bg-white border-gray-200"
            }`}
            whileHover={{ scale: 1.02, backgroundColor: selectedOptions.includes(option.id) ? "" : "#f9fafb" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleOption(option.id)}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded ${
                challenge.multipleCorrect ? "border" : "rounded-full"
              } mr-3 flex items-center justify-center ${
                selectedOptions.includes(option.id) 
                  ? "bg-yellow-500 border-yellow-500" 
                  : "border-gray-300"
              }`}>
                {selectedOptions.includes(option.id) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-white"
                  >
                    {challenge.multipleCorrect ? "✓" : "●"}
                  </motion.div>
                )}
              </div>
              <span>{option.text}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <PrimaryButton onClick={checkAnswer} text="Submit Answer" />
    </div>
  );
};

const SortingChallenge = ({ challenge, onComplete }) => {
  const [categorizedItems, setCategorizedItems] = useState({});
  const [remainingItems, setRemainingItems] = useState(challenge.items);
  
  const moveToCategory = (itemId, category) => {
    const item = remainingItems.find(item => item.id === itemId) || 
                 Object.values(categorizedItems).flat().find(item => item.id === itemId);
    
    if (!item) return;
    
    // Remove from current location
    setRemainingItems(prev => prev.filter(i => i.id !== itemId));
    
    // Remove from any category it might be in
    const newCategorizedItems = { ...categorizedItems };
    challenge.categories.forEach(cat => {
      if (newCategorizedItems[cat]) {
        newCategorizedItems[cat] = newCategorizedItems[cat].filter(i => i.id !== itemId);
      }
    });
    
    // Add to new category
    newCategorizedItems[category] = [...(newCategorizedItems[category] || []), item];
    setCategorizedItems(newCategorizedItems);
  };
  
  const moveToRemaining = (itemId) => {
    // Find the item in any category
    let item;
    for (const category of challenge.categories) {
      if (categorizedItems[category]) {
        item = categorizedItems[category].find(i => i.id === itemId);
        if (item) break;
      }
    }
    
    if (!item) return;
    
    // Remove from current category and add to remaining
    const newCategorizedItems = { ...categorizedItems };
    for (const category of challenge.categories) {
      if (newCategorizedItems[category]) {
        newCategorizedItems[category] = newCategorizedItems[category].filter(i => i.id !== itemId);
      }
    }
    setCategorizedItems(newCategorizedItems);
    setRemainingItems(prev => [...prev, item]);
  };
  
  const checkAnswer = () => {
    // Check if all items are categorized correctly
    const isCorrect = challenge.items.every(item => {
      const categoryItems = categorizedItems[item.category] || [];
      return categoryItems.some(i => i.id === item.id);
    });
    
    onComplete(isCorrect);
  };
  
  const allItemsCategorized = Object.values(categorizedItems).flat().length === challenge.items.length;
  
  return (
    <div>
      {/* Items to be sorted */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Items to Sort:</h4>
        <div className="flex flex-wrap gap-2">
          {remainingItems.map(item => (
            <SortableItem 
              key={item.id}
              item={item}
              categories={challenge.categories}
              onMove={moveToCategory}
            />
          ))}
        </div>
      </div>
      
      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {challenge.categories.map(category => (
          <CategoryBox 
            key={category}
            category={category}
            items={categorizedItems[category] || []}
            onRemove={moveToRemaining}
          />
        ))}
      </div>
      
      <PrimaryButton 
        onClick={checkAnswer} 
        text="Check Answer"
        disabled={!allItemsCategorized}
      />
    </div>
  );
};

const SortableItem = ({ item, categories, onMove }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm cursor-move"
    whileHover={{ scale: 1.05, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
    whileTap={{ scale: 0.95 }}
  >
    <p>{item.text}</p>
    <div className="mt-2 flex gap-2">
      {categories.map(category => (
        <motion.button
          key={category}
          className="px-2 py-1 text-xs bg-yellow-50 text-yellow-600 rounded-md"
          whileHover={{ scale: 1.05, backgroundColor: "#fef3c7" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onMove(item.id, category)}
        >
          Move to {category.replace('-', ' ')}
        </motion.button>
      ))}
    </div>
  </motion.div>
);

const CategoryBox = ({ category, items, onRemove }) => (
  <div className="border border-dashed border-gray-300 rounded-lg p-4">
    <h4 className="font-medium mb-3 capitalize">{category.replace('-', ' ')}</h4>
    <div className="min-h-32 space-y-2">
      {items.map(item => (
        <motion.div
          key={item.id}
          className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
        >
          <p>{item.text}</p>
          <motion.button
            className="mt-2 px-2 py-1 text-xs bg-red-50 text-red-600 rounded-md"
            whileHover={{ scale: 1.05, backgroundColor: "#fee2e2" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onRemove(item.id)}
          >
            Remove
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>
);

const OrderingChallenge = ({ challenge, onComplete }) => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [remainingItems, setRemainingItems] = useState([...challenge.items].sort(() => Math.random() - 0.5));
  
  const addToOrder = (item) => {
    setOrderedItems(prev => [...prev, item]);
    setRemainingItems(prev => prev.filter(i => i.id !== item.id));
  };
  
  const removeFromOrder = (index) => {
    const item = orderedItems[index];
    setOrderedItems(prev => prev.filter((_, i) => i !== index));
    setRemainingItems(prev => [...prev, item]);
  };
  
  const checkAnswer = () => {
    // Check if items are in correct order
    const isCorrect = orderedItems.every((item, index) => item.id === challenge.items[index].id);
    onComplete(isCorrect);
  };
  
  return (
    <div>
      {/* Ordered sequence */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Current Order:</h4>
        <div className="border border-dashed border-gray-300 rounded-lg p-4 min-h-32">
          {orderedItems.length === 0 ? (
            <p className="text-gray-400 text-center">Click items below to add them in order</p>
          ) : (
            <div className="space-y-2">
              {orderedItems.map((item, index) => (
                <OrderedItem 
                  key={`ordered-${item.id}`} 
                  item={item} 
                  index={index} 
                  onRemove={removeFromOrder} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Available items */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Available Items:</h4>
        <div className="flex flex-wrap gap-2">
          {remainingItems.map(item => (
            <AvailableItem 
              key={`remaining-${item.id}`} 
              item={item} 
              onSelect={addToOrder} 
            />
          ))}
        </div>
      </div>
      
      <PrimaryButton 
        onClick={checkAnswer} 
        text="Check Order"
        disabled={orderedItems.length !== challenge.items.length}
      />
    </div>
  );
};

const OrderedItem = ({ item, index, onRemove }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex justify-between items-center"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
  >
    <div className="flex items-center">
      <span className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-3">
        {index + 1}
      </span>
      <p>{item.text}</p>
    </div>
    <motion.button
      className="text-red-500"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onRemove(index)}
    >
      ✕
    </motion.button>
  </motion.div>
);

const AvailableItem = ({ item, onSelect }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm cursor-pointer"
    whileHover={{ scale: 1.05, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onSelect(item)}
  >
    <p>{item.text}</p>
  </motion.div>
);

const RankingChallenge = ({ challenge, onComplete }) => {
  const [rankedItems, setRankedItems] = useState([]);
  const [remainingItems, setRemainingItems] = useState([...challenge.items].sort(() => Math.random() - 0.5));
  
  const addToRanking = (item) => {
    setRankedItems(prev => [...prev, item]);
    setRemainingItems(prev => prev.filter(i => i.id !== item.id));
  };
  
  const removeFromRanking = (index) => {
    const item = rankedItems[index];
    setRankedItems(prev => prev.filter((_, i) => i !== index));
    setRemainingItems(prev => [...prev, item]);
  };
  
  const checkAnswer = () => {
    // Check if items are ranked correctly by their strength property
    const sortedItems = [...challenge.items].sort((a, b) => a.strength - b.strength);
    const isCorrect = rankedItems.every((item, index) => item.id === sortedItems[index].id);
    onComplete(isCorrect);
  };
  
  return (
    <div>
      {/* Ranked items */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Current Ranking (strongest to weakest):</h4>
        <div className="border border-dashed border-gray-300 rounded-lg p-4 min-h-32">
          {rankedItems.length === 0 ? (
            <p className="text-gray-400 text-center">Click items below to rank them</p>
          ) : (
            <div className="space-y-2">
              {rankedItems.map((item, index) => (
                <OrderedItem 
                  key={`ranked-${item.id}`} 
                  item={item} 
                  index={index} 
                  onRemove={removeFromRanking} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Available items */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Available Items:</h4>
        <div className="flex flex-wrap gap-2">
          {remainingItems.map(item => (
            <AvailableItem 
              key={`available-${item.id}`} 
              item={item} 
              onSelect={addToRanking} 
            />
          ))}
        </div>
      </div>
      
      <PrimaryButton 
        onClick={checkAnswer} 
        text="Check Ranking"
        disabled={rankedItems.length !== challenge.items.length}
      />
    </div>
  );
};

// Shared UI Components
const PrimaryButton = ({ onClick, text, disabled = false }) => (
  <motion.button
    className={`px-6 py-3 rounded-lg font-medium w-full ${
      disabled 
        ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
        : "bg-yellow-500 text-white hover:bg-yellow-600"
    }`}
    whileHover={!disabled ? { scale: 1.03 } : {}}
    whileTap={!disabled ? { scale: 0.97 } : {}}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </motion.button>
);

export default IPQuest;