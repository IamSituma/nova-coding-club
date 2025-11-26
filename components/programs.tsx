"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Programs() {
  const [showMore, setShowMore] = useState(false)

  const programs = [
    {
      title: "School Coding Club",
      duration: "12 Weeks",
      price: "450,000",
      description: "Perfect for high school students looking to learn programming fundamentals.",
      features: ["Python Basics", "Web Development", "Project Portfolio", "Career Guidance"],
      image: "/school-coding-club.jpg",
      slug: "school-coding-club",
    },
    {
      title: "Bootcamp - Web Dev",
      duration: "16 Weeks",
      price: "850,000",
      description: "Intensive bootcamp to become a full-stack web developer ready for job market.",
      features: ["Frontend & Backend", "Database Design", "Deployment", "Job Prep"],
      image: "/web-development-bootcamp.jpg",
      slug: "web-development",
    },
    {
      title: "Bootcamp - Mobile Dev",
      duration: "16 Weeks",
      price: "850,000",
      description: "Master mobile app development for iOS and Android platforms.",
      features: ["React Native", "Flutter", "APIs", "App Publishing"],
      image: "/mobile-development-bootcamp.jpg",
      slug: "mobile-development",
    },
  ]

  const additionalPrograms = [
    {
      title: "Advanced Python",
      duration: "8 Weeks",
      price: "400,000",
      description: "Deep dive into Python for data science and automation.",
      image: "/advanced-python.jpg",
      slug: "web-development",
    },
    {
      title: "UI/UX Design",
      duration: "10 Weeks",
      price: "500,000",
      description: "Learn design principles and tools for creating beautiful interfaces.",
      image: "/ui-ux-design-concept.png",
      slug: "design",
    },
    {
      title: "Data Science",
      duration: "12 Weeks",
      price: "700,000",
      description: "Master data analysis, visualization, and machine learning basics.",
      image: "/data-science.jpg",
      slug: "design",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-4 text-foreground">Our Programs</h2>
            <p className="text-foreground/60 text-base md:text-lg">
              Choose from our carefully designed programs tailored to your skill level and goals.
            </p>
          </div>

          {/* Main Programs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, idx) => (
              <Link
                key={idx}
                href={`/programs/${program.slug}`}
                className="card-bend bg-secondary/30 border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg md:text-xl mb-2 text-foreground">{program.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{program.description}</p>
                  <div className="space-y-3 flex-1">
                    <div className="flex justify-between items-center py-2 border-t border-border">
                      <span className="text-foreground/60 text-sm">Duration:</span>
                      <span className="font-semibold text-foreground text-sm">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-border">
                      <span className="text-foreground/60 text-sm">Price:</span>
                      <span className="font-semibold text-primary text-sm">UGX {program.price}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-6 w-full py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                    Register <ArrowRight size={18} />
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Programs */}
          {showMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-500">
              {additionalPrograms.map((program, idx) => (
                <Link
                  key={`additional-${idx}`}
                  href={`/programs/${program.slug}`}
                  className="card-bend bg-secondary/30 border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 flex flex-col cursor-pointer"
                >
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg md:text-xl mb-2 text-foreground">{program.title}</h3>
                    <p className="text-foreground/60 text-sm mb-4">{program.description}</p>
                    <div className="space-y-3 flex-1">
                      <div className="flex justify-between items-center py-2 border-t border-border">
                        <span className="text-foreground/60 text-sm">Duration:</span>
                        <span className="font-semibold text-foreground text-sm">{program.duration}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t border-border">
                        <span className="text-foreground/60 text-sm">Price:</span>
                        <span className="font-semibold text-primary text-sm">UGX {program.price}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-6 w-full py-2.5 md:py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                      Register <ArrowRight size={18} />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* View More Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 md:px-8 py-2.5 md:py-3 bg-secondary/50 border border-primary/50 text-primary rounded-full font-semibold hover:bg-secondary transition-all duration-300 text-sm md:text-base"
            >
              {showMore ? "Show Less Programs" : "View More Programs"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
