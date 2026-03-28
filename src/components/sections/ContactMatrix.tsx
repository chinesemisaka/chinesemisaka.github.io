import { Copy, Github, Mail } from 'lucide-react';
import { useState } from 'react';

export function ContactMatrix() {
  const [copied, setCopied] = useState(false);
  const email = "xizehan@shu.edu.cn";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-32 border-t border-white/5 mt-12 text-center">
      <h2 className="text-3xl font-mono font-bold text-slate-100 mb-8">
        <span className="text-emerald-500">{'>'}</span> ssh 联系@我
      </h2>
      
      <p className="text-slate-400 max-w-xl mx-auto mb-12">
        对新的项目挑战、AI技术探索或未来的机会始终保持开放态度。欢迎随时交流！
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-6 py-3 rounded-md bg-slate-900 border border-white/10 hover:border-emerald-500/50 transition-all group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform" />
          <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 relative z-10 transition-colors" />
          <span className="font-mono text-slate-300 group-hover:text-white relative z-10 transition-colors">
            {copied ? "已复制!" : email}
          </span>
          <Copy className="w-4 h-4 text-slate-500 ml-2 relative z-10" />
        </button>

        <a
          href="https://github.com/chinesemisaka"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-400 transition-all"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
