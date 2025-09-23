import React from "react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center min-h-screen px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Rachel
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10"
      >
        I build modern, performant, and beautiful web applications with React, 
        TypeScript, and data-driven design.
      </motion.p>

      <a
        href="mailto:rachelcordi@gmail.com"
        className="px-8 py-4 rounded-xl border-2 border-accent text-accent text-lg font-medium transition hover:bg-accent hover:text-white"
      >
        Say Hi
      </a>
    </section>
  )
}
