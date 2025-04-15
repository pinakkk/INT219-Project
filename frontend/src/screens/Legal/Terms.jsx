import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Dashboard
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 mb-8"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>
          <p className="text-gray-600 mb-6 text-center">Last Updated: April 15, 2025</p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-gray-700 mb-3">Welcome to IPQuest! These Terms of Service ("Terms") govern your use of the IPQuest platform, including our website, services, and educational content (collectively, the "Service").</p>
              <p className="text-gray-700">By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Educational Purpose</h2>
              <p className="text-gray-700 mb-3">IPQuest is an educational platform designed to provide information about intellectual property concepts. The content provided is for educational purposes only and should not be construed as legal advice.</p>
              <p className="text-gray-700">Users should consult with qualified legal professionals for advice specific to their situation regarding intellectual property matters.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
              <p className="text-gray-700 mb-3">When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
              <p className="text-gray-700">You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-3">The Service and its original content, features, and functionality are and will remain the exclusive property of IPQuest and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
              <p className="text-gray-700">Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of IPQuest.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. User Content</h2>
              <p className="text-gray-700 mb-3">You retain any and all of your rights to any content you submit, post, or display on or through the Service ("User Content"). By posting User Content, you grant us a non-exclusive, perpetual, irrevocable, royalty-free, worldwide license to use, modify, publicly perform, publicly display, reproduce, and distribute such content.</p>
              <p className="text-gray-700">You represent and warrant that: (i) the User Content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
              <p className="text-gray-700 mb-3">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              <p className="text-gray-700">Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
              <p className="text-gray-700">In no event shall IPQuest, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Changes</h2>
              <p className="text-gray-700">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
              <p className="text-gray-700">If you have any questions about these Terms, please contact us through our Contact page.</p>
            </section>
          </div>
        </motion.div>
        
        <div className="text-center mb-8">
          <div className="flex justify-center gap-4 mb-4">
            <Link to="/privacy" className="text-yellow-600 hover:underline">Privacy Policy</Link>
            <Link to="/contact" className="text-yellow-600 hover:underline">Contact Us</Link>
          </div>
          <p className="text-gray-600">© 2025 IPQuest - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;