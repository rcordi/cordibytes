import React, { useEffect, useState } from "react"

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    handleScroll() // check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[999] p-3 rounded-full bg-accent text-white shadow-lg
        transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        hover:bg-accent-dark`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
