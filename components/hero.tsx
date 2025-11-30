"use client"

import { ArrowRight, Terminal } from "lucide-react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <Navbar />
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
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-white text-[#009696] rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  Get Started <ArrowRight size={20} />
                </button>
                <a
                  href="/programs"
                  className="px-8 py-4 bg-transparent text-white border border-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-background rounded-2xl max-w-2xl w-full p-8 md:p-12 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-foreground text-lg font-bold hover:text-red-500 transition-all"
            >
              ✕
            </button>

            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6 text-foreground">
              Register for a Program
            </h2>

            <form className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <label className="block text-foreground font-medium">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+256 700 000 000"
                    className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Program Selection */}
              <div className="space-y-4">
                <label className="block text-foreground font-medium">Program Selection *</label>
                <select className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors">
                  <option value="">Select a program</option>
                  <option value="school">School Coding Club - UGX 450,000</option>
                  <option value="webdev">Bootcamp - Web Development - UGX 850,000</option>
                  <option value="mobiledev">Bootcamp - Mobile Development - UGX 850,000</option>
                  <option value="python">Advanced Python - UGX 400,000</option>
                  <option value="design">UI/UX Design - UGX 500,000</option>
                  <option value="data">Data Science - UGX 700,000</option>
                </select>
              </div>

              {/* Experience Level */}
              <div className="space-y-4">
                <label className="block text-foreground font-medium">Your Current Experience Level *</label>
                <select className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors">
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner - No coding experience</option>
                  <option value="intermediate">Intermediate - Some coding knowledge</option>
                  <option value="advanced">Advanced - Professional experience</option>
                </select>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <label className="block text-foreground font-medium">What are your goals? (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your learning goals..."
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    className="mt-1 w-4 h-4 bg-secondary/30 border border-border rounded cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-foreground/70 text-sm cursor-pointer">
                    I agree to the terms and conditions and would like to receive updates about CodeClub programs.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-400/50 transition-all duration-300 text-lg"
              >
                Complete Registration
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
