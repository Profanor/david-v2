interface FooterProps {
  onScrollTo: (id: string) => void
}

export function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-mono">© 2026 David Arinze. Built with intention.</p>
        <button
          onClick={() => onScrollTo('top')}
          className="font-mono transition-colors hover:text-brand-cyan"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
