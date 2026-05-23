import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Contact } from './components/Contact';

export const ROUTES = {
  HOME: '/',
  SKILLS: '/skills',
  EDUCATION: '/education',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:slug',
  CONTACT: '/contact',
} as const;

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <ScrollToTop />
      <Sidebar />

      <main className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-10 py-8 md:py-12 max-w-[1600px]">
        <div className="animate-fadeIn min-h-[60vh]">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SKILLS} element={<Skills />} />
            <Route path={ROUTES.EDUCATION} element={<Education />} />
            <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
            <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetail />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p className="font-medium text-slate-500">&copy; {new Date().getFullYear()} Vinayak Mane</p>
          <p className="mt-1">AI/ML Engineer • Melbourne, Australia</p>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
