import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export enum Tab {
  HOME = 'Home',
  SKILLS = 'Skills',
  EDUCATION = 'Education',
  EXPERIENCE = 'Experience',
  PROJECTS = 'Projects',
  CONTACT = 'Contact'
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME: return <Home onNavigate={setActiveTab} />;
      case Tab.SKILLS: return <Skills />;
      case Tab.EXPERIENCE: return <Experience />;
      case Tab.EDUCATION: return <Education />;
      case Tab.PROJECTS: return <Projects />;
      case Tab.CONTACT: return <Contact />;
      default: return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navigation Bar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-10 py-8 md:py-12 max-w-[1600px]">
        <div className="animate-fadeIn min-h-[60vh]">
          {renderContent()}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p className="font-medium text-slate-500">&copy; {new Date().getFullYear()} Vinayak Mane</p>
          <p className="mt-1">AI/ML Engineer • Melbourne, Australia</p>
        </div>
      </footer>
    </div>
  );
}