"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, X } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const allPrograms = [
    {
      title: "School Coding Club",
      duration: "12 Weeks",
      price: "250,000",
      level: "Beginner",
      description: "Perfect for high school students looking to learn programming fundamentals.",
      features: [
        "Python Basics",
        "Web Development",
        "Project Portfolio",
        "Career Guidance",
        "3 hours/week",
        "In-Person & Online",
      ],
      image: "/school.png",
      slug: "school-coding-club",
      category: "web-development",
    },
    {
      title: "Bootcamp - Web Development",
      duration: "8 Weeks",
      price: "450,000",
      level: "Advanced",
      description: "Intensive bootcamp to become a full-stack web developer ready for the job market.",
      features: ["React & Vue", "Node.js & Express", "Databases", "Deployment", "4-5 days/week", "Hands-on Projects"],
      image: "/web.jpg",
      slug: "web-development-bootcamp",
      category: "web-development",
    },
    {
      title: "Bootcamp - Mobile Development",
      duration: "16 Weeks",
      price: "850,000",
      level: "Advanced",
      description: "Master mobile app development for iOS and Android platforms.",
      features: ["React Native", "Flutter", "APIs", "App Publishing", "4-5 days/week", "Portfolio Projects"],
      image: "/app.jpg",
      slug: "mobile-development-bootcamp",
      category: "mobile-development",
    },
    {
      title: "Get Started with Python",
      duration: "8 Weeks",
      price: "400,000",
      level: "Intermediate",
      description: "Deep dive into Python for data science and automation.",
      features: ["Data Structures", "OOP", "Automation", "Best Practices", "2-3 hours/week"],
      image: "/python.jpg",
      slug: "advanced-python",
      category: "web-development",
    },
    {
      title: "UI/UX Design Fundamentals",
      duration: "10 Weeks",
      price: "500,000",
      level: "Beginner",
      description: "Learn design principles and tools for creating beautiful interfaces.",
      features: ["Figma", "Design Principles", "Prototyping", "User Research", "2-3 hours/week"],
      image: "/ui.jpg",
      slug: "ui-ux-design",
      category: "design",
    },
  ]

  const categories = [
    { id: "school-coding-club", name: "School Coding Club", count: 1 },
    { id: "all", name: "All Programs", count: allPrograms.length },
    {
      id: "web-development",
      name: "Web Development",
      count: allPrograms.filter((p) => p.category === "web-development").length,
    },
    {
      id: "mobile-development",
      name: "Mobile Development",
      count: allPrograms.filter((p) => p.category === "mobile-development").length,
    },
    {
      id: "design",
      name: "Design",
      count: allPrograms.filter((p) => p.category === "design").length,
    },
  ]

  const filteredPrograms =
    selectedCategory === "all"
      ? allPrograms
      : selectedCategory === "school-coding-club"
        ? allPrograms.filter((p) => p.slug === "school-coding-club")
        : allPrograms.filter((p) => p.category === selectedCategory)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-6 md:pt-8">
        {/* Hero */}
        <section className="py-12 md:py-24 px-4 bg-teal-100">
  <div className="max-w-6xl mx-auto">
    <h1 className="font-display font-bold text-4xl md:text-2xl mb-6 text-foreground">
      Our Programs
    </h1>
    <p className="text-lg text-foreground/70 leading-relaxed">
      Choose from our comprehensive range of coding programs designed for every skill level. From
      school-friendly clubs to intensive bootcamps, we have something for everyone.
    </p>
  </div>
</section>


        {/* Filter Section */}
        <section className="py-12 px-4 bg-secondary/5 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground border border-primary"
                      : "bg-secondary/30 text-foreground border border-border hover:border-primary/50 hover:bg-secondary/50"
                  }`}
                >
                  {cat.name}
                  <span className="text-sm opacity-70">({cat.count})</span>
                  {selectedCategory === cat.id && <X size={16} />}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Programs by Category */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                {selectedCategory === "all" ? "All Programs" : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-foreground/60 mt-2">Showing {filteredPrograms.length} program(s)</p>
            </div>

            {filteredPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((prog, idx) => (
                  <Link
                    key={idx}
                    href={`/programs/${prog.slug}`}
                    className="card-bend bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    <img src={prog.image || "/placeholder.svg"} alt={prog.title} className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display font-bold text-xl text-foreground flex-1">{prog.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                            prog.level === "Beginner"
                              ? "bg-green-500/20 text-green-400"
                              : prog.level === "Intermediate"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {prog.level}
                        </span>
                      </div>
                      <p className="text-foreground/60 text-sm mb-4">{prog.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6 flex-1">
                        {prog.features.map((feature, fIdx) => (
                          <p key={fIdx} className="text-sm text-foreground/70 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {feature}
                          </p>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="space-y-3 border-t border-border pt-4 mb-6">
                        <div className="flex justify-between">
                          <span className="text-foreground/60">Duration:</span>
                          <span className="font-semibold text-foreground">{prog.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground/60">Price:</span>
                          <span className="font-semibold text-primary">UGX {prog.price}</span>
                        </div>
                      </div>

                      <button className="mt-4 md:mt-6 w-full py-2.5 md:py-3 bg-teal-600 text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                        Enroll Now <ArrowRight size={18} />
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-foreground/60 text-lg">No programs found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-4 bg-secondary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Not sure which program is right for you?
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Chat with our advisors to find the perfect match for your goals and schedule.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              Schedule a Free Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
