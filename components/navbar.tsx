"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="MAE Logo" className="h-8 w-auto" />
            </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="font-semibold text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-semibold text-foreground/80 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="font-semibold text-foreground/80 hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/partnerships" className="font-semibold text-foreground/80 hover:text-primary transition-colors">
              Partnerships
            </Link>
            <Link href="/gallery" className="font-semibold text-foreground/80 hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="font-semibold text-foreground/80 hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Register Button */}
          <div className="hidden md:flex gap-4">
            <Link
              href="/register"
              className="px-6 py-2 bg-gradient-to-r from-[#009696] to-[#006f6f] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#009696]/50 transition-all duration-300"
            >
              Register with Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <Link href="/" className="block text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="block text-foreground/80 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="block text-foreground/80 hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/partnerships" className="block text-foreground/80 hover:text-primary transition-colors">
              Partnerships
            </Link>
            <Link href="/gallery" className="block text-foreground/80 hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="block text-foreground/80 hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link
              href="/register"
              className="block px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium text-center"
            >
              Register with Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
