import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-amber-50 to-white">
      {/* Animated background elements */}
      <div className="animated-blob-1"></div>
      <div className="animated-blob-2"></div>
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Dashboard
        </Link>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: April 15, 2025</p>
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us when you create an account, including your name, email address, and password.</p>
          <p className="mb-4">We also collect information about your usage of the platform, including your progress, completed activities, and earned achievements.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Track your progress and personalize your learning experience</li>
            <li>Communicate with you about updates, new features, and educational content</li>
            <li>Respond to your comments, questions, and requests</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <p className="mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.</p>
          <p className="mb-4">However, no security system is impenetrable, and we cannot guarantee the security of our systems.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
          <p className="mb-4">We use cookies to collect information about your browsing activities to provide a better user experience, including personalized content and tailored advertisements.</p>
          <p className="mb-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please <Link to="/contactpage" className="text-yellow-600 hover:underline">contact us</Link>.</p>
        </section>
      </motion.div>
      
      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-8 text-center text-gray-600">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/terms" className="hover:text-yellow-600 hover:underline">Terms of Service</Link>
          <span className="text-gray-400">|</span>
          <Link to="/contactpage" className="hover:text-yellow-600 hover:underline">Contact Us</Link>
        </div>
        <p>© 2025 IPQuest - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Privacy;