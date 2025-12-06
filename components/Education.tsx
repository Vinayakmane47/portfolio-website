import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <SectionWrapper title="Education" subtitle="Academic background">
      <div className="grid gap-4 md:gap-6">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="group p-5 md:p-6 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <GraduationCap size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{edu.degree}</h3>
                    <p className="text-slate-700 font-medium">{edu.institution}</p>
                  </div>
                  
                  {/* Meta Info - Wraps on mobile, right aligned column on desktop */}
                  <div className="flex flex-row flex-wrap md:flex-col gap-x-4 gap-y-2 md:gap-1 mt-1 md:mt-0 text-sm">
                    <div className="flex items-center gap-1.5 text-slate-600 md:justify-end bg-white md:bg-transparent px-2.5 py-1 md:p-0 rounded-md border md:border-0 border-slate-200 shadow-sm md:shadow-none">
                      <Calendar size={14} className="text-primary-500 md:text-slate-400" /> 
                      <span className="font-medium md:font-normal">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 md:justify-end px-1 md:p-0">
                      <MapPin size={14} /> {edu.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};