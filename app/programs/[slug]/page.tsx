"use client"

import { useState, use } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import { Star } from "lucide-react"
import Link from "next/link"
import { programs, Program, Credential } from "@/data/programs"

interface ProgramDetailProps {
  params: Promise<{ slug: string }>
}

export default function ProgramDetail({ params }: ProgramDetailProps) {
  const resolvedParams = use(params)
  const [selectedLevel, setSelectedLevel] = useState("Beginner")
  const [activeTab, setActiveTab] = useState("About")

  // Find program by slug
  const program: Program | undefined = programs.find((p) => p.slug === resolvedParams.slug)

  if (!program) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Program Not Found</h1>
            <p className="text-foreground/70 mb-8">The program you're looking for doesn't exist.</p>
            <Link
              href="/programs"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg"
            >
              Back to Programs
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const filteredCredentials: Credential[] = program.credentials.filter((c) => c.level === selectedLevel)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative">
        {/* Hero */}
        <section className="relative h-[400px] md:h-[650px] w-full">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-center px-4 md:px-32 lg:px-90">
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {program.title}
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl">
              {program.fullDescription}
            </p>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 md:py-24 px-4 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 text-foreground">
              Recommended Credentials
            </h2>

            {/* Level Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedLevel === level
                      ? "bg-foreground text-background"
                      : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

            {filteredCredentials.length > 0 ? (
              filteredCredentials.map((credential, idx) => (
                <div key={idx} className="mb-12">
                  <div className="bg-card border border-border rounded-2xl p-4 md:p-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-64 flex-shrink-0">
                        <img
                          src={credential.image || program.credentialImage || "/web.jpg"}
                          alt={credential.title}
                          className="w-full h-48 md:h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
                          {credential.title}
                        </h3>
                        <p className="text-foreground/70 text-sm md:text-base mb-4">{credential.description}</p>

                        {/* Skills */}
                        <p className="text-sm font-semibold text-foreground/60 mb-2">Skills you'll gain:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {credential.skills.split(",").map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < Math.round(credential.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-foreground/60 text-sm">
                            {credential.rating} ({credential.reviews} reviews)
                          </span>
                        </div>

                        {/* Price + Enroll + WhatsApp */}
                        <div className="flex flex-wrap gap-3 items-center mt-4">
                          <span className="text-foreground font-semibold text-lg md:text-xl">UGX {program.price}</span>
                          <button className="px-4 md:px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm md:text-base">
                            Enroll Here
                          </button>
                          <a
                            href={`https://wa.me/256700000000?text=Hi,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                              program.title
                            )}%20program.`}
                            target="_blank"
                            className="px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all text-sm md:text-base flex items-center gap-2"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-8">
                      <div className="flex flex-wrap gap-3 border-b border-border mb-4">
                        {["About", "Outcomes", "Modules", "Recommendations", "Reviews"].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 font-semibold transition-all ${
                              activeTab === tab
                                ? "border-b-2 border-primary text-primary"
                                : "text-foreground/70 hover:text-primary"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>

                      <div>
                        {activeTab === "About" && (
                          <div className="space-y-8">
                            <div>
                              <h5 className="font-semibold text-lg text-foreground mb-4">What you'll learn</h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {credential.courses.map((course, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <span className="text-green-500 text-xl">✔</span>
                                    <p className="text-foreground">{course.name}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === "Outcomes" && (
                          <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>Build fully functional websites or apps from scratch.</li>
                            <li>Understand programming fundamentals and best practices.</li>
                            <li>Apply responsive design principles and frameworks.</li>
                            <li>Gain confidence to start personal projects or freelance work.</li>
                          </ul>
                        )}

                        {activeTab === "Modules" && (
                          <div className="space-y-4 text-foreground/80">
                            {credential.courses.map((course, idx) => (
                              <div key={idx}>
                                <h6 className="font-semibold">{course.name}</h6>
                                <p>Learn core concepts and hands-on exercises for {course.name}.</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === "Recommendations" && (
                          <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                            <li>After completing this credential, consider advanced courses in your field.</li>
                            <li>Join our coding community to get mentorship and project guidance.</li>
                          </ul>
                        )}

                        {activeTab === "Reviews" && (
                          <div className="space-y-4">
                            {[
                              { name: "Alice M.", rating: 5, comment: "Excellent course! Very beginner-friendly." },
                              { name: "Brian S.", rating: 4, comment: "Great content, learned a lot in 3 weeks." },
                              { name: "Clara T.", rating: 5, comment: "Well-structured and practical." },
                              { name: "David R.", rating: 4, comment: "Good pacing, enjoyed the projects." },
                            ].map((review, idx) => (
                              <div key={idx} className="border border-border rounded-lg p-4 bg-card">
                                <div className="flex items-center mb-2 justify-between">
                                  <span className="font-semibold text-foreground">{review.name}</span>
                                  <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        size={16}
                                        className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-foreground/80 text-sm">{review.comment}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-foreground/60">No credentials available for this level.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <CTA />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/256700000000"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all"
        >
          <span className="font-semibold hidden sm:inline">Contact Us</span>
        </a>
      </main>
      <Footer />
    </>
  )
}
