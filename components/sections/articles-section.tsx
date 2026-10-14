import { SectionHeading } from '@/components/section-heading'
import { articles } from '@/data/portfolio-data'

export function ArticlesSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading kicker="From the notebook" title="Notes on building well." />
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="group">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-cyan">
                {article.tag}
              </span>
              <span className="text-xs text-muted-foreground">{article.read}</span>
            </div>
            <h3 className="font-mono text-lg leading-7 text-foreground transition-colors group-hover:text-brand-cyan">
              {article.title}
            </h3>
            <p className="mt-4 text-xs text-muted-foreground">{article.date}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
