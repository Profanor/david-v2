import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  kicker: string
  title: string
  copy?: string
  className?: string
}

export function SectionHeading({ kicker, title, copy, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 max-w-2xl', className)}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-brand-cyan">{kicker}</p>
      <h2 className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-muted-foreground">{copy}</p>}
    </div>
  )
}
