// pages/maintenance.tsx (or in the app directory if using the app router)

'use client';  // To ensure that this component is rendered on the client-side in case you need dynamic behaviors (such as animations).

import React from 'react';
import { FiSettings } from 'react-icons/fi';

const MaintenancePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mx-auto my-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <FiSettings className="w-20 h-20 text-blue-500 dark:text-blue-400 animate-spin-slow" />
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Under Maintenance
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-xl max-w-lg mx-auto">
            We're currently updating our systems to bring you an even better experience.
            We'll be back shortly!
          </p>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-3">Need immediate assistance?</p>
            <a 
              href="mailto:support@example.com"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaintenancePage;
