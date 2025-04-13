"use client"
import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

export interface FadeInViewProps {
  children: ReactNode
  variant: "fadeIn" | "fadeInLeft" | "fadeInRight" | "fadeInUp" | "fadeInDown"
  delay: number
  className?: string
}

export function FadeInView({ children, variant, delay, className = "" }: FadeInViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={`animate-${variant} ${className}`}
    >
      {children}
    </motion.div>
  )
}