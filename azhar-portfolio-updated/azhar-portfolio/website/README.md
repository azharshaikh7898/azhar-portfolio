# Portfolio website

React + TypeScript + Vite + Tailwind. Everything you will edit lives in `src/data/site.ts`:
links (email, Kworks profile), gig URLs, starting prices, currency, projects, skills.
Empty email/Kworks values are hidden; empty gig URLs make the button jump to Contact.
When a demo is pushed as its own repo, set `repo` (and `demo`) on that project.

```
website/
  index.html  package.json  vite.config.ts  tailwind.config.js  postcss.config.js  tsconfig.json
  src/ main.tsx  App.tsx  index.css
       data/site.ts
       components/ Nav.tsx  Section.tsx  Sections.tsx
```
