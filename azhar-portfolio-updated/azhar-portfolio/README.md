# Kworks Freelance Portfolio

- `website/` - the portfolio site
- `demos/` - three independent demo projects, each with its own README

## Ubuntu setup
```bash
node -v && npm -v || { sudo apt update && sudo apt install -y curl && curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs; }
cd kworks-portfolio/website
npm install
npm run dev          # http://localhost:5173
npm run build        # type-checks, outputs dist/
npm run preview      # test the production build locally
```

## Push to GitHub
```bash
sudo apt install -y git
cd kworks-portfolio && git init -b main && git add . && git commit -m "Initial portfolio"
git remote add origin https://github.com/azharshaikh7898/kworks-portfolio.git   # create the empty repo on github.com first
git push -u origin main
```

## Deploy (simplest: Vercel, free)
```bash
sudo npm i -g vercel
cd website && vercel --prod      # log in when prompted; accept defaults (Vite is auto-detected)
```
Alternative: Cloudflare Pages via the dashboard - build command `npm run build`, output `dist`, root directory `website`.
