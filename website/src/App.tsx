import Nav from './components/Nav'
import { About, Contact, GithubSection, Hero, Projects, Services, Skills } from './components/Sections'

export default function App() {
  return (
    <>
      <Nav />
      <main><Hero /><About /><Skills /><Projects /><Services /><GithubSection /><Contact /></main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-white/10">© {new Date().getFullYear()} Mohd Azhar Shaikh</footer>
    </>
  )
}
