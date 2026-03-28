# AndrewXi's Terminal Portfolio

一个极简、充满极客风格的个人开发者主页。采用了类似 Vercel 与 Linear 的高级感暗色设计，并结合了可交互的命令行终端与平滑的微动效。

## ✨ 核心特性 (Features)

- **🖥️ 交互式终端 (Interactive Terminal)**：在首屏真实模拟命令行交互，支持输入 `help`, `whoami`, `skills`, `ls` 等指令并动态输出内容。
- **🔦 探照灯动效 (Spotlight Hover Effect)**：项目卡片 (Bento Grid) 支持跟随鼠标指针的径向渐变发光效果。
- **📦 极客风展示 (Geeky UI)**：使用类似 `package.json` 的代码高亮形式展示个人技术栈。
- **📱 响应式设计 (Responsive)**：完美适配移动端与桌面端屏幕，提供流畅的滚动体验。

## 🛠️ 技术栈 (Tech Stack)

- **核心框架**: React 19 + TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **组件库**: shadcn/ui
- **图标**: Lucide React
- **状态管理**: Zustand (用于跨组件共享终端历史状态)
- **路由**: React Router DOM

## 🚀 本地运行 (Getting Started)

1. **克隆项目**
   ```bash
   git clone https://github.com/chinesemisaka/myintro.git
   cd myintro
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```
   *应用将在 `http://localhost:5173` 运行。*

4. **生产环境构建**
   ```bash
   npm run build
   ```

## 📄 部署 (Deployment)

本项目完全由静态前端资源组成，可以通过 GitHub Pages, Vercel 或 Netlify 一键部署 `dist` 目录。
