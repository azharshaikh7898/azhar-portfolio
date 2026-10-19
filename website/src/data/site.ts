// ===== EDIT THIS FILE to customise links, prices, projects and skills =====
export const links = {
  github: 'https://github.com/azharshaikh7898',
  linkedin: 'https://linkedin.com/in/azhar-shaikh-a2120924a',
  email: '', // e.g. 'you@example.com' (empty = hidden)
  kworksProfile: 'https://kwork.com/user/azharshaikhshaikh78', // paste your Kworks profile URL (empty = hidden)
}

// Shown as a badge in the hero. Set to '' to hide it.
export const availability = ''
export const currency = '$'

export type Service = { title: string; icon: 'terminal' | 'flask' | 'box'; scope: string; deliverables: string[]; startingPrice: number; kworksUrl: string }
export const services: Service[] = [
  { title: 'Python & Bash Automation', icon: 'terminal', scope: 'Automate repetitive manual work on Linux or Windows with readable, documented scripts.',
    deliverables: ['Automation scripts', 'File organising and log analysis', 'Generated reports', 'Usage README'], startingPrice: 15, kworksUrl: '' },
  { title: 'REST API Testing with Postman', icon: 'flask', scope: 'Test your API endpoints, status codes and JSON responses with repeatable collections.',
    deliverables: ['Postman collection', 'Positive and negative test cases', 'Automated assertions', 'Test report'], startingPrice: 20, kworksUrl: '' },
  { title: 'Dockerize a Web Application', icon: 'box', scope: 'Containerize a Flask, FastAPI or similar app so it runs the same everywhere.',
    deliverables: ['Dockerfile', 'Docker Compose setup', 'Env-based configuration', 'Run instructions and basic troubleshooting'], startingPrice: 25, kworksUrl: '' },
]

export type Project = { title: string; category: 'Full Stack' | 'AI' | 'DevOps' | 'Backend' | 'Automation' | 'Testing' | 'Docker'; featured?: boolean; status?: 'Demo' | 'Work in progress'; description: string; tech: string[]; features?: string[]; path?: string; repo?: string; demo?: string }
const gh = 'https://github.com/azharshaikh7898/'
export const projects: Project[] = [
  { title: 'This Portfolio Website', category: 'Full Stack', featured: true, description: 'Responsive, accessible portfolio with dark/light theme, filterable project cards and a data-driven content layer.', tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: ['Typed data model in one file', 'Mobile-first responsive layout', 'Theme toggle with persisted preference'], repo: gh + 'azhar-portfolio' },
  // Real repositories. Add `features`, more `tech` and a `demo` URL to any card once you want to show more detail.
  { title: 'AI-Powered Mock Interview Platform', category: 'AI', featured: true, description: 'An AI-powered platform for practising mock interviews.', tech: ['AI'], repo: gh + 'mock' },
  { title: 'RecipeHub - AI Food Recognition App', category: 'AI', featured: true, description: 'An app that uses AI to recognise food.', tech: ['AI', 'Food Recognition'], repo: gh + 'recipe_hub' },
  { title: 'Self-Healing CI/CD Pipeline', category: 'DevOps', featured: true, description: 'A CI/CD pipeline built to recover from failures on its own.', tech: ['CI/CD', 'DevOps'], repo: gh + 'canary' },
  { title: 'Media Processing Microservice', category: 'Backend', featured: true, description: 'A microservice that converts video to audio.', tech: ['Microservice', 'Media'], repo: gh + 'video-to-audio' },
  { title: 'Streamlined DevSecOps Pipeline', category: 'DevOps', featured: true, description: 'A DevSecOps pipeline project built around a Netflix-clone app.', tech: ['DevSecOps', 'CI/CD'], repo: gh + 'netflix-clone-' },
  { title: 'Python & Bash Automation Toolkit', category: 'Automation', status: 'Work in progress', path: 'demos/automation-toolkit',
    description: 'Three small command-line tools for everyday sysadmin chores.', tech: ['Python', 'Bash', 'Linux'],
    features: ['File organizer by extension (dry-run mode)', 'Linux system health checker', 'Log analyzer with status and error summary'] },
  { title: 'REST API Testing Framework', category: 'Testing', status: 'Work in progress', path: 'demos/api-testing',
    description: 'Postman collection run against a public practice API.', tech: ['Postman', 'REST', 'JSON'],
    features: ['Positive and negative test cases', 'Status code and JSON validation', 'Automated assertions', 'CLI report via Newman'] },
  { title: 'Dockerized Web Application', category: 'Docker', status: 'Work in progress', path: 'demos/dockerized-flask',
    description: 'Small Flask service packaged for containers.', tech: ['Flask', 'Docker', 'Compose'],
    features: ['Health endpoint', 'Environment-variable configuration', 'Dockerfile and Compose file', 'Setup instructions'] },
]

// Ordered to lead with web-development skills.
export const skills: Record<string, string[]> = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'],
  'Backend & APIs': ['REST APIs', 'Flask', 'FastAPI', 'Postman', 'API testing'],
  Databases: ['PostgreSQL', 'MySQL', 'SQL'],
  'Version Control & Tools': ['Git', 'GitHub', 'Linux', 'Bash'],
  'CI/CD & Cloud': ['GitHub Actions', 'Jenkins', 'Docker', 'AWS', 'GCP (exposure)', 'Kubernetes', 'Helm'],
  'Testing & Quality': ['Selenium', 'Playwright', 'Trivy', 'SonarQube'],
  'Currently Learning': ['Next.js', 'Node.js', 'Express.js'], // remove any you are not actually learning
}
