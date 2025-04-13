"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface SlideInSectionProps {
  children: ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  distance?: number
}

export function SlideInSection({
  children,
  className = "",
  direction = "left",
  delay = 0,
  distance = 50,
}: SlideInSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Set initial and animate values based on direction
  let initial = {}
  if (direction === "left") {
    initial = { x: -distance, opacity: 0 }
  } else if (direction === "right") {
    initial = { x: distance, opacity: 0 }
  } else if (direction === "up") {
    initial = { y: distance, opacity: 0 }
  } else if (direction === "down") {
    initial = { y: -distance, opacity: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : initial}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

