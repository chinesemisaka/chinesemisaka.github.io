import { ProjectCard } from './ProjectCard';

const PROJECTS = [
  {
    title: 'BanGmusic',
    description: '一款极致轻量的 Windows 本地音乐播放器。',
    technologies: ['WPF', 'NAudio', 'SQLite', 'C#'],
    contributions: [
      '追求极致的内存占用和 CPU 使用率',
      '适合日常高频的本地音乐播放需求'
    ],
    githubUrl: 'https://github.com/chinesemisaka/BanG-music',
    className: 'md:col-span-3 md:row-span-2' // Full width for the single core project
  }
];

export function ProjectBento() {
  return (
    <div className="w-full max-w-5xl mx-auto py-20">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-mono font-bold text-slate-100 mb-4 flex items-center gap-2 justify-center md:justify-start">
          <span className="text-emerald-500">{'>'}</span> ls ./项目
        </h2>
        <p className="text-slate-400 max-w-2xl">
          近期开发的核心开源项目。追求极致的性能与优秀的用户体验。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}
