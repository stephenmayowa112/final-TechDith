"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface StaggeredScrollProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  threshold?: number
  once?: boolean
}

export function StaggeredScroll({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
  threshold = 0.1,
  once = true,
}: StaggeredScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  })

  const container = {
    hidden: { opacity: 1 }, // Keep opacity 1 to prevent layout shift
    visible: {
      opacity: 1,
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Important: We're NOT adding any extra divs that would break the grid layout
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {React.Children.map(children, (child) => {
        // Apply animation variants directly to the child without adding extra divs
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...(typeof child.props === "object" ? child.props : {}),
            variants: item,
            initial: "hidden",
            animate: undefined, // Let the parent control the animation
          } as any)
        }
        return child
      })}
    </motion.div>
  )
}
