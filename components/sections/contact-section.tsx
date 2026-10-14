'use client'

import { useState } from 'react'
import { Code2, Mail, Network, Send } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )
    window.location.href = `mailto:devportfoliyos@gmail.com?subject=${subject}&body=${body}`
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            kicker="Start a conversation"
            title="Have a good problem? Let's talk."
            copy="I'm always interested in thoughtful products, difficult systems problems, and teams who care about how they work."
          />
          <div className="space-y-3">
            <a href="mailto:devportfoliyos@gmail.com" className="contact-link">
              <Mail size={17} />
              devportfoliyos@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/david-arinze-5766161a1"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <Network size={17} />
              linkedin.com/in/david-arinze-5766161a1
            </a>
            <a
              href="https://github.com/profanor"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <Code2 size={17} />
              github.com/profanor
            </a>
          </div>
        </div>

        <form className="panel-border rounded-2xl bg-card/45 p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-label">
              Name
              <input
                className="form-input"
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
              />
            </label>
            <label className="form-label">
              Email
              <input
                type="email"
                className="form-input"
                placeholder="you@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
              />
            </label>
          </div>

          <label className="form-label mt-5 block">
            Message
            <textarea
              className="form-input min-h-36 resize-y"
              placeholder="Tell me a little about what you're building..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button type="submit" className="button-primary">
              Send message <Send size={16} />
            </button>
            {formSubmitted && (
              <span className="font-mono text-xs text-brand-cyan">Opening your email client...</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
