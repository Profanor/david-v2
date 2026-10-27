'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { coreStrengths } from '@/data/portfolio-data'
import { reveal } from '@/lib/animations'

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <SectionHeading
          kicker="About the work"
          title="I make complexity feel simple."
          copy="My work lives at the intersection of product intent and technical reality. I care about the small decisions that make systems easier to understand, safer to change, and more pleasant to operate."
        />

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="profile-card panel-border">
            <div className="profile-mark">DA</div>
            <div className="mt-auto">
              <p className="font-mono text-xs text-brand-cyan">Based in Ajah, Lagos · working globally</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Distributed systems, resilient fintech infrastructure, and real-time applications.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="stat-card">
              <p className="stat-number">04<span>+</span></p>
              <p className="stat-label">Years experience</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">04</p>
              <p className="stat-label">Industries worked in</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">∞</p>
              <p className="stat-label">Curiosity about systems</p>
            </div>

            <div className="col-span-full panel-border rounded-2xl bg-card/45 p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Core strengths
              </p>
              <div className="flex flex-wrap gap-2">
                {coreStrengths.map((strength) => (
                  <span key={strength} className="strength-chip">
                    <Check size={13} />
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
