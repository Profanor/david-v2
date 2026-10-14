'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/data/portfolio-data'
import { timelineReveal } from '@/lib/animations'

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <SectionHeading kicker="Experience" title="A track record of steady momentum." />

      <div className="relative ml-3 border-l border-border pl-8 sm:ml-10 sm:pl-12">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineReveal(index)}
            className="relative mb-12 last:mb-0"
          >
            <span className="timeline-dot" />
            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
              <h3 className="font-mono text-lg font-semibold text-foreground">{item.company}</h3>
              <span className="font-mono text-xs text-brand-cyan">{item.duration}</span>
            </div>
            <p className="font-medium text-muted-foreground">{item.role}</p>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{item.copy}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-center gap-2">
                  <ArrowUpRight size={14} className="text-brand-cyan" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
