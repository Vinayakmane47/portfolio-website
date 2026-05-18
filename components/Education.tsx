import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, Compass } from 'lucide-react';

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
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-8">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{edu.degree}</h3>
                    <p className="text-slate-700 font-medium">{edu.institution}</p>
                    {edu.specialization && (
                      <p className="mt-1 text-sm text-slate-500">
                        <Compass size={12} className="inline mb-0.5 mr-1 text-primary-500" />
                        {edu.specialization}
                      </p>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-row flex-wrap md:flex-col gap-x-4 gap-y-2 md:gap-1 mt-1 md:mt-0 text-sm shrink-0">
                    <div className="flex items-center gap-1.5 text-slate-600 md:justify-end bg-white md:bg-transparent px-2.5 py-1 md:p-0 rounded-md border md:border-0 border-slate-200 shadow-sm md:shadow-none">
                      <Calendar size={14} className="text-primary-500 md:text-slate-400" />
                      <span className="font-medium md:font-normal">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 md:justify-end px-1 md:p-0">
                      <MapPin size={14} /> {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-1.5 text-primary-700 md:justify-end px-1 md:p-0 font-semibold">
                        <Award size={14} /> GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider font-semibold text-slate-500">
                      <BookOpen size={13} className="text-primary-500" />
                      Key Coursework
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-700 font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Thesis / capstone */}
                {edu.thesis && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider font-semibold text-slate-500">
                      <Sparkles size={13} className="text-primary-500" />
                      Thesis / Capstone
                    </div>
                    <p className="text-sm font-semibold text-slate-900 leading-snug">{edu.thesis.title}</p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{edu.thesis.body}</p>
                  </div>
                )}

                {/* Highlights / achievements */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider font-semibold text-slate-500">
                      <Award size={13} className="text-primary-500" />
                      Highlights
                    </div>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="relative pl-4 text-sm text-slate-600 leading-relaxed">
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};