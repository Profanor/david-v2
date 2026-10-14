'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/data/portfolio-data'
import { reveal } from '@/lib/animations'

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
        <SectionHeading
          kicker="The toolkit"
          title="Built for the hard parts."
          copy="A practical, evolving set of tools for taking a system from first commit to dependable production."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ label, icon: Icon, skills, level }) => (
            <div key={label} className="skill-card panel-border">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="icon-box">
                    <Icon size={17} />
                  </span>
                  <h3 className="font-mono text-sm text-foreground">{label}</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{level}%</span>
              </div>

              <div className="mb-6 h-1 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15 }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-indigo to-brand-cyan"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
