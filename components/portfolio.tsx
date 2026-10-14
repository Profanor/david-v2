'use client'

import { useReducedMotion } from 'framer-motion'
import { Header } from '@/components/sections/header'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { CertificationsSection } from '@/components/sections/certifications-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ArticlesSection } from '@/components/sections/articles-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/sections/footer'

export function Portfolio() {
  const shouldReduceMotion = useReducedMotion()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="site-grid" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-indigo" />
        <div className="orb orb-cyan" />
      </div>

      <Header onScrollTo={scrollTo} />
      <HeroSection onScrollTo={scrollTo} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <ContactSection />
      <Footer onScrollTo={scrollTo} />
    </main>
  )
}
