import React, { useState } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  FolderGit2, 
  Mail,
  Menu,
  X
} from 'lucide-react';
import { Tab } from '../App';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: Tab.HOME, icon: User, label: 'Home' },
    { id: Tab.SKILLS, icon: Code, label: 'Skills' },
    { id: Tab.EDUCATION, icon: GraduationCap, label: 'Education' },
    { id: Tab.EXPERIENCE, icon: Briefcase, label: 'Experience' },
    { id: Tab.PROJECTS, icon: FolderGit2, label: 'Projects' },
    { id: Tab.CONTACT, icon: Mail, label: 'Contact' },
  ];

  const handleNavClick = (tab: Tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Area */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavClick(Tab.HOME)}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:shadow-md transition-all">
              VM
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-sm leading-tight group-hover:text-primary-600 transition-colors">Vinayak Mane</span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">AI/ML Engineer</span>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50/50 p-1 rounded-xl border border-slate-100">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-white text-primary-600 shadow-sm ring-1 ring-black/5' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                    }
                  `}
                >
                  <Icon size={16} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`
        md:hidden absolute left-0 right-0 bg-white border-b border-slate-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
      `}>
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-primary-50 text-primary-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }
                `}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};