import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink, Youtube, Calendar } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <SectionWrapper title="Projects" subtitle="Featured work and contributions">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="flex flex-col h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
            <div className="p-5 md:p-6 flex-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                <span className="flex-shrink-0 text-xs px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md flex items-center gap-1.5 font-medium">
                   <Calendar size={12} /> {project.period}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="text-[11px] md:text-xs px-2.5 py-1 bg-primary-50 text-primary-700 rounded-md font-medium border border-primary-100/50">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-2 mb-2">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-sm text-slate-600 leading-relaxed">
                    • {desc}
                  </p>
                ))}
              </div>
            </div>

            <div className="px-5 md:px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex flex-wrap gap-3 mt-auto">
              {project.links.repo && (
                <a 
                  href={project.links.repo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <Github size={16} /> Repository
                </a>
              )}
              {project.links.video && (
                <a 
                  href={project.links.video} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-red-600 hover:border-red-100 hover:shadow-sm transition-all"
                >
                  <Youtube size={16} /> Demo
                </a>
              )}
              {project.links.site && (
                <a 
                  href={project.links.site} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:text-primary-600 hover:border-primary-100 hover:shadow-sm transition-all"
                >
                  <ExternalLink size={16} /> Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 md:p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <p className="text-sm md:text-base text-slate-600">
          More projects available on my <a href="https://github.com" className="text-primary-600 hover:underline font-semibold">GitHub</a> including a Dog Breed Classifier and Question Similarity model.
        </p>
      </div>
    </SectionWrapper>
  );
};