import { useState, useEffect, useRef } from "react";
import { useAppStore } from "@/store/useAppStore";

export function HeroTerminal() {
  const [input, setInput] = useState("");
  const history = useAppStore((state) => state.terminalHistory);
  const addHistory = useAppStore((state) => state.addTerminalHistory);
  const clearHistory = useAppStore((state) => state.clearTerminalHistory);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    addHistory(`$ ${cmd}`);
    const normalizedCmd = cmd.trim().toLowerCase();
    
    switch (normalizedCmd) {
      case "help":
        addHistory("可用命令 (Available commands):");
        addHistory("  help     - 显示此帮助信息");
        addHistory("  whoami   - 显示个人信息与简介");
        addHistory("  skills   - 显示核心技术栈");
        addHistory("  ls       - 列出当前站点的所有目录");
        addHistory("  clear    - 清空终端输出");
        break;
      case "whoami":
        addHistory("Computer Science Student @ Shanghai University | AI 全栈开发者");
        addHistory("Wandering, building, and shaping the future");
        break;
      case "skills":
        addHistory("React, TypeScript, Tailwind, C++, AI Inference, Python");
        break;
      case "clear":
        clearHistory();
        return; // Don't add the clear command to history
      case "ls":
        addHistory("项目/  技能/  关于.md  联系方式.txt");
        break;
      case "sudo make me an offer":
        addHistory("权限拒绝。请通过邮箱与我联系以进行深入交流。");
        break;
      case "":
        break;
      default:
        addHistory(`找不到命令: ${cmd}。输入 'help' 查看可用命令。`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 p-4 rounded-xl border border-white/10 bg-black/50 backdrop-blur font-mono text-sm text-slate-300 shadow-2xl">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-slate-500">ZehanXi@SHU ~</span>
      </div>
      
      <div 
        ref={scrollRef}
        className="space-y-2 h-[300px] overflow-y-auto scrollbar-hide"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith("$") ? "text-emerald-400" : "whitespace-pre"}>
            {line}
          </div>
        ))}
        
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-slate-300 caret-emerald-400"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
