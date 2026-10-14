'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { testimonials } from '@/data/portfolio-data'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((curr) => (curr + 1) % testimonials.length)
  const prev = () => setIndex((curr) => (curr - 1 + testimonials.length) % testimonials.length)

  const active = testimonials[index]
  const initials = active.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <section className="relative z-10 border-y border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading kicker="Kind words" title="Good work is a team sport." />
          <div className="flex gap-2">
            <button className="icon-button" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <button className="icon-button" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-2xl leading-10 tracking-tight text-foreground sm:text-3xl">
            &quot;{active.quote}&quot;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-indigo to-brand-cyan font-mono text-xs font-bold text-primary-foreground">
              {initials}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{active.name}</p>
              <p className="text-xs text-muted-foreground">{active.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
