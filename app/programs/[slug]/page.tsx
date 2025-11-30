"use client"

import { useState, use } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Star } from "lucide-react"
import Link from "next/link"

export default function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const [selectedLevel, setSelectedLevel] = useState("Beginner")
  const [carouselIndex, setCarouselIndex] = useState(0)

  const programs: { [key: string]: any } = {
    "school-coding-club": {
      title: "School Coding Club",
      duration: "12 Weeks",
      price: "450,000",
      level: "Beginner",
      image: "/students-coding-programming-learning.jpg",
      description: "Perfect for high school students looking to learn programming fundamentals.",
      fullDescription:
        "If you like learning programming fundamentals and building projects with a supportive community, the School Coding Club is perfect for you. Our School Coding Club brings together young developers to learn, build, and grow together. With hands-on projects and mentorship from experienced instructors, you'll develop skills that matter in today's tech industry.",
      icon: "📚",
      credentials: [
        {
          title: "Web Development Essentials",
          description: "Build your first web projects",
          skills: "HTML5, CSS3, JavaScript Basics, DOM Manipulation, Responsive Design",
          rating: 4.9,
          reviews: 298,
          level: "Beginner",
          duration: "3 weeks",
          courses: [
            { name: "HTML5 Fundamentals", image: "/course-1.jpg" },
            { name: "CSS3 Styling & Layouts", image: "/course-2.jpg" },
            { name: "JavaScript Essentials", image: "/course-3.jpg" },
            { name: "DOM & Interactions", image: "/course-4.jpg" },
            { name: "Responsive Web Design", image: "/course-5.jpg" },
          ],
        },
      ],
    },
    "web-development-bootcamp": {
      title: "Web Development Bootcamp",
      duration: "16 Weeks",
      price: "850,000",
      level: "Intermediate",
      image: "/coding-hands-on-project-laptop.jpg",
      description: "Transform your career with our intensive 16-week bootcamp.",
      fullDescription:
        "If you're ready to become a full-stack web developer and build real-world applications, our bootcamp is designed for you.",
      detailedDescription:
        "Our Web Development Bootcamp is an intensive program that covers everything from frontend to backend development. You'll work on real projects, collaborate with peers, and get mentorship from industry experts.",
      icon: "💻",
      credentials: [
        {
          title: "Frontend Development",
          description: "Master modern frontend technologies",
          skills: "HTML5, CSS3, JavaScript, React, State Management, APIs",
          rating: 4.9,
          reviews: 512,
          level: "Intermediate",
          duration: "5 weeks",
          courses: [
            { name: "HTML5 & Semantic Markup", image: "/course-1.jpg" },
            { name: "Advanced CSS & Flexbox", image: "/course-2.jpg" },
            { name: "JavaScript ES6+", image: "/course-3.jpg" },
            { name: "React Fundamentals", image: "/course-4.jpg" },
            { name: "State Management & Hooks", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Backend Development",
          description: "Build robust server-side applications",
          skills: "Node.js, Express, Databases, REST APIs, Authentication",
          rating: 4.8,
          reviews: 428,
          level: "Intermediate",
          duration: "5 weeks",
          courses: [
            { name: "Node.js Fundamentals", image: "/course-1.jpg" },
            { name: "Express Framework", image: "/course-2.jpg" },
            { name: "Database Design & SQL", image: "/course-3.jpg" },
            { name: "Building REST APIs", image: "/course-4.jpg" },
            { name: "Authentication & Security", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Full-Stack Integration",
          description: "Connect frontend and backend seamlessly",
          skills: "Full-Stack Architecture, Deployment, DevOps, Testing, Performance",
          rating: 4.7,
          reviews: 356,
          level: "Intermediate",
          duration: "6 weeks",
          courses: [
            { name: "Connecting Frontend & Backend", image: "/course-1.jpg" },
            { name: "Deployment Strategies", image: "/course-2.jpg" },
            { name: "Testing & Debugging", image: "/course-3.jpg" },
            { name: "Performance Optimization", image: "/course-4.jpg" },
            { name: "Advanced DevOps", image: "/course-5.jpg" },
          ],
        },
      ],
    },
    "mobile-development-bootcamp": {
      title: "Mobile Development Bootcamp",
      duration: "14 Weeks",
      price: "750,000",
      level: "Intermediate",
      image: "/students-collaborating-on-project.jpg",
      description: "Build cross-platform mobile applications with modern tools.",
      fullDescription: "Master mobile app development and create applications that run on iOS and Android.",
      detailedDescription:
        "Our Mobile Development Bootcamp teaches you how to build professional mobile applications using React Native and Flutter.",
      icon: "📱",
      credentials: [
        {
          title: "React Native Fundamentals",
          description: "Build cross-platform mobile apps",
          skills: "React Native, JavaScript, Mobile UI/UX, Navigation, APIs",
          rating: 4.8,
          reviews: 289,
          level: "Intermediate",
          duration: "5 weeks",
          courses: [
            { name: "React Native Setup", image: "/course-1.jpg" },
            { name: "Components & Styling", image: "/course-2.jpg" },
            { name: "Navigation & Routing", image: "/course-3.jpg" },
            { name: "API Integration", image: "/course-4.jpg" },
            { name: "Mobile Performance", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Flutter Development",
          description: "Create beautiful cross-platform apps",
          skills: "Flutter, Dart, Widgets, State Management, Firebase",
          rating: 4.9,
          reviews: 267,
          level: "Intermediate",
          duration: "5 weeks",
          courses: [
            { name: "Dart Fundamentals", image: "/course-1.jpg" },
            { name: "Flutter Widgets", image: "/course-2.jpg" },
            { name: "State Management", image: "/course-3.jpg" },
            { name: "Firebase Integration", image: "/course-4.jpg" },
            { name: "App Store Deployment", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Mobile App Deployment",
          description: "Deploy your apps to app stores",
          skills: "App Store Submission, Testing, Analytics, Monetization",
          rating: 4.7,
          reviews: 198,
          level: "Intermediate",
          duration: "4 weeks",
          courses: [
            { name: "iOS Deployment", image: "/course-1.jpg" },
            { name: "Android Deployment", image: "/course-2.jpg" },
            { name: "App Analytics", image: "/course-3.jpg" },
            { name: "Monetization Strategies", image: "/course-4.jpg" },
            { name: "App Marketing", image: "/course-5.jpg" },
          ],
        },
      ],
    },
    "advanced-python": {
      title: "Python Programming",
      duration: "10 Weeks",
      price: "600,000",
      level: "Advanced",
      image: "/expert-instructor-teaching-coding.jpg",
      description: "Deep dive into advanced Python concepts and best practices.",
      fullDescription: "Take your Python skills to the next level with advanced concepts and real-world applications.",
      detailedDescription:
        "This advanced Python course covers object-oriented programming, design patterns, performance optimization, and more.",
      icon: "🐍",
      credentials: [
        {
          title: "Object-Oriented Python",
          description: "Master OOP principles in Python",
          skills: "Classes, Inheritance, Polymorphism, Design Patterns, Testing",
          rating: 4.9,
          reviews: 324,
          level: "Advanced",
          duration: "3 weeks",
          courses: [
            { name: "Classes & Objects", image: "/course-1.jpg" },
            { name: "Inheritance & Composition", image: "/course-2.jpg" },
            { name: "Design Patterns", image: "/course-3.jpg" },
            { name: "Testing & Debugging", image: "/course-4.jpg" },
            { name: "Best Practices", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Advanced Python Libraries",
          description: "Master popular Python libraries",
          skills: "NumPy, Pandas, Scikit-learn, Matplotlib, Data Analysis",
          rating: 4.8,
          reviews: 287,
          level: "Advanced",
          duration: "4 weeks",
          courses: [
            { name: "NumPy Fundamentals", image: "/course-1.jpg" },
            { name: "Pandas for Data", image: "/course-2.jpg" },
            { name: "Scikit-learn Basics", image: "/course-3.jpg" },
            { name: "Data Visualization", image: "/course-4.jpg" },
            { name: "Real-world Projects", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Performance & Optimization",
          description: "Optimize Python applications",
          skills: "Profiling, Caching, Async Programming, Concurrency, Optimization",
          rating: 4.7,
          reviews: 201,
          level: "Advanced",
          duration: "3 weeks",
          courses: [
            { name: "Profiling Code", image: "/course-1.jpg" },
            { name: "Async Programming", image: "/course-2.jpg" },
            { name: "Concurrency Patterns", image: "/course-3.jpg" },
            { name: "Memory Management", image: "/course-4.jpg" },
            { name: "Optimization Techniques", image: "/course-5.jpg" },
          ],
        },
      ],
    },
    "ui-ux-design": {
      title: "UI/UX Design Fundamentals",
      duration: "12 Weeks",
      price: "600,000",
      level: "Beginner",
      image: "/students-coding-programming-learning.jpg",
      description: "Learn design principles and create stunning user experiences.",
      fullDescription: "Master the art of creating beautiful and intuitive digital experiences.",
      detailedDescription:
        "Our UI/UX Design course teaches you design thinking, user research, prototyping, and modern design tools like Figma.",
      icon: "🎨",
      credentials: [
        {
          title: "Design Fundamentals",
          description: "Learn core design principles",
          skills: "Design Theory, Color Theory, Typography, Composition, UX Principles",
          rating: 4.8,
          reviews: 412,
          level: "Beginner",
          duration: "4 weeks",
          courses: [
            { name: "Design Principles 101", image: "/course-1.jpg" },
            { name: "Color & Typography", image: "/course-2.jpg" },
            { name: "Layout & Composition", image: "/course-3.jpg" },
            { name: "Visual Hierarchy", image: "/course-4.jpg" },
            { name: "Design Tools Intro", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Figma Mastery",
          description: "Master modern design tools",
          skills: "Figma, Wireframing, Prototyping, Design Systems, Collaboration",
          rating: 4.9,
          reviews: 398,
          level: "Beginner",
          duration: "4 weeks",
          courses: [
            { name: "Figma Basics", image: "/course-1.jpg" },
            { name: "Wireframing & Mockups", image: "/course-2.jpg" },
            { name: "Prototyping & Interactions", image: "/course-3.jpg" },
            { name: "Design Systems", image: "/course-4.jpg" },
            { name: "Advanced Features", image: "/course-5.jpg" },
          ],
        },
        {
          title: "UX Research & Testing",
          description: "Understand user needs",
          skills: "User Research, User Testing, Analytics, Accessibility, A/B Testing",
          rating: 4.7,
          reviews: 276,
          level: "Beginner",
          duration: "4 weeks",
          courses: [
            { name: "User Research Methods", image: "/course-1.jpg" },
            { name: "User Testing", image: "/course-2.jpg" },
            { name: "Accessibility Fundamentals", image: "/course-3.jpg" },
            { name: "Analytics & Insights", image: "/course-4.jpg" },
            { name: "Continuous Improvement", image: "/course-5.jpg" },
          ],
        },
      ],
    },
    "data-science": {
      title: "Data Science & Analytics",
      duration: "14 Weeks",
      price: "700,000",
      level: "Advanced",
      image: "/expert-instructor-teaching-coding.jpg",
      description: "Transform raw data into actionable business insights.",
      fullDescription: "Learn data analysis, machine learning, and statistical methods to become a data professional.",
      detailedDescription:
        "Our Data Science program covers Python, statistics, machine learning, data visualization, and real-world projects.",
      icon: "📊",
      credentials: [
        {
          title: "Data Analysis Fundamentals",
          description: "Master data analysis with Python",
          skills: "Python, Pandas, Data Cleaning, EDA, Statistical Analysis",
          rating: 4.8,
          reviews: 356,
          level: "Advanced",
          duration: "4 weeks",
          courses: [
            { name: "Python for Data", image: "/course-1.jpg" },
            { name: "Pandas Deep Dive", image: "/course-2.jpg" },
            { name: "Data Cleaning", image: "/course-3.jpg" },
            { name: "Exploratory Analysis", image: "/course-4.jpg" },
            { name: "Statistical Methods", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Machine Learning",
          description: "Build predictive models",
          skills: "Scikit-learn, Supervised Learning, Unsupervised Learning, Model Evaluation",
          rating: 4.9,
          reviews: 312,
          level: "Advanced",
          duration: "5 weeks",
          courses: [
            { name: "ML Fundamentals", image: "/course-1.jpg" },
            { name: "Regression & Classification", image: "/course-2.jpg" },
            { name: "Clustering & Segmentation", image: "/course-3.jpg" },
            { name: "Model Evaluation", image: "/course-4.jpg" },
            { name: "Hyperparameter Tuning", image: "/course-5.jpg" },
          ],
        },
        {
          title: "Data Visualization & Deployment",
          description: "Visualize and deploy models",
          skills: "Matplotlib, Seaborn, Tableau, Model Deployment, Business Analytics",
          rating: 4.7,
          reviews: 245,
          level: "Advanced",
          duration: "5 weeks",
          courses: [
            { name: "Visualization with Python", image: "/course-1.jpg" },
            { name: "Advanced Dashboards", image: "/course-2.jpg" },
            { name: "Model Deployment", image: "/course-3.jpg" },
            { name: "Business Intelligence", image: "/course-4.jpg" },
            { name: "Real-world Capstone", image: "/course-5.jpg" },
          ],
        },
      ],
    },
  }

  const program = programs[resolvedParams.slug]

  if (!program) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Program Not Found</h1>
            <p className="text-foreground/70 mb-8">The program you're looking for doesn't exist.</p>
            <Link href="/programs" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg">
              Back to Programs
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const filteredCredentials = program.credentials.filter((c: any) => c.level === selectedLevel)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section - Left text, Right image */}
        <section
          className="py-32 md:py-40 px-4 bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: `url('${program.image}')`,
            backgroundAttachment: "fixed",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text content on top */}
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 text-balance">
                {program.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">{program.fullDescription}</p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">{program.detailedDescription}</p>
            </div>
          </div>
        </section>

        {/* Recommended Credentials Section */}
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

            {/* Credentials Grid */}
            {filteredCredentials.length > 0 ? (
              filteredCredentials.map((credential: any, idx: number) => (
                <div key={idx} className="mb-8">
                  <div className="bg-card border border-border rounded-2xl p-4 md:p-8">
                    {/* Credential Image */}
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Credential Image */}
                      <div className="w-full md:w-64 flex-shrink-0">
                        <img
                          src={
                            credential.image || "/placeholder.svg?height=200&width=300&query=coding+students+learning"
                          }
                          alt={credential.title}
                          className="w-full h-48 md:h-full object-cover rounded-xl"
                        />
                      </div>

                      {/* Credential Info */}
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
                          {credential.title}
                        </h3>
                        <p className="text-foreground/70 text-sm md:text-base mb-4">{credential.description}</p>

                        <p className="text-sm font-semibold text-foreground/60 mb-2">Skills you'll gain:</p>
                        <p className="text-foreground/70 text-sm mb-4">{credential.skills}</p>

                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 pb-4 border-b border-border">
                          <div className="flex items-center gap-1">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-foreground">{credential.rating}</span>
                            <span className="text-foreground/60 text-sm">({credential.reviews} reviews)</span>
                          </div>
                          <span className="text-foreground/60 hidden md:inline">•</span>
                          <span className="text-foreground/60 text-sm">
                            {credential.level} · {credential.duration}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <button className="px-4 md:px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm md:text-base">
                            Enroll for free
                          </button>
                          <a
                            href={`https://wa.me/256741004466?text=${encodeURIComponent(`Hello! I'm interested in learning more about the "${credential.title}" credential under the "${program.title}" program. Could you please provide more details?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 md:px-6 py-2 border border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all flex items-center gap-2 text-sm md:text-base"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-current">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Contact us For More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Courses Carousel */}
                  <div className="mt-8">
                    <h4 className="font-display font-bold text-xl text-foreground mb-4">Courses in this credential</h4>
                    <div className="relative">
                      <div className="overflow-x-auto pb-4">
                        <div className="flex gap-4">
                          {credential.courses.map((course: any, cIdx: number) => (
                            <div key={cIdx} className="flex-shrink-0 w-48">
                              <img
                                src={course.image || "/placeholder.svg"}
                                alt={course.name}
                                className="w-full h-32 object-cover rounded-lg mb-2"
                              />
                              <p className="text-sm font-semibold text-foreground">{course.name}</p>
                              <p className="text-xs text-foreground/60">
                                Course {cIdx + 1} of {credential.courses.length}
                              </p>
                            </div>
                          ))}
                        </div>
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
        <section className="py-16 md:py-24 px-4 bg-secondary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">Ready to Start?</h2>
            <p className="text-foreground/70 text-lg mb-8">
              Join thousands of students who have transformed their careers through our programs.
            </p>
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all">
              Enroll Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
