"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { buttonHover, buttonTap } from "@/lib/animation-variants"

interface AnimatedButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function AnimatedButton({ href, className = "", children }: AnimatedButtonProps) {
  return (
    <motion.div whileHover={buttonHover} whileTap={buttonTap} className="inline-block">
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  )
}

