import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <nav className="mx-auto flex w-full max-w-3xl gap-4 p-4 text-sm">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
