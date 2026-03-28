export function SkillDependencies() {
  const skills = {
    dependencies: [
      { name: "react", version: "^19.0.0" },
      { name: "typescript", version: "^5.0.0" },
      { name: "tailwindcss", version: "^3.4.0" },
      { name: "c++", version: "17/20" },
      { name: "ai-inference", version: "latest" }
    ],
    devDependencies: [
      { name: "vite", version: "^6.0.0" },
      { name: "zustand", version: "^5.0.0" }
    ],
    peerDependencies: [
      { name: "python", version: ">=3.10" },
      { name: "node", version: ">=18" },
      { name: "docker", version: "latest" },
      { name: "rust", version: "nightly" }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-20 font-mono text-sm text-slate-300">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-100 mb-4 flex items-center gap-2">
          <span className="text-emerald-500">{'>'}</span> cat skills.json
        </h2>
        <p className="text-slate-400">
          我的核心技术栈与正在探索的领域。
        </p>
      </div>

      <div className="bg-slate-950/80 rounded-xl border border-white/10 p-6 shadow-xl overflow-x-auto">
        <pre className="text-left leading-relaxed">
          <span className="text-slate-400">{'{'}</span>
          <br />
          <span className="text-blue-400 ml-4">"name"</span>: <span className="text-emerald-400">"ai-fullstack-developer"</span>,
          <br />
          <span className="text-blue-400 ml-4">"version"</span>: <span className="text-emerald-400">"1.0.0"</span>,
          <br />
          <span className="text-blue-400 ml-4">"private"</span>: <span className="text-amber-400">true</span>,
          <br />
          
          <span className="text-blue-400 ml-4">"dependencies"</span>: <span className="text-slate-400">{'{'}</span>
          {skills.dependencies.map((dep, i) => (
            <div key={dep.name} className="ml-8 group">
              <span className="text-blue-400">"{dep.name}"</span>: <span className="text-emerald-400">"{dep.version}"</span>
              {i < skills.dependencies.length - 1 ? "," : ""}
              <span className="opacity-0 group-hover:opacity-100 text-slate-600 ml-4 transition-opacity text-xs">
                // 核心能力 (全栈/AI)
              </span>
            </div>
          ))}
          <span className="text-slate-400 ml-4">{'}'}</span>,
          <br />

          <span className="text-blue-400 ml-4">"devDependencies"</span>: <span className="text-slate-400">{'{'}</span>
          {skills.devDependencies.map((dep, i) => (
            <div key={dep.name} className="ml-8 group">
              <span className="text-blue-400">"{dep.name}"</span>: <span className="text-emerald-400">"{dep.version}"</span>
              {i < skills.devDependencies.length - 1 ? "," : ""}
              <span className="opacity-0 group-hover:opacity-100 text-slate-600 ml-4 transition-opacity text-xs">
                // 工程化与工具
              </span>
            </div>
          ))}
          <span className="text-slate-400 ml-4">{'}'}</span>,
          <br />

          <span className="text-blue-400 ml-4">"peerDependencies"</span>: <span className="text-slate-400">{'{'}</span>
          {skills.peerDependencies.map((dep, i) => (
            <div key={dep.name} className="ml-8 group">
              <span className="text-blue-400">"{dep.name}"</span>: <span className="text-emerald-400">"{dep.version}"</span>
              {i < skills.peerDependencies.length - 1 ? "," : ""}
              <span className="opacity-0 group-hover:opacity-100 text-slate-600 ml-4 transition-opacity text-xs">
                // 探索中 / 底层环境
              </span>
            </div>
          ))}
          <span className="text-slate-400 ml-4">{'}'}</span>
          <br />
          <span className="text-slate-400">{'}'}</span>
        </pre>
      </div>
    </div>
  );
}
