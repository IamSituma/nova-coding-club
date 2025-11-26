"use client"

import { ArrowRight, Cpu, Sparkles, Terminal } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-[850px] pt-20 pb-12 md:pt-24 md:pb-16 flex items-center px-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero1.jpg')",
        }}
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col items-start text-left gap-6 md:gap-8">
          <div className="space-y-6 md:space-y-8 max-w-3xl">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-medium text-sm flex items-center gap-2">
                <Terminal size={16} />
                Learn. Code. Grow.
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight text-white">
            Unlock Your Coding Potential at Nova Coding Club
            </h1>

            <p className="text-lg md:text-xl text-white/90 text-balance max-w-2xl leading-relaxed">
            Join our coding communities designed for students and professionals. Whether you're just starting out or looking to level up your skills, we have programs tailored just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <Link
                href="/register"
                className="px-8 py-4 bg-white text-[#009696] rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                href="/programs"
                className="px-8 py-4 bg-transparent text-white border border-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
