import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  contributions: string[];
  demoUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  contributions,
  demoUrl,
  githubUrl,
  className = '',
}: ProjectCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <div className="flex gap-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition z-20">
                <Github size={20} />
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition z-20">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>

        <ul className="list-disc list-inside space-y-1 text-sm text-slate-300 ml-1">
          {contributions.map((contrib, i) => (
            <li key={i} className="marker:text-emerald-500">{contrib}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-slate-900/50 text-emerald-300/80 border-white/5">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
