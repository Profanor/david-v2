'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Circle,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  Mail,
  Menu,
  Network,
  Send,
  Server,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

const skillGroups = [
  { label: 'Backend', icon: Server, skills: ['Node.js', 'NestJS', 'Express', 'TypeScript'], level: 92 },
  { label: 'Databases', icon: Database, skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'], level: 86 },
  { label: 'Cloud & DevOps', icon: Globe2, skills: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD'], level: 84 },
  { label: 'Frontend', icon: Code2, skills: ['React', 'Next.js', 'Tailwind'], level: 76 },
  { label: 'Architecture', icon: Network, skills: ['Microservices', 'REST APIs', 'gRPC', 'WebSockets', 'Event-driven systems'], level: 90 },
]

const projects = [
  {
    eyebrow: '01 / GAME BACKEND',
    title: 'Project-LOS Game API Server',
    description: 'A multiplayer game API handling authorization for testers and game clients with secure, low-latency communication.',
    stack: ['Node.js', 'Express', 'MongoDB', 'WebSocket'],
    features: ['Secure tester and client access', 'Real-time multiplayer communication'],
    accent: 'indigo',
  },
  {
    eyebrow: '02 / AI PLATFORM',
    title: 'CodeWarden AI Assistant',
    description: 'An AI-powered backend assistant that automates engineering workflows through conversational interactions and modular agent services.',
    stack: ['NestJS', 'OpenAI API', 'Redis', 'PostgreSQL'],
    features: ['Dedicated LLM and memory modules', 'Dockerized service architecture'],
    accent: 'cyan',
  },
  {
    eyebrow: '03 / FINTECH',
    title: 'Imperial Bank',
    description: 'A banking platform focused on secure customer management, wallet transactions, and financial analytics.',
    stack: ['NestJS', 'PostgreSQL', 'AWS', 'Next.js'],
    features: ['Transaction integrity by design', 'Modular, scalable backend systems'],
    accent: 'violet',
  },
]

const experience = [
  { company: 'BullAfric International', role: 'Backend Engineer · Contract, Remote', duration: 'Jan 2026 — Present', copy: 'Re-architecting a legacy fintech backend into modular NestJS services and designing wallet infrastructure for KYC, provider integrations, transaction lifecycles, and reconciliation.', achievements: ['Building country-aware KYC routing for regulatory rules', 'Resolving production transaction failures with minimal downtime'] },
  { company: 'Santos Estate Limited', role: 'Full Stack Developer · Contract, Remote', duration: 'Oct 2025 — Mar 2026', copy: 'Designed the full system architecture for a property platform with a scalable NestJS backend, Prisma, secure APIs, and a React + TailwindCSS web application.', achievements: ['Built secure digital document uploads and validation', 'Created reusable cards, tables, forms, and modals'] },
  { company: 'Eulav', role: 'Backend Engineer · Contract, Remote', duration: 'Apr 2025 — Jun 2025', copy: 'Led the refactor of a KYC verification system and integrated Dojah APIs for NIN, BVN, and address verification.', achievements: ['Increased verification success rates by 25%', 'Unified legacy MySQL data with Prisma ORM'] },
  { company: 'Lordwin Group', role: 'Backend Engineer · Hybrid', duration: 'Jan 2025 — Present', copy: 'Designing and maintaining gRPC-based distributed microservices for financial and gaming platforms, with a focus on scalability, fault tolerance, and low-latency communication.', achievements: ['Reduced release time by 40% with GitHub Actions and Docker', 'Introduced structured logging, metrics, and health checks'] },
  { company: 'GuruSystems Technology', role: 'Full Stack Developer · Contract, Remote', duration: 'Aug 2024 — Jun 2025', copy: 'Built secure NestJS REST APIs with JWT authentication and migrated the frontend architecture to Next.js.', achievements: ['Improved load time and developer experience', 'Integrated third-party APIs with Chakra UI and RTK Query'] },
  { company: 'Axxon Network Inc', role: 'Game Backend Engineer · Remote', duration: 'Apr 2024 — Sep 2024', copy: 'Designed databases for player profiles, game progress, items, and leaderboards while building REST APIs and WebSocket services.', achievements: ['Reduced response latency by 25%', 'Improved concurrent player handling'] },
  { company: 'Decagon Institute, Lagos', role: 'Software Engineer', duration: 'Oct 2023 — Mar 2024', copy: 'Built full-stack applications with Node.js, React, and TypeScript, focusing on clean architecture and test-driven design.', achievements: ['Improved API response times by 20% with indexing', 'Contributed to Agile sprints and peer reviews'] },
]

const testimonials = [
  { quote: 'David brings rare systems thinking to every conversation. He makes the hard parts feel clear, then ships the right thing.', name: 'Maya Chen', role: 'Engineering Partner' },
  { quote: 'The strongest engineer I have worked with when it comes to balancing elegant architecture with pragmatic delivery.', name: 'Jon Bell', role: 'Founder, Orbit Commerce' },
  { quote: 'David raised the bar for our entire platform team — not just through code, but through calm, precise leadership.', name: 'Rina Patel', role: 'Director of Product' },
]

const articles = [
  { date: 'May 14, 2024', title: 'The shape of a boring, excellent platform', read: '8 min read', tag: 'Architecture' },
  { date: 'Feb 02, 2024', title: 'Designing APIs that age gracefully', read: '6 min read', tag: 'API Design' },
  { date: 'Nov 19, 2023', title: 'What I learned scaling event-driven systems', read: '10 min read', tag: 'Systems' },
]

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-brand-cyan">{kicker}</p>
      <h2 className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-muted-foreground">{copy}</p>}
    </div>
  )
}

