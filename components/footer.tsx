"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <h3 className="font-display font-bold text-lg md:text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CodeClub
            </h3>
            <p className="text-foreground/60 text-xs md:text-sm leading-relaxed">
              Empowering the next generation of tech professionals through quality coding education.
            </p>
            <div className="flex gap-2 md:gap-3">
              <a
                href="#"
                className="p-1.5 md:p-2 bg-background/50 rounded-lg hover:bg-primary/20 transition-colors duration-300 text-foreground/60 hover:text-primary"
              >
                <Facebook size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a
                href="#"
                className="p-1.5 md:p-2 bg-background/50 rounded-lg hover:bg-primary/20 transition-colors duration-300 text-foreground/60 hover:text-primary"
              >
                <Twitter size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a
                href="#"
                className="p-1.5 md:p-2 bg-background/50 rounded-lg hover:bg-primary/20 transition-colors duration-300 text-foreground/60 hover:text-primary"
              >
                <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a
                href="#"
                className="p-1.5 md:p-2 bg-background/50 rounded-lg hover:bg-primary/20 transition-colors duration-300 text-foreground/60 hover:text-primary"
              >
                <Instagram size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base">Programs</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/programs" className="text-foreground/60 hover:text-primary transition-colors">
                  School Coding Club
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-foreground/60 hover:text-primary transition-colors">
                  Web Dev Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-foreground/60 hover:text-primary transition-colors">
                  Mobile Dev Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-foreground/60 hover:text-primary transition-colors">
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base">Company</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-foreground/60 hover:text-primary transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex gap-2 md:gap-3 text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex gap-2 md:gap-3 text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+256 700 000 000</span>
              </li>
              <li className="flex gap-2 md:gap-3 text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>info@codeclub.ug</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-foreground/60">
          <p>&copy; 2025 CodeClub. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
