import React, { useState } from "react"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-accent">Cordibytes</a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
          </nav>
          <div className="flex space-x-4">
            <a href="mailto:rachelcordi@gmail.com"><FaEnvelope className="hover:text-accent" /></a>
            <a href="https://www.linkedin.com/in/rachelcordi/"><FaLinkedin className="hover:text-accent" /></a>
            <a href="https://github.com/rcordi"><FaGithub className="hover:text-accent" /></a>
          </div>
        </div>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-sm text-center p-6 space-y-4">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="mailto:rachelcordi@gmail.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/rachelcordi/"><FaLinkedin /></a>
            <a href="https://github.com/rcordi"><FaGithub /></a>
          </div>
        </div>
      )}
    </header>
  )
}
