import { BriefcaseBusiness } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { certifications } from '@/data/portfolio-data'

export function CertificationsSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading kicker="Proof of practice" title="Always learning, always shipping." />
      <div className="grid gap-4 sm:grid-cols-3">
        {certifications.map((cert, index) => (
          <div key={cert} className="cert-card panel-border">
            <div className="mb-8 flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-xl border border-brand-indigo/30 bg-brand-indigo/10 text-brand-cyan">
                <BriefcaseBusiness size={18} />
              </span>
              <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
            </div>
            <h3 className="font-mono text-sm text-foreground">{cert}</h3>
            <p className="mt-2 text-xs text-muted-foreground">Certification · verified</p>
          </div>
        ))}
      </div>
    </section>
  )
}
