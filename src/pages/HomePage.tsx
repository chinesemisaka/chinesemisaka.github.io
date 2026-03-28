import { HeroTerminal } from '@/components/sections/HeroTerminal'
import { ProjectBento } from '@/components/sections/ProjectBento'
import { SkillDependencies } from '@/components/sections/SkillDependencies'
import { ContactMatrix } from '@/components/sections/ContactMatrix'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans text-slate-300 selection:bg-emerald-500/30 overflow-x-hidden relative">
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0" 
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="w-full text-center mt-24 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter text-slate-100 mb-6 drop-shadow-sm">
              ZehanXi@<span className="text-emerald-500">SHU</span> ~$
            </h1>
            <p className="text-slate-400/80 text-xl md:text-2xl font-mono mb-6 drop-shadow-sm">
              Wandering, building, and shaping the future
            </p>
            <p className="text-slate-600 text-lg md:text-xl font-mono">
              执行 `<span className="text-emerald-500/80">help</span>` 了解更多。
            </p>
          </div>
          <HeroTerminal />
        </section>

        <section id="projects" className="py-24 border-t border-white/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
          <ProjectBento />
        </section>

        <section id="skills" className="py-24 border-t border-white/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <SkillDependencies />
        </section>

        <section id="contact" className="py-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          <ContactMatrix />
        </section>
      </div>
    </div>
  )
}
