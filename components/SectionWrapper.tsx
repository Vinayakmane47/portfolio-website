import React, { useEffect, useState } from 'react';

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id={id} ref={sectionRef} className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mb-16 md:mb-24 scroll-mt-24`}>
      <div className="mb-6 md:mb-8 px-1 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="text-slate-500 mt-2 text-sm md:text-base">{subtitle}</p>}
        <div className="h-1 w-16 md:w-20 bg-primary-500 mt-4 rounded-full"></div>
      </div>
      <div className="bg-white relative rounded-xl md:rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 md:p-8 overflow-hidden">
        {children}
      </div>
    </div>
  );
};