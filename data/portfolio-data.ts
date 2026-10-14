import {
  Code2,
  Database,
  Globe2,
  Network,
  Server,
  type LucideIcon,
} from 'lucide-react'

export interface SkillGroup {
  label: string
  icon: LucideIcon
  skills: string[]
  level: number
}

export interface ProjectMetric {
  label: string
  val: string
}

export interface Project {
  eyebrow: string
  title: string
  description: string
  stack: string[]
  features: string[]
  accent: 'indigo' | 'cyan' | 'violet'
  visualLabel: string
  metrics: ProjectMetric[]
  githubUrl?: string
  liveUrl?: string
}

export interface ExperienceItem {
  company: string
  role: string
  duration: string
  copy: string
  achievements: string[]
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface Article {
  date: string
  title: string
  read: string
  tag: string
}

export const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'] as const

export const skillGroups: SkillGroup[] = [
  { label: 'Backend', icon: Server, skills: ['Node.js', 'NestJS', 'Express', 'TypeScript'], level: 92 },
  { label: 'Databases', icon: Database, skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'], level: 86 },
  { label: 'Cloud & DevOps', icon: Globe2, skills: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD'], level: 84 },
  { label: 'Frontend', icon: Code2, skills: ['React', 'Next.js', 'Tailwind'], level: 76 },
  { label: 'Architecture', icon: Network, skills: ['Microservices', 'REST APIs', 'gRPC', 'WebSockets', 'Event-driven systems'], level: 90 },
]

export const projects: Project[] = [
  {
    eyebrow: '01 / GAME BACKEND',
    title: 'Project-LOS Game API Server',
    description: 'A multiplayer game API handling authorization for testers and game clients with secure, low-latency communication.',
    stack: ['Node.js', 'Express', 'MongoDB', 'WebSocket'],
    features: ['Secure tester and client access', 'Real-time multiplayer communication'],
    accent: 'indigo',
    visualLabel: 'LIVE SYSTEM / 2024',
    metrics: [
      { label: 'throughput', val: 'stable' },
      { label: 'latency', val: 'low' },
      { label: 'uptime', val: '99.99' },
    ],
  },
  {
    eyebrow: '02 / AI PLATFORM',
    title: 'CodeWarden AI Assistant',
    description: 'An AI-powered backend assistant that automates engineering workflows through conversational interactions and modular agent services.',
    stack: ['NestJS', 'OpenAI API', 'Redis', 'PostgreSQL'],
    features: ['Dedicated LLM and memory modules', 'Dockerized service architecture'],
    accent: 'cyan',
    visualLabel: 'AI AGENTS / 2024',
    metrics: [
      { label: 'pipeline', val: 'modular' },
      { label: 'memory', val: 'redis' },
      { label: 'evals', val: 'passing' },
    ],
  },
  {
    eyebrow: '03 / FINTECH (LIVE ON APP & PLAY STORES)',
    title: 'EvPay',
    description: 'Production fintech mobile app where I served as the sole backend engineer from start to finish. Architected end-to-end money transfer flows, payment provider integrations, and a decoupled configurable fee engine calculating platform fees, provider costs, VAT, and stamp duty.',
    stack: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
    features: [
      'Configurable fee engine isolating provider costs, platform fees, VAT & stamp duty',
      'Idempotency safeguards & validation preventing duplicate financial transfers',
      'Resilient payment provider integrations with structured error handling & logging',
      'Scalable service boundaries & clean API contracts for seamless mobile integration',
    ],
    accent: 'violet',
    visualLabel: 'APP STORE & PLAY STORE',
    metrics: [
      { label: 'transfers', val: 'idempotent' },
      { label: 'fee_engine', val: 'dynamic' },
      { label: 'role', val: 'sole backend' },
    ],
  },
]

export const experience: ExperienceItem[] = [
  { company: 'BullAfric International', role: 'Backend Engineer · Contract, Remote', duration: 'Jan 2026 — Present', copy: 'Re-architecting a legacy fintech backend into modular NestJS services and designing wallet infrastructure for KYC, provider integrations, transaction lifecycles, and reconciliation.', achievements: ['Building country-aware KYC routing for regulatory rules', 'Resolving production transaction failures with minimal downtime'] },
  { company: 'Santos Estate Limited', role: 'Full Stack Developer · Contract, Remote', duration: 'Oct 2025 — Mar 2026', copy: 'Designed the full system architecture for a property platform with a scalable NestJS backend, Prisma, secure APIs, and a React + TailwindCSS web application.', achievements: ['Built secure digital document uploads and validation', 'Created reusable cards, tables, forms, and modals'] },
  { company: 'Eulav', role: 'Backend Engineer · Contract, Remote', duration: 'Apr 2025 — Jun 2025', copy: 'Led the refactor of a KYC verification system and integrated Dojah APIs for NIN, BVN, and address verification.', achievements: ['Increased verification success rates by 25%', 'Unified legacy MySQL data with Prisma ORM'] },
  { company: 'Lordwin Group', role: 'Backend Engineer · Hybrid', duration: 'Jan 2025 — Present', copy: 'Designing and maintaining gRPC-based distributed microservices for financial and gaming platforms, with a focus on scalability, fault tolerance, and low-latency communication.', achievements: ['Reduced release time by 40% with GitHub Actions and Docker', 'Introduced structured logging, metrics, and health checks'] },
  { company: 'GuruSystems Technology', role: 'Full Stack Developer · Contract, Remote', duration: 'Aug 2024 — Jun 2025', copy: 'Built secure NestJS REST APIs with JWT authentication and migrated the frontend architecture to Next.js.', achievements: ['Improved load time and developer experience', 'Integrated third-party APIs with Chakra UI and RTK Query'] },
  { company: 'Axxon Network Inc', role: 'Game Backend Engineer · Remote', duration: 'Apr 2024 — Sep 2024', copy: 'Designed databases for player profiles, game progress, items, and leaderboards while building REST APIs and WebSocket services.', achievements: ['Reduced response latency by 25%', 'Improved concurrent player handling'] },
  { company: 'Decagon Institute, Lagos', role: 'Software Engineer', duration: 'Oct 2023 — Mar 2024', copy: 'Built full-stack applications with Node.js, React, and TypeScript, focusing on clean architecture and test-driven design.', achievements: ['Improved API response times by 20% with indexing', 'Contributed to Agile sprints and peer reviews'] },
]

export const testimonials: Testimonial[] = [
  { quote: 'David brings rare systems thinking to every conversation. He makes the hard parts feel clear, then ships the right thing.', name: 'Maya Chen', role: 'Engineering Partner' },
  { quote: 'The strongest engineer I have worked with when it comes to balancing elegant architecture with pragmatic delivery.', name: 'Jon Bell', role: 'Founder, Orbit Commerce' },
  { quote: 'David raised the bar for our entire platform team — not just through code, but through calm, precise leadership.', name: 'Rina Patel', role: 'Director of Product' },
]

export const articles: Article[] = [
  { date: 'May 14, 2024', title: 'The shape of a boring, excellent platform', read: '8 min read', tag: 'Architecture' },
  { date: 'Feb 02, 2024', title: 'Designing APIs that age gracefully', read: '6 min read', tag: 'API Design' },
  { date: 'Nov 19, 2023', title: 'What I learned scaling event-driven systems', read: '10 min read', tag: 'Systems' },
]

export const certifications = [
  'Certified Front End Developer',
  'J.P. Morgan Software Engineering Virtual Experience',
  'Scrum Fundamentals Certified',
] as const

export const coreStrengths = [
  'Systems thinking',
  'Technical leadership',
  'API design',
  'Reliability',
  'Mentorship',
  'Product intuition',
] as const
