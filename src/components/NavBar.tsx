/**
 * NavBar
 *
 * Top navigation bar with section links.
 */

import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const LEFT_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
] as const

const RIGHT_LINKS = [
  { label: "Email", href: "mailto:rachelcordi@gmail.com", Icon: FaEnvelope },
  { label: "GitHub", href: "https://github.com/rcordi", Icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/rachelcordi", Icon: FaLinkedin },
] as const

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] bg-navy">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 h-[72px] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="text-base md:text-lg font-bold tracking-wide text-lightest-slate hover:text-accent transition"
            onClick={() => setOpen(false)}
          >
            cordibytes
          </a>

          <nav className="hidden md:flex items-center gap-3 text-sm">
            {LEFT_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="text-light-slate font-bold hover:text-accent transition">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {RIGHT_LINKS.map(({ label, href, Icon }) => {
            const isExternal = href.startsWith("http")
            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={label}
                className="text-light-slate hover:text-accent transition"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded border border-white/10 hover:border-accent transition text-light-slate"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-4 bg-navy">
          <div className="flex flex-col gap-2">
            {LEFT_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="py-2 text-light-slate hover:text-accent transition"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="my-4 h-px bg-white/10" />

          <div className="flex items-center gap-4">
            {RIGHT_LINKS.map(({ label, href, Icon }) => {
              const isExternal = href.startsWith("http")
              return (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={label}
                  className="text-light-slate hover:text-accent transition"
                  onClick={() => setOpen(false)}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}