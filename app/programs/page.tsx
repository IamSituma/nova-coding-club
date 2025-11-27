"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const allPrograms = [
    {
      title: "School Coding Club",
      duration: "12 Weeks (Per Term)",
      price: "250,000",
      level: "Beginner",
      description: "Perfect for high school students looking to learn programming fundamentals.",
      features: [
        "HTML & CSS Basics",
        "Introduction to JavaScript",
        "Responsive Design Fundamentals",
        "Building a Personal Portfolio",
        "3 hours/week",
        "In-Person",
      ],
      image: "/school.png",
      slug: "school-coding-club",
      category: "web-development",
    },
    {
      title: "Bootcamp - Web Development",
      duration: "8 Weeks",
      price: "450,000",
      level: "Begineer",
      description: "Intensive bootcamp to become a full-stack web developer ready for the job market.",
      features: ["HTML & CSS Foundations", "JavaScript Basics", "Using Git & GitHub for Projects", "Deploying a Simple Website", "3 Days/Week", "In-Person & Online"],
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
      title: "Advanced Python Programming",
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
    {
      title: "Data Science & Analytics",
      duration: "12 Weeks",
      price: "700,000",
      level: "Intermediate",
      description: "Master data analysis, visualization, and machine learning basics.",
      features: ["Python", "Pandas & NumPy", "Visualization", "ML Basics", "3-4 hours/week"],
      image: "/data.jpg",
      slug: "data-science",
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

  const faqs = [
    {
      question: "Do I need prior coding experience to join a bootcamp?",
      answer:
        "No! Our programs cater to beginners as well as advanced learners. Each course clearly lists its prerequisites.",
    },
    {
      question: "Are classes online or in-person?",
      answer:
        "We offer flexible delivery. Some programs are fully online, while others combine online lessons with in-person sessions.",
    },
    {
      question: "What support is available if I get stuck?",
      answer:
        "Our instructors and mentors are available for guidance through chat, email, and scheduled office hours.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Yes, many programs allow installment plans. Contact us to discuss the available payment options.",
    },
    {
      question: "Do you provide a certificate?",
      answer:
        "Yes! All students completing a program receive a certificate of completion recognized by Nova Coding Club.",
    },
  ]

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>

          <img
            src="/robots.jpg"
            alt="Our Programs"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 h-full flex flex-col justify-center text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Our Programs
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/80">
              Choose from our comprehensive range of coding programs designed for every skill level. From school-friendly clubs to intensive bootcamps, we have something for everyone.
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
                      ? "bg-teal-600 text-white border border-teal-600"
                      : "bg-secondary/30 text-foreground border border-border hover:border-teal-600 hover:bg-secondary/50"
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
                    className="card-bend bg-card border border-border rounded-2xl overflow-hidden hover:border-teal-600 hover:bg-secondary/30 transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    <img src={prog.image || "/placeholder.svg"} alt={prog.title} className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display font-bold text-xl text-foreground flex-1">{prog.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                            prog.level === "Beginner"
                              ? "bg-green-500/20 text-green-800"
                              : prog.level === "Intermediate"
                                ? "bg-yellow-500/20 text-yellow-700"
                                : "bg-red-500/20 text-red-700"
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
                            <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
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
                          <span className="font-semibold text-teal-600">UGX {prog.price}</span>
                        </div>
                      </div>

                      <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-300 transition-all duration-300 flex items-center justify-center gap-2">
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
        <section className="py-20 md:py-28 px-4 bg-teal-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl text-white md:text-4xl mb-4 text-foreground">
              Not sure which program is right for you?
            </h2>
            <p className="text-foreground/70 text-lg mb-8 text-white">
              Chat with our advisors to find the perfect match for your goals and schedule.
            </p>
            <Link href="/contact" passHref>
              <button className="px-8 py-4 bg-white  text-teal-600 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500 transition-all duration-300">
              Schedule a Free Consultation
              </button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-secondary/20 to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
              {/* Left side */}
              <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
                <h2 className="font-display font-bold text-2xl md:text-4xl mb-3 md:mb-4 text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="text-foreground/60 text-base md:text-lg mb-4 md:mb-6">
                  Find answers to common questions about our programs.
                </p>
                <p className="text-foreground/60 text-sm md:text-base">
                  Can't find what you're looking for? Feel free to{" "}
                  <a href="/contact" className="text-teal-600 hover:underline font-medium">
                    contact us
                  </a>{" "}
                  and we'll be happy to help.
                </p>
              </div>

              {/* Right side */}
              <div className="lg:w-2/3 space-y-2 md:space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFAQ === idx

                  return (
                    <div
                      key={idx}
                      className="bg-background/50 border border-border rounded-lg overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFAQ(isOpen ? null : idx)}
                        className="group w-full p-4 md:p-6 flex justify-between items-center hover:bg-teal-600 transition-colors duration-300 text-left"
                      >
                        <h3 className={`font-display group-hover:text-white font-semibold text-sm md:text-lg pr-4 ${isOpen ? "text-white" : "text-foreground"}`}>
                          {faq.question}
                        </h3>
                        <ChevronDown
                          size={20}
                          className={`text-teal-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-white" : ""}`}
                        />
                      </button>

                      <div
                        className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 md:max-h-48 py-4 md:py-6" : "max-h-0 py-0"}`}
                      >
                        <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
