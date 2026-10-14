'use client'

import { motion } from 'framer-motion'
import { Check, Code2, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/data/portfolio-data'
import { cardReveal } from '@/lib/animations'

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <SectionHeading
        kicker="Selected work"
        title="Systems with a point of view."
        copy="A few things I've helped bring from fuzzy idea to something people can rely on."
      />

      <div className="space-y-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardReveal(index)}
            className={`project-card panel-border accent-${project.accent}`}
          >
            <div className="project-visual">
              <div className="visual-grid" />
              <div className="visual-terminal">
                <span className="text-brand-cyan">{`{`}</span>
                {project.metrics.map((m) => (
                  <span key={m.label}> {m.label}: <b>{m.val}</b>,</span>
                ))}
                <span className="text-brand-cyan">{`}`}</span>
              </div>
              <span className="visual-label">{project.visualLabel}</span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-7 lg:p-9">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-brand-cyan">{project.eyebrow}</p>
                <h3 className="mt-4 font-mono text-2xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{project.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check size={14} className="text-brand-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl || '#contact'}
                    className="icon-button"
                    aria-label={`View ${project.title} GitHub`}
                  >
                    <Code2 size={16} />
                  </a>
                  <a
                    href={project.liveUrl || '#contact'}
                    className="button-small"
                  >
                    Live demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