export function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [testimonial, setTestimonial] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' })
    setMobileOpen(false)
  }

  const nextTestimonial = () => setTestimonial((current) => (current + 1) % testimonials.length)
  const previousTestimonial = () => setTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length)

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="site-grid" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-indigo" />
        <div className="orb orb-cyan" />
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 lg:px-8">
          <button onClick={() => scrollTo('top')} className="group flex items-center gap-3" aria-label="Back to top">
            <span className="grid size-9 place-items-center rounded-xl border border-brand-indigo/40 bg-brand-indigo/15 text-brand-cyan shadow-[0_0_24px_color-mix(in_oklab,var(--brand-indigo)_24%,transparent)]"><Terminal size={17} /></span>
            <span className="font-mono text-sm font-semibold tracking-tight">david<span className="text-brand-cyan">.dev</span></span>
          </button>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="nav-link">{item}</button>)}
          </nav>
          <button onClick={() => setMobileOpen((open) => !open)} className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground md:hidden" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>{mobileOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {mobileOpen && <nav className="border-t border-border/60 px-6 py-4 md:hidden" aria-label="Mobile navigation">{navItems.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="block w-full py-3 text-left text-sm text-muted-foreground">{item}</button>)}</nav>}
      </header>

      <section id="top" className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl items-center px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground"><span className="status-dot" /> Available for select opportunities</div>
            <p className="mb-5 font-mono text-sm text-brand-cyan">Hello, I&apos;m David Arinze.</p>
            <h1 className="max-w-4xl font-mono text-5xl font-semibold leading-[1.05] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-8xl">I build the systems behind <span className="text-gradient">what&apos;s next.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">Senior backend engineer crafting reliable platforms, thoughtful APIs, and infrastructure that helps ambitious teams move with confidence.</p>
            <div className="mt-10 flex flex-wrap gap-3"><button onClick={() => scrollTo('projects')} className="button-primary">View projects <ArrowUpRight size={16} /></button><a href="#contact" className="button-secondary">Download resume <ArrowDownToLine size={16} /></a></div>
            <div className="mt-12 flex flex-wrap gap-2">{['Node.js', 'TypeScript', 'AWS', 'PostgreSQL'].map((tech) => <span key={tech} className="tech-badge"><Circle size={7} className="fill-brand-cyan text-brand-cyan" />{tech}</span>)}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="hero-console panel-border">
              <div className="flex items-center justify-between border-b border-border/70 px-5 py-4"><div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-destructive/70" /><span className="size-2.5 rounded-full bg-brand-cyan/70" /><span className="size-2.5 rounded-full bg-brand-indigo/70" /></div><span className="font-mono text-[10px] text-muted-foreground">david@studio ~ %</span></div>
              <div className="space-y-5 p-6 font-mono text-xs leading-6"><p className="text-muted-foreground"><span className="text-brand-cyan">const</span> engineer = {'{'}</p><p className="pl-5 text-muted-foreground">focus: <span className="text-foreground">&quot;distributed systems&quot;</span>,</p><p className="pl-5 text-muted-foreground">principles: [<span className="text-foreground">&quot;clarity&quot;</span>, <span className="text-foreground">&quot;durability&quot;</span>],</p><p className="pl-5 text-muted-foreground">status: <span className="text-brand-cyan">true</span>,</p><p className="text-muted-foreground">{'}'}</p><div className="mt-8 h-px bg-border/70" /><div className="grid grid-cols-2 gap-4 pt-2"><div><p className="text-2xl text-foreground">03<span className="text-brand-cyan">+</span></p><p className="text-[10px] text-muted-foreground">years shipping</p></div><div><p className="text-2xl text-foreground">25<span className="text-brand-cyan">%</span></p><p className="text-[10px] text-muted-foreground">latency improved</p></div></div></div>
            </div>
            <div className="absolute -bottom-6 -left-5 rounded-xl border border-brand-cyan/25 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-lg"><p className="font-mono text-[10px] text-muted-foreground">CURRENTLY EXPLORING</p><p className="mt-1 text-xs text-foreground">Durable event systems <Sparkles size={12} className="ml-1 inline text-brand-cyan" /></p></div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}><SectionHeading kicker="About the work" title="I make complexity feel simple." copy="My work lives at the intersection of product intent and technical reality. I care about the small decisions that make systems easier to understand, safer to change, and more pleasant to operate." /><div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]"><div className="profile-card panel-border"><div className="profile-mark">DA</div><div className="mt-auto"><p className="font-mono text-xs text-brand-cyan">Based in Ajah, Lagos · working globally</p><p className="mt-2 text-sm text-muted-foreground">Distributed systems, resilient fintech infrastructure, and real-time applications.</p></div></div><div className="grid gap-5 sm:grid-cols-3"><div className="stat-card"><p className="stat-number">03<span>+</span></p><p className="stat-label">Years experience</p></div><div className="stat-card"><p className="stat-number">04</p><p className="stat-label">Industries worked in</p></div><div className="stat-card"><p className="stat-number">∞</p><p className="stat-label">Curiosity about systems</p></div><div className="col-span-full panel-border rounded-2xl bg-card/45 p-6"><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Core strengths</p><div className="flex flex-wrap gap-2">{['Systems thinking', 'Technical leadership', 'API design', 'Reliability', 'Mentorship', 'Product intuition'].map((strength) => <span key={strength} className="strength-chip"><Check size={13} />{strength}</span>)}</div></div></div></div></motion.div></section>

      <section id="skills" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}><SectionHeading kicker="The toolkit" title="Built for the hard parts." copy="A practical, evolving set of tools for taking a system from first commit to dependable production." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map(({ label, icon: Icon, skills, level }) => <div key={label} className="skill-card panel-border"><div className="mb-7 flex items-center justify-between"><div className="flex items-center gap-3"><span className="icon-box"><Icon size={17} /></span><h3 className="font-mono text-sm text-foreground">{label}</h3></div><span className="font-mono text-xs text-muted-foreground">{level}%</span></div><div className="mb-6 h-1 overflow-hidden rounded-full bg-muted"><motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15 }} className="h-full rounded-full bg-gradient-to-r from-brand-indigo to-brand-cyan" /></div><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}</div></div>)}</div></motion.div></section>

      <section id="projects" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8"><SectionHeading kicker="Selected work" title="Systems with a point of view." copy="A few things I&apos;ve helped bring from fuzzy idea to something people can rely on." /><div className="space-y-5">{projects.map((project, index) => <motion.article key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: index * 0.08 } } }} className={`project-card panel-border accent-${project.accent}`}><div className="project-visual"><div className="visual-grid" /><div className="visual-terminal"><span className="text-brand-cyan">{`{`}</span><span> throughput: <b>stable</b>,</span><span> latency: <b>low</b>,</span><span> uptime: <b>99.99</b></span><span className="text-brand-cyan">{`}`}</span></div><span className="visual-label">LIVE SYSTEM / 2024</span></div><div className="flex flex-1 flex-col justify-between p-7 lg:p-9"><div><p className="font-mono text-[10px] tracking-[0.2em] text-brand-cyan">{project.eyebrow}</p><h3 className="mt-4 font-mono text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{project.description}</p><ul className="mt-5 space-y-2 text-sm text-muted-foreground">{project.features.map((feature) => <li key={feature} className="flex items-center gap-2"><Check size={14} className="text-brand-cyan" />{feature}</li>)}</ul></div><div className="mt-8 flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="skill-pill">{tech}</span>)}</div><div className="flex gap-2"><a href="#contact" className="icon-button" aria-label={`View ${project.title} GitHub`}><Code2 size={16} /></a><a href="#contact" className="button-small">Live demo <ExternalLink size={14} /></a></div></div></div></motion.article>)}</div></section>

      <section id="experience" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8"><SectionHeading kicker="Experience" title="A track record of steady momentum." /><div className="relative ml-3 border-l border-border pl-8 sm:ml-10 sm:pl-12">{experience.map((item, index) => <motion.div key={item.company} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.12 }} className="relative mb-12 last:mb-0"><span className="timeline-dot" /><div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1"><h3 className="font-mono text-lg font-semibold text-foreground">{item.company}</h3><span className="font-mono text-xs text-brand-cyan">{item.duration}</span></div><p className="font-medium text-muted-foreground">{item.role}</p><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{item.copy}</p><ul className="mt-4 space-y-2 text-sm text-muted-foreground">{item.achievements.map((achievement) => <li key={achievement} className="flex items-center gap-2"><ArrowUpRight size={14} className="text-brand-cyan" />{achievement}</li>)}</ul></motion.div>)}</div></section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8"><SectionHeading kicker="Proof of practice" title="Always learning, always shipping." /><div className="grid gap-4 sm:grid-cols-3">{['Certified Front End Developer', 'J.P. Morgan Software Engineering Virtual Experience', 'Scrum Fundamentals Certified'].map((cert, index) => <div key={cert} className="cert-card panel-border"><div className="mb-8 flex items-center justify-between"><span className="grid size-11 place-items-center rounded-xl border border-brand-indigo/30 bg-brand-indigo/10 text-brand-cyan"><BriefcaseBusiness size={18} /></span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="font-mono text-sm text-foreground">{cert}</h3><p className="mt-2 text-xs text-muted-foreground">Certification · verified</p></div>)}</div></section>

      <section className="relative z-10 border-y border-border/60 bg-card/20"><div className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><SectionHeading kicker="Kind words" title="Good work is a team sport." /><div className="flex gap-2"><button className="icon-button" onClick={previousTestimonial} aria-label="Previous testimonial"><ChevronLeft size={18} /></button><button className="icon-button" onClick={nextTestimonial} aria-label="Next testimonial"><ChevronRight size={18} /></button></div></div><motion.div key={testimonial} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl"><p className="font-mono text-2xl leading-10 tracking-tight text-foreground sm:text-3xl">&quot;{testimonials[testimonial].quote}&quot;</p><div className="mt-8 flex items-center gap-4"><div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-indigo to-brand-cyan font-mono text-xs font-bold text-primary-foreground">{testimonials[testimonial].name.split(' ').map((name) => name[0]).join('')}</div><div><p className="text-sm font-medium text-foreground">{testimonials[testimonial].name}</p><p className="text-xs text-muted-foreground">{testimonials[testimonial].role}</p></div></div></motion.div></div></section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8"><SectionHeading kicker="From the notebook" title="Notes on building well." /><div className="grid gap-x-6 gap-y-10 md:grid-cols-3">{articles.map((article) => <article key={article.title} className="group"><div className="mb-5 flex items-center justify-between border-b border-border pb-4"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-cyan">{article.tag}</span><span className="text-xs text-muted-foreground">{article.read}</span></div><h3 className="font-mono text-lg leading-7 text-foreground transition-colors group-hover:text-brand-cyan">{article.title}</h3><p className="mt-4 text-xs text-muted-foreground">{article.date}</p></article>)}</div></section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionHeading kicker="Start a conversation" title="Have a good problem? Let&apos;s talk." copy="I&apos;m always interested in thoughtful products, difficult systems problems, and teams who care about how they work." /><div className="space-y-3"><a href="#contact" className="contact-link"><Mail size={17} />Email David</a><a href="https://linkedin.com/in/david-arinze-5766161a1" target="_blank" rel="noreferrer" className="contact-link"><Network size={17} />linkedin.com/in/david-arinze-5766161a1</a><a href="https://github.com/profanor" target="_blank" rel="noreferrer" className="contact-link"><Code2 size={17} />github.com/profanor</a></div></div><form className="panel-border rounded-2xl bg-card/45 p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}><div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Name<input className="form-input" placeholder="Your name" /></label><label className="form-label">Email<input type="email" className="form-input" placeholder="you@company.com" /></label></div><label className="form-label mt-5 block">Message<textarea className="form-input min-h-36 resize-y" placeholder="Tell me a little about what you&apos;re building..." /></label><button type="submit" className="button-primary mt-6">Send message <Send size={16} /></button></form></div></section>

      <footer className="relative z-10 border-t border-border/60"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><p className="font-mono">© 2026 David Arinze. Built with intention.</p><button onClick={() => scrollTo('top')} className="font-mono transition-colors hover:text-brand-cyan">Back to top ↑</button></div></footer>
    </main>
  )
}
