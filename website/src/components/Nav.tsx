import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const items = ['about', 'skills', 'projects', 'github', 'services', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('theme') !== 'light' } catch { return true } })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* storage unavailable */ }
  }, [dark])
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#0b1020]/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" aria-label="Main">
        <a href="#top" className="font-mono text-sm font-semibold text-cyan-600 dark:text-cyan-400">azhar@portfolio:~$</a>
        <ul className="hidden gap-6 text-sm md:flex">
          {items.map(i => <li key={i}><a className="capitalize hover:text-cyan-500" href={`#${i}`}>{i}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button className="btn btn-ghost md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={16} /> : <Menu size={16} />}</button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-slate-200 px-4 py-2 md:hidden dark:border-white/10">
          {items.map(i => <li key={i}><a className="block py-2 capitalize" href={`#${i}`} onClick={() => setOpen(false)}>{i}</a></li>)}
        </ul>
      )}
    </header>
  )
}
