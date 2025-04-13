"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

export type AnimationVariant = "fadeIn" | "fadeInLeft" | "fadeInRight" | "fadeInUp" | "fadeInDown"

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  once?: boolean
}

export function AnimationWrapper({
  children,
  className = "",
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  // Define animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration, delay },
      },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay },
      },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay },
      },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay },
      },
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay },
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  )
}
