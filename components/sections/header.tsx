'use client'

import { useState } from 'react'
import { Menu, Terminal, X } from 'lucide-react'
import { navItems } from '@/data/portfolio-data'

interface HeaderProps {
  onScrollTo: (id: string) => void
}

export function Header({ onScrollTo }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (item: string) => {
    onScrollTo(item.toLowerCase())
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 lg:px-8">
        <button
          onClick={() => handleNavClick('top')}
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-brand-indigo/40 bg-brand-indigo/15 text-brand-cyan shadow-[0_0_24px_color-mix(in_oklab,var(--brand-indigo)_24%,transparent)]">
            <Terminal size={17} />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">
            david<span className="text-brand-cyan">.dev</span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="nav-link"
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border/60 px-6 py-4 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="block w-full py-3 text-left text-sm text-muted-foreground"
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
