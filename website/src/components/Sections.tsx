import { useState } from 'react'
import { Box, ExternalLink, FlaskConical, Github, Linkedin, Mail, Store, Terminal } from 'lucide-react'
import Section from './Section'
import { currency, links, projects, services, skills, type Service } from '../data/site'

const icons = { terminal: Terminal, flask: FlaskConical, box: Box }

export function Hero() {
  return (
    <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-32 md:grid-cols-2">
      <div>
        <p className="mb-3 font-mono text-sm text-cyan-600 dark:text-cyan-400">Mohd Azhar Shaikh · Software | DevOps | QA Automation</p>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">I <span className="grad-text">Build, Deploy, Automate</span> &amp; Test Software.</h1>
        <p className="mt-5 text-slate-600 dark:text-slate-400">I'm a software engineer working across backend development, cloud infrastructure, CI/CD automation, and software testing. I enjoy building practical solutions that make applications more reliable and easier to maintain.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.kworksProfile && <a className="btn btn-primary shadow-lg shadow-cyan-500/30" href={links.kworksProfile} target="_blank" rel="noreferrer"><Store size={16} /> Hire Me on Kwork</a>}
          <a className="btn btn-ghost" href="#projects">View My Projects</a>
          <a className="btn btn-ghost" href="#services">Explore My Services</a>
          <a className="btn btn-ghost" href={links.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub Profile</a>
        </div>
      </div>
      <div className="glow rounded-xl border border-slate-200 bg-slate-900 p-5 font-mono text-sm text-slate-200 shadow-xl dark:border-white/10" aria-label="Technical stack">
        <div className="mb-3 flex gap-1.5"><i className="h-3 w-3 rounded-full bg-red-400" /><i className="h-3 w-3 rounded-full bg-yellow-400" /><i className="h-3 w-3 rounded-full bg-green-400" /></div>
        <p><span className="text-cyan-400">$</span> stack --list</p>
        {['python  bash  sql', 'flask  fastapi', 'docker  kubernetes  helm', 'github-actions  jenkins', 'aws  prometheus  grafana', 'playwright  selenium  postman'].map(l => <p key={l} className="text-violet-300">› {l}</p>)}
        <p className="mt-2"><span className="text-cyan-400">$</span> <span className="animate-pulse">_</span></p>
      </div>
    </section>
  )
}

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl space-y-4 text-slate-600 dark:text-slate-400">
        <p>I have around a year of experience across software development, DevOps and QA automation in SaaS startups, and I'm a B.Tech Computer Science and Engineering student at Medi-Caps University.</p>
        <p>Working across those three areas means I can write a feature, containerize and ship it, and test it. I focus on practical problem-solving, clean code, automation of repetitive work, careful troubleshooting, and continuous learning. I work on Ubuntu Linux day to day.</p>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group} className="card"><h3 className="mb-3 font-semibold">{group}</h3><div className="flex flex-wrap gap-2">{list.map(s => <span key={s} className="chip">{s}</span>)}</div></div>
        ))}
      </div>
    </Section>
  )
}

export function Projects() {
  const cats = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const [cat, setCat] = useState('All')
  return (
    <Section id="projects" title="Projects">
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {cats.map(c => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`btn ${cat === c ? 'btn-primary' : 'btn-ghost'}`}>{c}</button>)}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.filter(p => cat === 'All' || p.category === cat).map(p => (
          <article key={p.title} className="card flex flex-col">
            {p.featured && <span className="mb-2 w-fit rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-2 py-0.5 text-xs font-medium text-white">Featured</span>}
            {p.status && <span className="mb-2 w-fit rounded-full border border-amber-500/40 px-2 py-0.5 text-xs text-amber-600 dark:text-amber-300">{p.status}</span>}
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
            {p.features && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{p.features.map(f => <li key={f}>{f}</li>)}</ul>}
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>
            <div className="mt-auto flex gap-3 pt-5">
              <a className="btn btn-ghost" href={p.repo ?? links.github} target="_blank" rel="noreferrer"><Github size={16} /> Source</a>
              {p.demo && <a className="btn btn-ghost" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function ServiceCard({ s }: { s: Service }) {
  const Icon = icons[s.icon]
  const url = s.kworksUrl || links.kworksProfile
  const hasUrl = url.length > 0
  return (
    <article className="card flex flex-col">
      <Icon className="mb-3 text-cyan-500" />
      <h3 className="text-lg font-semibold">{s.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.scope}</p>
      <h4 className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Deliverables</h4>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">{s.deliverables.map(d => <li key={d}>{d}</li>)}</ul>
      <p className="mt-5 font-mono text-lg">Starting at <span className="text-cyan-500">{currency}{s.startingPrice}</span></p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a className="btn btn-primary" href={hasUrl ? url : '#contact'} {...(hasUrl ? { target: '_blank', rel: 'noreferrer' } : {})}><Store size={16} /> {hasUrl ? 'View on Kwork' : 'Contact for this service'}</a>
        <a className="btn btn-ghost" href="#contact">Contact</a>
      </div>
    </article>
  )
}
export const Services = () => <Section id="services" title="Freelance Services"><div className="grid gap-6 lg:grid-cols-3">{services.map(s => <ServiceCard key={s.title} s={s} />)}</div></Section>

export function GithubSection() {
  return (
    <Section id="github" title="GitHub">
      <p className="mb-5 text-slate-600 dark:text-slate-400">Source code for my featured projects is public.</p>
      <ul className="mb-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{projects.filter(p => p.repo).map(p => <li key={p.repo}><a className="card block py-4 font-mono text-sm" href={p.repo} target="_blank" rel="noreferrer"><Github size={14} className="mr-1 inline" />{p.repo!.replace('https://github.com/', '')}<br /><span className="text-xs text-slate-500">{p.title}</span></a></li>)}</ul>
      <a className="btn btn-primary" href={links.github} target="_blank" rel="noreferrer"><Github size={16} /> Open GitHub Profile</a>
    </Section>
  )
}

export function Contact() {
  const items = [
    { label: 'GitHub', href: links.github, Icon: Github },
    { label: 'LinkedIn', href: links.linkedin, Icon: Linkedin },
    { label: 'Email', href: links.email && `mailto:${links.email}`, Icon: Mail },
    { label: 'Kworks', href: links.kworksProfile, Icon: Store },
  ].filter(i => i.href)
  return (
    <Section id="contact" title="Contact">
      {links.kworksProfile && <a href={links.kworksProfile} target="_blank" rel="noreferrer" className="glow mb-6 block rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-8 text-center text-white transition hover:opacity-95"><span className="block text-2xl font-bold">Need this built? Order on Kwork</span><span className="mt-1 block text-sm opacity-90">Secure checkout through Kwork, message me before you order</span></a>}
      <p className="mb-5 text-slate-600 dark:text-slate-400">Have a task in mind? Reach out with a short description and I'll reply with scope and timing.</p>
      <div className="flex flex-wrap gap-3">{items.map(({ label, href, Icon }) => <a key={label} className="btn btn-ghost" href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer"><Icon size={16} /> {label}</a>)}</div>
    </Section>
  )
}
