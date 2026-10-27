'use client'

import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowUpRight, Circle, Sparkles } from 'lucide-react'
import { reveal } from '@/lib/animations'

interface HeroSectionProps {
  onScrollTo: (id: string) => void
}

const primaryTech = ['Node.js', 'TypeScript', 'AWS', 'PostgreSQL'] as const

export function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section id="top" className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-6xl items-center px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={reveal}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="status-dot" /> Available for select opportunities
          </div>
          <p className="mb-5 font-mono text-sm text-brand-cyan">Hello, I&apos;m David Arinze.</p>
          <h1 className="max-w-4xl font-mono text-5xl font-semibold leading-[1.05] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-8xl">
            I build the systems behind <span className="text-gradient">what&apos;s next.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            Senior backend engineer crafting reliable platforms, thoughtful APIs, and infrastructure that helps ambitious teams move with confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button onClick={() => onScrollTo('projects')} className="button-primary">
              View projects <ArrowUpRight size={16} />
            </button>
            <a
              href="/David_Arinze_CV.pdf"
              download="David_Arinze_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              Download resume <ArrowDownToLine size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {primaryTech.map((tech) => (
              <span key={tech} className="tech-badge">
                <Circle size={7} className="fill-brand-cyan text-brand-cyan" />
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="hero-console panel-border">
            <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-brand-cyan/70" />
                <span className="size-2.5 rounded-full bg-brand-indigo/70" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">david@studio ~ %</span>
            </div>
            <div className="space-y-5 p-6 font-mono text-xs leading-6">
              <p className="text-muted-foreground"><span className="text-brand-cyan">const</span> engineer = {'{'}</p>
              <p className="pl-5 text-muted-foreground">focus: <span className="text-foreground">&quot;distributed systems&quot;</span>,</p>
              <p className="pl-5 text-muted-foreground">principles: [<span className="text-foreground">&quot;clarity&quot;</span>, <span className="text-foreground">&quot;durability&quot;</span>],</p>
              <p className="pl-5 text-muted-foreground">status: <span className="text-brand-cyan">true</span>,</p>
              <p className="text-muted-foreground">{'}'}</p>
              <div className="mt-8 h-px bg-border/70" />
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-2xl text-foreground">04<span className="text-brand-cyan">+</span></p>
                  <p className="text-[10px] text-muted-foreground">years shipping</p>
                </div>
                <div>
                  <p className="text-2xl text-foreground">25<span className="text-brand-cyan">%</span></p>
                  <p className="text-[10px] text-muted-foreground">latency improved</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-5 rounded-xl border border-brand-cyan/25 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-lg">
            <p className="font-mono text-[10px] text-muted-foreground">CURRENTLY EXPLORING</p>
            <p className="mt-1 text-xs text-foreground">
              Durable event systems <Sparkles size={12} className="ml-1 inline text-brand-cyan" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
