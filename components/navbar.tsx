"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">  {/* Reduced from h-20 to h-16 */}
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="Hamilton Stone"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-primary">
              Home
            </Link>
            <Link href="/aboutUs" className="text-gray-800 hover:text-primary">
              About Us
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-primary">
              Our Services
            </Link>
            <Link href="/project" className="text-gray-800 hover:text-primary">
              Projects
            </Link>
            <Link href="/blog" className="text-gray-800 hover:text-primary">
              Blog
            </Link>
            <Link href="/lardshare" className="text-gray-800 hover:text-primary">
              Lardshare
            </Link>
            <Link href="/contact-us" className="text-gray-800 hover:text-primary">
              Contact Us
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get A Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-3 px-4 shadow-md"> {/* Reduced padding */}
          <nav className="flex flex-col space-y-3"> {/* Reduced spacing */}
            <Link href="/" className="text-gray-800 hover:text-primary py-1" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-primary py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/our-services"
              className="text-gray-800 hover:text-primary py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              href="/the-difference"
              className="text-gray-800 hover:text-primary py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              The Difference
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-800 hover:text-primary py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              className="bg-primary hover:bg-primary/90 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get A Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

