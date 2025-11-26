import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BookOpen, Globe, Users, Lightbulb } from "lucide-react"

export default function About() {
  const values = [
    {
      title: "Knowledge",
      description:
        "We are experts in the field of online education and career development, and are rigorous in delivering high quality learning materials, services and experiences that deliver the outcomes we have promised.",
      icon: BookOpen,
    },
    {
      title: "Inclusivity",
      description:
        'We are inspired by the UN Declaration that "everyone is entitled to a free education". We are committed to equality and access to education irrespective of gender, geography, economic status or any other barriers to access.',
      icon: Globe,
    },
    {
      title: "Empowerment",
      description:
        "We are driven by our belief in the power of free education and skills training to change people's lives for the better and are passionate about providing an overall learning experience that meets their needs and helps them to achieve life goals.",
      icon: Users,
    },
    {
      title: "Innovation",
      description:
        "We will not be constrained by what already exists but will lead the way in introducing new ways to achieve our mission. Our DNA is entrepreneurial and we understand and embrace the pioneering spirit that motivates other entrepreneurs.",
      icon: Lightbulb,
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Founded CodeClub",
      description:
        "Started with a vision to democratize coding education in Uganda. Our founders, passionate about tech, saw a gap in accessible quality programming education and decided to bridge it.",
      image: "/startup-founding-team-office.jpg",
    },
    {
      year: "2021",
      title: "100 Students Graduated",
      description:
        "Successfully launched our first cohorts in Kampala. Our inaugural programs received overwhelming response, proving the demand for quality tech education. Students began landing tech jobs immediately.",
      image: "/students-graduation-celebrating-success.jpg",
    },
    {
      year: "2022",
      title: "Expanded to 5 Locations",
      description:
        "Grew to serve students across multiple cities in Uganda. We opened learning centers in Kampala, Entebbe, Fort Portal, Jinja, and Mbale to reach more aspiring developers.",
      image: "/multiple-coding-centers-locations-classrooms.jpg",
    },
    {
      year: "2023",
      title: "1000 Students Milestone",
      description:
        "Reached over 1000 students with 85% job placement rate. Our programs expanded to include bootcamps, specialized tracks, and corporate training solutions.",
      image: "/large-group-students-learning-coding-classroom.jpg",
    },
    {
      year: "2024",
      title: "50+ School Partnerships",
      description:
        "Established partnerships with leading schools and organizations. We now serve both individual learners and institutions, bringing quality tech education to high schools across the region.",
      image: "/school-partnership-collaboration-education.jpg",
    },
  ]

  const stats = [
    { value: "1000+", label: "Students Trained" },
    { value: "50+", label: "School Partners" },
    { value: "15+", label: "Programs Offered" },
    { value: "85%", label: "Job Placement Rate" },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero - Full width */}
        <section className="relative overflow-hidden">
          {/* Light yellow/cream background */}
          <div className="bg-[#f5f5dc] py-20 md:py-28 px-4 relative">
            {/* Decorative shapes */}
            {/* Top left - green circle */}
            <div className="absolute top-8 left-8 w-16 h-16 md:w-32 md:h-32 rounded-full bg-[#90EE90] opacity-80" />
            {/* Top left - purple half circle */}
            <div className="absolute top-32 md:top-40 -left-8 w-16 h-16 md:w-32 md:h-32 rounded-full bg-[#DDA0DD] opacity-80" />
            {/* Bottom left - pink/magenta arc */}
            <div className="absolute bottom-20 left-4 w-14 h-14 md:w-28 md:h-28 rounded-full border-[8px] md:border-[16px] border-[#FF69B4] border-r-transparent border-b-transparent opacity-80" />

            {/* Top right - orange rounded rectangle */}
            <div className="absolute top-8 right-16 w-16 h-10 md:w-28 md:h-16 rounded-full bg-[#FFA500] opacity-80" />
            {/* Top right - green arc */}
            <div className="absolute top-4 right-4 w-12 h-12 md:w-24 md:h-24 rounded-full border-[8px] md:border-[14px] border-[#90EE90] border-l-transparent border-b-transparent opacity-80" />
            {/* Right side - teal/green shape */}
            <div className="absolute top-1/2 -right-6 w-14 h-14 md:w-28 md:h-28 rounded-full bg-[#20B2AA] opacity-80" />
            {/* Bottom right - green circle */}
            <div className="absolute bottom-16 right-20 w-12 h-12 md:w-24 md:h-24 rounded-full bg-[#90EE90] opacity-60" />

            {/* Grid lines overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
              <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#1a365d] leading-tight">
                The Radical Idea Behind Our Story:
              </h1>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#009696] mt-2">
                Education Should Be Accessible
              </h2>
            </div>
          </div>

          {/* Stats bar */}
          <div className="bg-[#1a202c] py-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h3 className="font-display font-bold text-xl md:text-3xl text-white mb-1">{stat.value}</h3>
                  <p className="text-white/70 text-xs md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-[#e8f4f8]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-10 md:mb-14 text-center text-foreground">
              Our Mission Starts With Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="text-[#009696]" size={32} />
                    </div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-3 text-foreground">{value.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision - Updated to max-w-7xl */}
        <section className="py-16 md:py-24 px-4 bg-secondary/50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground">Our Mission</h2>
              <p className="text-foreground/70 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                To empower students and professionals with practical coding skills and industry knowledge, creating
                pathways to meaningful careers in technology.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                We combine hands-on learning with real-world projects, mentorship from industry experts, and a
                supportive community to ensure our students not only learn to code but build careers they love.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                Our curriculum is designed by industry professionals and updated regularly to reflect market demands,
                ensuring our graduates are job-ready from day one.
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground">Our Vision</h2>
              <p className="text-foreground/70 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                To create a thriving tech ecosystem in Uganda where talent is recognized and developed, and where
                technology is used as a tool for positive change.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                We envision a future where every young person in Uganda has the opportunity to learn coding, develop
                critical tech skills, and contribute to the digital transformation of Africa.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                We aim to build a network of tech professionals who not only excel in their careers but also give back
                to their communities as mentors and leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Journey - Updated to max-w-7xl */}
        <section className="py-16 md:py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-10 md:mb-12 text-foreground">Our Journey</h2>
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Timeline indicator */}
                  <div className="flex flex-row md:flex-col items-center gap-4 md:gap-0 md:w-24 flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-display font-bold text-base md:text-lg">
                      {milestone.year.slice(-2)}
                    </div>
                    <span className="md:hidden text-foreground font-semibold">{milestone.year}</span>
                    {idx < milestones.length - 1 && (
                      <div className="hidden md:block w-1 h-24 md:h-32 bg-primary/20 mt-4"></div>
                    )}
                  </div>

                  {/* Content and Image */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                          {milestone.description}
                        </p>
                      </div>
                      <div className="w-full md:w-48 flex-shrink-0">
                        <img
                          src={milestone.image || "/placeholder.svg"}
                          alt={milestone.title}
                          className="w-full h-40 md:h-40 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose CodeClub - Updated to max-w-7xl */}
        <section className="py-16 md:py-24 px-4 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Left Text */}
              <div className="flex-1 space-y-6">
                <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground">Why Choose CodeClub?</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg md:text-xl text-foreground">Expert Instructors</h3>
                    <p className="text-foreground/70 text-sm md:text-base">
                      Learn from industry professionals with years of real-world experience in leading tech companies.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg md:text-xl text-foreground">Job Ready Curriculum</h3>
                    <p className="text-foreground/70 text-sm md:text-base">
                      Our programs are designed with employers in mind for immediate employment opportunities.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg md:text-xl text-foreground">Community Support</h3>
                    <p className="text-foreground/70 text-sm md:text-base">
                      Join a thriving community of learners and professionals for lifelong support and networking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-hidden w-full">
                <div className="carousel-container relative h-64 md:h-80 overflow-hidden rounded-xl">
                  <style>{`
                    @keyframes carouselScroll {
                      0% {
                        transform: translateX(0);
                      }
                      100% {
                        transform: translateX(-100%);
                      }
                    }
                    .carousel-scroll {
                      animation: carouselScroll 20s linear infinite;
                      display: flex;
                      gap: 1rem;
                    }
                    .carousel-scroll:hover {
                      animation-play-state: paused;
                    }
                    .carousel-item {
                      min-width: 200px;
                      opacity: 1;
                      transition: opacity 0.3s ease;
                    }
                  `}</style>
                  <div className="carousel-scroll">
                    {[
                      "/coding-class-students.jpg",
                      "/students-learning-coding.jpg",
                      "/tech-workshop-classroom.jpg",
                      "/programming-bootcamp.jpg",
                      "/coding-class-students.jpg",
                    ].map((img, idx) => (
                      <div key={idx} className="carousel-item">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Why choose us ${idx}`}
                          className="w-full h-64 md:h-80 object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
