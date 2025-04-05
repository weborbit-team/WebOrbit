// pages/maintenance.tsx (or in the app directory if using the app router)

'use client';  // To ensure that this component is rendered on the client-side in case you need dynamic behaviors (such as animations).

import React from 'react';
import { FiSettings, FiCode, FiServer } from 'react-icons/fi';

const MaintenancePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-light-dark)] to-[var(--color-dark)] flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[var(--color-deep-blue)] rounded-full blur-[160px] opacity-20 -top-48 -left-24 animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-[var(--color-purple)] rounded-full blur-[140px] opacity-20 -bottom-32 -right-16 animate-pulse-slow" />
      </div>

      <div className="relative max-w-2xl w-full backdrop-blur-lg bg-white/5 dark:bg-gray-900/20 rounded-3xl shadow-2xl p-12 mx-auto border border-white/10">
        {/* Floating icons */}
        <div className="absolute -top-6 -left-6 p-4 bg-gradient-to-br from-[var(--color-purple)]/20 to-[var(--color-deep-blue)]/20 rounded-2xl backdrop-blur-sm border border-white/10">
          <FiServer className="w-8 h-8 text-[var(--color-soft-pink)]" />
        </div>
        <div className="absolute -bottom-6 -right-6 p-4 bg-gradient-to-br from-[var(--color-purple)]/20 to-[var(--color-deep-blue)]/20 rounded-2xl backdrop-blur-sm border border-white/10">
          <FiCode className="w-8 h-8 text-[var(--color-sky-blue)]" />
        </div>

        <div className="text-center space-y-8">
          {/* Main icon with dual spinning effect */}
          <div className="relative flex justify-center mb-12">
            <FiSettings className="w-20 h-20 text-[var(--color-sky-blue)] animate-spin-slow absolute" />
            <FiSettings className="w-20 h-20 text-[var(--color-soft-pink)] animate-reverse-spin opacity-50" />
          </div>
          
          {/* Title with enhanced gradient */}
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[var(--color-sky-blue)] via-[var(--color-soft-pink)] to-[var(--color-purple)] bg-clip-text text-transparent">
            Under Maintenance
          </h1>
          
          <p className="text-gray-300 text-xl max-w-lg mx-auto leading-relaxed">
            We're making things more awesome. 
            Our team is working hard to improve your experience.
          </p>
          
          {/* Contact section with modern styling */}
          <div className="pt-8 mt-8 border-t border-white/10">
            <div className="flex flex-col items-center gap-4">
              <p className="text-[var(--color-pale-gray)]">Need immediate assistance?</p>
              <a 
                href="mailto:support@example.com"
                className="group relative inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-deep-blue)] to-[var(--color-purple)] hover:from-[var(--color-purple)] hover:to-[var(--color-deep-blue)] text-white transition-all duration-300"
              >
                <span className="relative z-10">Contact Support</span>
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaintenancePage;
