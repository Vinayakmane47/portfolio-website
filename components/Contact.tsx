import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Copy } from 'lucide-react';

export const Contact: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Simple feedback could be added here
  };

  return (
    <SectionWrapper title="Contact" subtitle="Get in touch">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
            <div className="p-2 bg-white rounded-full shadow-sm text-primary-600">
              <Mail size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
              <p className="text-slate-900 font-medium break-all">{CONTACT_INFO.email}</p>
            </div>
            <button onClick={() => copyToClipboard(CONTACT_INFO.email)} className="text-slate-400 hover:text-primary-600" title="Copy email">
              <Copy size={16} />
            </button>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
            <div className="p-2 bg-white rounded-full shadow-sm text-primary-600">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
              <p className="text-slate-900 font-medium">{CONTACT_INFO.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
            <div className="p-2 bg-white rounded-full shadow-sm text-primary-600">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Address</p>
              <p className="text-slate-900 font-medium">{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900">Social Profiles</h3>
          <div className="grid gap-4">
             <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                <div className="flex items-center gap-3">
                  <Linkedin className="text-slate-400 group-hover:text-[#0077b5] transition-colors" />
                  <span className="font-medium text-slate-700 group-hover:text-slate-900">LinkedIn</span>
                </div>
                <Globe size={16} className="text-slate-300 group-hover:text-primary-500" />
             </a>

             <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                <div className="flex items-center gap-3">
                  <Github className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                  <span className="font-medium text-slate-700 group-hover:text-slate-900">GitHub</span>
                </div>
                <Globe size={16} className="text-slate-300 group-hover:text-primary-500" />
             </a>

             <a href={CONTACT_INFO.website} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                <div className="flex items-center gap-3">
                  <Globe className="text-slate-400 group-hover:text-primary-600 transition-colors" />
                  <span className="font-medium text-slate-700 group-hover:text-slate-900">Portfolio Website</span>
                </div>
                <Globe size={16} className="text-slate-300 group-hover:text-primary-500" />
             </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};