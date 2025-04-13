import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-200 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to IP Quest Dashboard</h1>

      {/* Game Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/game/ip-quest"
          className="bg-white border-2 border-black rounded-lg p-6 shadow-lg hover:bg-yellow-300 transition"
        >
          <h2 className="text-2xl font-bold mb-2">🎮 IP Quest: The Knowledge Adventure</h2>
          <p>Embark on a storytelling adventure to protect your creations!</p>
        </Link>

        <Link
          to="/game/ip-defender"
          className="bg-white border-2 border-black rounded-lg p-6 shadow-lg hover:bg-yellow-300 transition"
        >
          <h2 className="text-2xl font-bold mb-2">🛡️ IP Defender</h2>
          <p>Defend your ideas by identifying the correct IP types.</p>
        </Link>

        <Link
          to="/game/innovation-tycoon"
          className="bg-white border-2 border-black rounded-lg p-6 shadow-lg hover:bg-yellow-300 transition"
        >
          <h2 className="text-2xl font-bold mb-2">💡 Innovation Tycoon</h2>
          <p>Build your startup and protect your ideas strategically!</p>
        </Link>
      </div>

      {/* Educational Modules */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">📚 Educational Modules</h2>
        <ul className="list-disc pl-6">
          <li>What is Intellectual Property?</li>
          <li>Types of IP: Copyrights, Patents, Trademarks, Trade Secrets</li>
          <li>Why protecting IP is important</li>
          <li>Real-life examples in cartoons, music, inventions, and apps</li>
        </ul>
      </div>

      {/* Reward System */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">🎁 Reward System</h2>
        <p>Earn badges and stars for completing levels and challenges!</p>
      </div>
    </div>
  );
};

export default Dashboard;