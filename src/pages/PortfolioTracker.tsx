import React from 'react';
import { motion } from 'framer-motion';

const PortfolioTracker = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-8">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Portfolio
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Tracker
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Build and manage your professional portfolio with LinkedIn and GitHub integration.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioTracker;