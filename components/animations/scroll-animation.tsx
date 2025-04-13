"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

type AnimationType = "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "flip"

interface ScrollAnimationProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
  margin?: string
  preserveLayout?: boolean
}

export function ScrollAnimation({
  children,
  type = "fadeIn",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.2,
  once = true,
  margin = "0px",
  preserveLayout = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin,
  })

  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: type === "slideUp" ? 50 : type === "slideDown" ? -50 : 0,
      x: type === "slideLeft" ? 50 : type === "slideRight" ? -50 : 0,
      scale: type === "scale" ? 0.8 : 1,
      rotateY: type === "flip" ? 90 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  // If preserveLayout is true, we'll use layout="position" to maintain the original layout
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      layout={preserveLayout ? "position" : false}
    >
      {children}
    </motion.div>
  )
}
