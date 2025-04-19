"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface AnimatedHeadingProps {
  children: ReactNode
  className?: string
  underline?: boolean
}

export function AnimatedHeading({ children, className = "", underline = true }: AnimatedHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {underline ? (
        <span className="inline-block pb-0 border-b-2 border-secondary relative">
        {children}
        <motion.span
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-0 h-1 bg-secondary"
        />
      </span>
      ) : (
        children
      )}
    </motion.h2>
  )
}

