import React, { useEffect, useRef } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ArrowRight } from 'lucide-react';
import { Tab } from '../App';

interface HomeProps {
  onNavigate: (tab: Tab) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    // Resize handler
    const resize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Particle configuration
    const particles: Array<{x: number, y: number, vx: number, vy: number}> = [];
    const particleCount = 60; 
    const connectionDistance = 120;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // Subtle slow movement
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      // Using slate-300/400 range for subtle grey/blue tint
      particles.forEach((particle, i) => {
        // Move
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.4)'; 
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <SectionWrapper title="Welcome" subtitle="Artificial Intelligence & Machine Learning Engineer" id={Tab.HOME}>
      <div className="relative">
        {/* Background Animation Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white ring-1 ring-slate-200 relative group">
              <img 
                src="/images/vinayak.jpeg" 
                alt="Vinayak Mane" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Hi, I'm <span className="font-bold text-primary-700">Vinayak Mane</span>, Passionate AI Engineer with 3+ years of professional experience in building intelligent systems that solve real-world problems. Specializing in Large Language Models (LLMs), Neural Networks, and Machine Learning pipelines, I create cutting-edge AI solutions that drive innovation. With a Master's in AI from Monash University, I combine academic rigor with practical industry experience to develop scalable AI applications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50/90 backdrop-blur-sm rounded-lg border border-slate-100 hover:border-primary-100 transition-colors">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  Core Focus
                </h3>
                <p className="text-sm text-slate-600">GenAI, RAG, Deep Learning, MLOps, Cloud Computing (AWS)</p>
              </div>
              <div className="p-4 bg-slate-50/90 backdrop-blur-sm rounded-lg border border-slate-100 hover:border-primary-100 transition-colors">
                <h3 className="font-semibold text-slate-900 mb-2">Current Status</h3>
                <p className="text-sm text-slate-600">Based in Melbourne, VIC. Open to opportunities.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <button 
                onClick={() => onNavigate(Tab.PROJECTS)}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                View Projects <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => onNavigate(Tab.CONTACT)}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};