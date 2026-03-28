import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-300 antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 px-6 md:px-8">
          <Link className="font-mono text-sm font-bold text-slate-100 hover:text-emerald-400 transition" to="/">
            ~/主页
          </Link>
          <div className="flex gap-6 font-mono text-sm text-slate-400">
            <Link className="hover:text-emerald-400 transition" to="/#projects">
              ./项目
            </Link>
            <Link className="hover:text-emerald-400 transition" to="/#skills">
              ./技能
            </Link>
            <Link className="hover:text-emerald-400 transition" to="/#contact">
              ./联系
            </Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
