import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

// Helper function to render text with bold formatting
const renderFormattedText = (text: string) => {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add bold text with color
    parts.push(
      <strong key={key++} className="font-semibold text-primary-700">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};

export const Experience: React.FC = () => {
  return (
    <SectionWrapper title="Professional Experience" subtitle="My career journey so far">
      <div className="relative">
        {/* Continuous Timeline Line */}
        {/* Mobile: Left aligned (offset for padding). Desktop: Offset for date column */}
        <div className="absolute top-2 bottom-0 left-[0.45rem] md:left-[9.5rem] w-px bg-slate-200"></div>

        <div className="space-y-10 md:space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8">
              
              {/* Date / Metadata Column */}
              <div className="pl-8 md:pl-0 md:w-40 md:text-right flex-shrink-0 relative">
                 {/* Dot */}
                 <div className="absolute left-0 md:left-auto md:right-[-1.4rem] top-1.5 w-4 h-4 bg-white border-[3px] border-primary-500 rounded-full z-10"></div>
                 
                 <div className="inline-flex md:flex-col items-center md:items-end gap-2 md:gap-1">
                   <span className="text-sm font-bold text-primary-700 md:text-primary-600 flex items-center gap-2 md:gap-1">
                     <Calendar size={14} className="md:hidden text-primary-500" />
                     {job.period}
                   </span>
                   <span className="hidden md:flex text-xs text-slate-400 items-center gap-1">
                      {job.location} <MapPin size={12} />
                   </span>
                 </div>
                 
                 {/* Mobile Location Display */}
                 <div className="md:hidden text-xs text-slate-500 mt-1 flex items-center gap-1.5 ml-0.5">
                   <MapPin size={12} /> {job.location}
                 </div>
              </div>

              {/* Content Column */}
              <div className="pl-8 md:pl-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{job.role}</h3>
                </div>
                <div className="text-base md:text-lg text-slate-700 font-medium mb-3">{job.company}</div>
                <ul className="space-y-3">
                  {job.details.map((detail, idx) => (
                    <li key={idx} className="relative pl-4 text-slate-600 text-sm leading-relaxed">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                      {renderFormattedText(detail)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};