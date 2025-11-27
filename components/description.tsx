"use client"

import { useEffect, useRef } from "react"

export default function Description() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const images = [
    "/projects.jpg",
    "/tutor.jpg",
    "/coding-hands-on-project-laptop.jpg",
    "/#.jpg",
    "/#.jpg",
  ]

  const duplicatedImages = [...images, ...images]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset to start when halfway (where duplicate begins)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="bg-gradient-to-r from-secondary/20 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[400px] md:min-h-[500px]">
          {/* Left side - Text */}
          <div className="space-y-4 md:space-y-6 relative z-10 py-16 md:py-24 px-8 flex flex-col justify-center">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground">Why Choose Nova Coding Club?</h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Nova Coding Club is more than just a coding program. It' a vibrant community of learners and creators dedicated to mastering the digital skills that matter. Whether you’re a student looking to boost your career or a professional aiming to stay ahead, our programs offer the perfect blend of hands-on practice and practical theory.
            </p>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Our instructors come with hands-on experience from top tech companies and startups. They know exactly what skills employers value and tailor our curriculum to match. Join thousands of students who have already advanced their careers with Nova Coding Club.
            </p>
          </div>

          {/* Right side - Images */}
          <div className="relative overflow-hidden h-[300px] md:h-auto">
            {/* Fade gradient on left side - images fade as they approach text */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-20 pointer-events-none bg-gradient-to-r from-secondary/50 via-secondary/50 to-transparent" />

            {/* Scrolling container */}
            <div ref={scrollRef} className="flex gap-3 h-full overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
              {duplicatedImages.map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-64 md:w-95 h-full overflow-hidden">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`CodeClub moment ${(idx % images.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
