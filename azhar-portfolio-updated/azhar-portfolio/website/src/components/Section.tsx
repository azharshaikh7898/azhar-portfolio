import type { ReactNode } from 'react'
export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-8 font-mono text-2xl font-bold"><span className="text-cyan-500">#</span> {title}</h2>
      {children}
    </section>
  )
}
