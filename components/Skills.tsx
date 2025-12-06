import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SKILLS_DATA } from '../constants';
import { 
  BrainCircuit, 
  Container, 
  Cloud, 
  Terminal,
  LucideIcon 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (category: string): LucideIcon => {
    switch (category) {
      case "AI/ML & GenAI": return BrainCircuit;
      case "MLOps & DevOps": return Container;
      case "Cloud & Databases": return Cloud;
      case "Programming & Frameworks": return Terminal;
      default: return Terminal;
    }
  };

  return (
    <SectionWrapper title="Technical Skills" subtitle="My stack and areas of expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((group, index) => {
          const Icon = getIcon(group.category);
          return (
            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-primary-200 hover:shadow-md transition-all duration-300 group">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="p-2.5 bg-white rounded-lg shadow-sm text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 font-medium hover:border-primary-200 hover:text-primary-700 hover:bg-primary-50 transition-colors shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};