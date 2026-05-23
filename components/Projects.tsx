import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink, Youtube, Calendar, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const openProject = (slug: string) => navigate(`/projects/${slug}`);

  return (
    <SectionWrapper title="Projects" subtitle="Featured work and contributions">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project) => {
          const summary = project.detail?.summary;
          return (
            <div
              key={project.slug}
              role="button"
              tabIndex={0}
              onClick={() => openProject(project.slug)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(project.slug); } }}
              className="group flex flex-col text-left bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-200"
            >
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3 gap-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <span className="flex-shrink-0 text-xs px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md flex items-center gap-1.5 font-medium">
                    <Calendar size={12} /> {project.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] md:text-xs px-2.5 py-1 bg-primary-50 text-primary-700 rounded-md font-medium border border-primary-100/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="text-[11px] md:text-xs px-2.5 py-1 text-slate-500 font-medium">
                      +{project.techStack.length - 6} more
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {summary ?? project.description[0]?.replace(/\*\*/g, '')}
                </p>

                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                  View details
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              <div className="px-5 md:px-6 py-3 bg-slate-50/80 border-t border-slate-100 flex flex-wrap gap-3 mt-auto">
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    <Github size={14} /> Repository
                  </a>
                )}
                {project.links.video && (
                  <a
                    href={project.links.video}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-red-600 hover:border-red-100 hover:shadow-sm transition-all"
                  >
                    <Youtube size={14} /> Demo
                  </a>
                )}
                {project.links.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-primary-600 hover:border-primary-100 hover:shadow-sm transition-all"
                  >
                    <ExternalLink size={14} /> Live Site
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 md:p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <p className="text-sm md:text-base text-slate-600">
          More projects available on my <a href="https://github.com/Vinayakmane47" className="text-primary-600 hover:underline font-semibold" target="_blank" rel="noreferrer">GitHub</a> including a Dog Breed Classifier and Question Similarity model.
        </p>
      </div>
    </SectionWrapper>
  );
};
