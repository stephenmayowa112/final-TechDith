"use client"

import { useEffect, useState, type ReactNode } from "react"
import { FadeInView } from "./fade-in-view"
import { SlideInSection } from "./slide-in-section"

interface ResponsiveAnimationProps {
  children: ReactNode
  className?: string
  mobileVariant?: "fadeIn" | "fadeInUp"
  desktopVariant?: "fadeInLeft" | "fadeInRight"
  delay?: number
}

export function ResponsiveAnimation({
  children,
  className = "",
  mobileVariant = "fadeIn",
  desktopVariant = "fadeInLeft",
  delay = 0,
}: ResponsiveAnimationProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on mount
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Use appropriate animation based on device
  if (isMobile) {
    return (
      <FadeInView
        variant={mobileVariant as "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight"}
        delay={delay}
        className={className}
      >
        {children}
      </FadeInView>
    )
  }

  // For desktop, use directional animations
  return (
    <SlideInSection direction={desktopVariant === "fadeInLeft" ? "left" : "right"} delay={delay} className={className}>
      {children}
    </SlideInSection>
  )
}
