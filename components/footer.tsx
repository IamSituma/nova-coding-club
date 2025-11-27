"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal-700 border-t border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">

          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">

            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo1.png"
                width={110}
                height={110}
                alt="CodeClub Logo"
              />
            </div>

            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
              Empowering the next generation of tech professionals through quality coding education.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 md:gap-3">
              <a
                href="#"
                className="p-1.5 md:p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 text-white/80 hover:text-white"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="p-1.5 md:p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 text-white/80 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.1 9.1 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.15 0c-2.51 0-4.55 2.06-4.55 4.6 0 .36.04.7.12 1.03A12.94 12.94 0 0 1 1.64.9 4.57 4.57 0 0 0 3 6.1c-.44 0-.85-.13-1.2-.33v.03c0 2.16 1.53 3.96 3.57 4.37a4.5 4.5 0 0 1-2.05.08c.58 1.8 2.26 3.11 4.25 3.15A9.05 9.05 0 0 1 0 18.57a12.8 12.8 0 0 0 6.95 2.03c8.34 0 12.9-6.91 12.9-12.91 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-1.5 md:p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 text-white/80 hover:text-white"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="p-1.5 md:p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 text-white/80 hover:text-white"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-display font-semibold text-white text-sm md:text-base">Programs</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/programs" className="text-white/80 hover:text-white transition-colors">
                  School Coding Club
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-white transition-colors">
                  Web Dev Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-white transition-colors">
                  Mobile Dev Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-white transition-colors">
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-display font-semibold text-white text-sm md:text-base">Company</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-white/80 hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-display font-semibold text-white text-sm md:text-base">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex gap-2 md:gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex gap-2 md:gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span> +256 741 004 466</span>
              </li>
              <li className="flex gap-2 md:gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>info@novageneration.tech</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-white/80">
          <p>&copy; 2025 Nova Coding Club. All rights reserved.</p>

          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
