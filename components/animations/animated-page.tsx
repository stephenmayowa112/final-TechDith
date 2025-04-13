"use client"

import React from "react"
import { motion } from "framer-motion"
import { AnimationWrapper } from "@/components/animations/animation-wrapper"
import type { AnimationVariant } from "@/components/animations/animation-wrapper"
import type { ReactNode } from "react"

interface AnimatedPageProps {
  children: ReactNode
}

export function AnimatedPage({ children }: AnimatedPageProps) {
  // Convert children to array
  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {childrenArray.map((child, index) => {
        // Apply different animations based on element type or position
        let variant: AnimationVariant = "fadeIn"

        // If it's a section element, alternate between fadeIn and fadeInLeft
        if (React.isValidElement(child)) {
          // Type assertion for the element
          const childType = child.type as string | React.JSXElementConstructor<any>
          const childProps = child.props as { className?: string }

          if (
            childType === "section" ||
            (childProps.className &&
              typeof childProps.className === "string" &&
              childProps.className.includes("section"))
          ) {
            variant = index % 2 === 0 ? "fadeIn" : "fadeInLeft"
          }
        }

        return (
          <AnimationWrapper key={index} variant={variant} delay={index * 0.1}>
            {child}
          </AnimationWrapper>
        )
      })}
    </motion.div>
  )
}
