"use client"

// Remove the delay import from framer-motion
import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

// Update scaleIn definition
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (customDelay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: customDelay },
  }),
}

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInRight" | "fadeInLeft" | "scaleIn"
}

export function AnimatedSection({ children, className = "", delay = 0, variant = "fadeIn" }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Define fadeIn variant locally to include the 'y' property
  let variants: { hidden: { opacity: number; y?: number; x?: number; scale?: number }; visible: { opacity: number; y?: number; x?: number; scale?: number; transition: { duration: number; delay: number } } } = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  }

  // Import variants dynamically to avoid circular dependencies
  if (variant === "fadeInUp") {
    variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      },
    }
  } else if (variant === "fadeInDown") {
    variants = {
      hidden: { opacity: 0, y: -20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      },
    }
  } else if (variant === "fadeInLeft") {
    variants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay },
      },
    }
} else if (variant === "scaleIn") {
    variants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: delay },
      },
    }
}

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

