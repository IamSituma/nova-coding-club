"use client"

import { useEffect, useState } from "react"

export default function Partners() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const partners = [
    { name: "Lincoln High School", logo: "/generic-school-logo.png" },
    { name: "Tech Innovation Hub", logo: "/tech-hub-logo.png" },
    { name: "St. Mary Secondary", logo: "/secondary-school-logo.jpg" },
    { name: "Digital Minds Academy", logo: "/generic-academy-logo.png" },
    { name: "Future Leaders Institute", logo: "/generic-institute-logo.png" },
    { name: "CodeWorks Studio", logo: "/code-studio-logo.jpg" },
  ]

  const itemsPerSlide = 4
  const totalSlides = Math.ceil(partners.length / itemsPerSlide)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalSlides])

  const visiblePartners = [...partners, ...partners]

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-3 md:mb-4 text-foreground">Our Partners</h2>
            <p className="text-foreground/60 text-base md:text-lg">
              Trusted by leading schools and organizations across the region.
            </p>
          </div>

          {/* Auto-scrolling Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-6 auto-scroll">
              {visiblePartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-32 md:w-48 bg-white border border-border rounded-lg p-4 md:p-6 flex items-center justify-center h-20 md:h-24 hover:border-primary/50 transition-all duration-300"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
