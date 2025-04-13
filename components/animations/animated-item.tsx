"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedItemProps {
  children: ReactNode
  className?: string
  variant?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn"
}

export function AnimatedItem({ children, className = "", variant = "fadeInUp" }: AnimatedItemProps) {
  let variants: {
    hidden: { opacity: number; x?: number; y?: number; scale?: number };
    visible: { opacity: number; x?: number; y?: number; scale?: number; transition: { duration: number } };
  } = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  if (variant === "fadeInUp") {
    variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    }
  } else if (variant === "fadeInDown") {
    variants = {
      hidden: { opacity: 0, y: -20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    }
  } else if (variant === "fadeInLeft") {
    variants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      },
    }
  } else if (variant === "fadeInRight") {
    variants = {
      hidden: { opacity: 0, x: 20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      },
    }
  } else if (variant === "scaleIn") {
    variants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      },
    }
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

