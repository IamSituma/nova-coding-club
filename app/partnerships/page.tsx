"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  CheckCircle,
  Users,
  Zap,
  TrendingUp,
  Award,
  Globe,
  ArrowRight,
  Handshake,
  Building2,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function Partnerships() {
  const benefits = [
    {
      title: "Proven Curriculum",
      description:
        "Industry-designed, student-tested programs that deliver results and measurable outcomes.",
      icon: Award,
    },
    {
      title: "Expert Instructors",
      description:
        "Experienced professionals who bring real-world knowledge and industry insights to the classroom.",
      icon: Users,
    },
    {
      title: "Flexible Delivery",
      description:
        "Programs designed to fit your institution’s schedule, budget, and unique needs.",
      icon: Zap,
    },
    {
      title: "Student Success",
      description:
        "85% job placement rate and strong community satisfaction across all our training programs.",
      icon: TrendingUp,
    },
    {
      title: "Dedicated Support",
      description:
        "Our support team ensures smooth program delivery and continuous improvement.",
      icon: CheckCircle,
    },
    {
      title: "Institutional Recognition",
      description:
        "Join a network of forward-thinking organizations shaping the future of tech education in Africa.",
      icon: Globe,
    },
  ]

  const stats = [
    { value: "50+", label: "Partner Institutions" },
    { value: "10,000+", label: "Students Trained" },
    { value: "85%", label: "Success Rate" },
    { value: "15+", label: "Countries Reached" },
  ]

  const partners = [
    { name: "Lincoln High School", type: "School" },
    { name: "St. Mary Secondary", type: "School" },
    { name: "Tech Innovation Hub", type: "Organization" },
    { name: "Digital Minds Academy", type: "School" },
    { name: "Future Leaders Institute", type: "Organization" },
    { name: "CodeWorks Studio", type: "Organization" },
    { name: "Kampala Tech Center", type: "Organization" },
    { name: "African Innovation Hub", type: "Organization" },
    { name: "Youth Development Program", type: "NGO" },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">

        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/partner.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-40">
            <span className="inline-block px-4 py-2 bg-white/80 text-black rounded-full text-sm font-medium mb-6">
              Partner With Us
            </span>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Building the Future of Tech Education Together
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Join our network of institutions transforming lives through modern tech education across Uganda and Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
              >
                Become a Partner
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full backdrop-blur-sm font-semibold hover:bg-white/20 transition"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-foreground py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-display font-bold text-3xl text-primary">
                    {stat.value}
                  </p>
                  <p className="text-background/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERSHIP MODELS */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Partnership Models
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto mt-2">
                Choose a partnership model that aligns with your institution’s goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "School Programs",
                  text: "Bring coding into your school with our flexible on-site or online programs.",
                  points: [
                    "Fits your school schedule",
                    "Beginner to advanced",
                    "Certification included",
                  ],
                },
                {
                  icon: Building2,
                  title: "Corporate Training",
                  text: "Upskill your workforce with tailored programs designed for your team.",
                  points: [
                    "Custom curriculum",
                    "Remote or on-site",
                    "Performance tracking",
                  ],
                },
                {
                  icon: Handshake,
                  title: "Community Initiatives",
                  text: "Empowering underserved communities through accessible tech education.",
                  points: [
                    "Scholarship opportunities",
                    "Community training centers",
                    "Impact measurement",
                  ],
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="group bg-card border rounded-2xl p-8 hover:border-primary hover:shadow-xl transition"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition">
                      <Icon size={32} className="text-primary group-hover:text-white" />
                    </div>

                    <h3 className="font-display font-bold text-xl mb-3 text-foreground">{item.title}</h3>

                    <p className="text-foreground/70 mb-6">{item.text}</p>

                    <ul className="space-y-3 text-sm text-foreground/60 mb-6">
                      {item.points.map((p, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary" /> {p}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* WHY PARTNER */}
        <section className="py-20 md:py-28 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Why Partner with Nova Coding Club?
              </h2>

              <p className="text-foreground/60 text-lg mb-8">
                We’re more than just a training provider. We’re your strategic partner in creating a future-ready generation.
              </p>

              <div className="grid gap-6">
                {benefits.slice(0, 4).map((benefit, idx) => {
                  const Icon = benefit.icon
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground">{benefit.title}</h3>
                        <p className="text-foreground/60 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="/tutor.jpg" className="w-full h-full object-cover" alt="Partnership" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="font-display font-bold text-3xl">85%</p>
                <p className="text-sm text-primary-foreground/80">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO CAROUSEL */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Trusted by Leading Institutions
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Our partners include respected schools, organizations, and NGOs across Africa.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex gap-10 animate-scroll logo-track">
                {partners.concat(partners).map((partner, idx) => (
                  <div
                    key={idx}
                    className="logo-item shrink-0 w-40 h-28 flex flex-col items-center justify-center transition-all"
                  >
                    <img
                      src="/placeholder-logo.png"
                      alt={partner.name}
                      className="logo-img h-12 md:h-16 object-contain grayscale transition-all"
                    />
                    <p className="logo-text text-foreground/70 text-sm font-medium mt-2 transition-all">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel styles */}
            <style jsx>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }

              .animate-scroll {
                animation: scroll 22s linear infinite;
              }

              .logo-track:hover {
                animation-play-state: paused;
              }

              /* Default: slightly dim */
              .logo-item { opacity: 0.4; }

              /* When hovering over the track, dim all */
              .logo-track:hover .logo-item { opacity: 0.2; }

              /* Focused logo: zoom + full color + full opacity */
              .logo-item:hover {
                opacity: 1 !important;
                transform: scale(1.15);
              }

              .logo-item:hover .logo-img {
                filter: grayscale(0);
              }

              .logo-item:hover .logo-text {
                opacity: 1;
                color: var(--foreground);
              }
            `}</style>

          </div>
        </section>

        {/* PARTNERSHIP PROCESS (Horizontal Flow) */}
        <section className="py-20 md:py-28 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Getting Started
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              Partnership Process
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto mt-2">
              A simple and clear step-by-step journey.
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

              {[
                { step: "01", title: "Discovery", desc: "Discuss your institution’s needs and goals." },
                { step: "02", title: "Consultation", desc: "We recommend the best partnership approach." },
                { step: "03", title: "Customization", desc: "Programs tailored to your institution." },
                { step: "04", title: "Launch", desc: "Begin implementation with full support." },
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center w-full">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl shadow-md">
                    {item.step}
                  </div>

                  <h3 className="font-display font-bold text-lg mt-4">{item.title}</h3>
                  <p className="text-foreground/60 text-sm max-w-[200px]">{item.desc}</p>

                  {/* Show arrow except after last step */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 right-[-55px]">
                      <ArrowRight size={28} className="text-primary/60" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="relative py-20 md:py-28 px-4">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/college.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-foreground/70" />

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-background mb-6">
              Ready to Transform Education Together?
            </h2>

            <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
              Let's partner and bring high-quality tech education to your institution and community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition"
              >
                Start a Partnership
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-background/90 transition"
              >
                View Programs
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
