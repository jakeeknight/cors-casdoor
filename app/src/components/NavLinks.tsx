import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

export default function NavLinks(): JSX.Element {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "FAQs", href: "#faqs" },
  ]

  return (
    <div className="hidden lg:flex lg:gap-10">
      {navLinks.map(({ label, href }, index) => (
        <Link
          key={label}
          href={href}
          className="relative rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors delay-150 hover:text-slate-900 hover:delay-[0ms]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-slate-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{label}</span>
        </Link>
      ))}
    </div>
  )
}
