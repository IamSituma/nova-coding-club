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
      description: "Industry-designed, student-tested programs that deliver results and measurable outcomes.",
      icon: Award,
    },
    {
      title: "Expert Instructors",
      description: "Experienced professionals who bring real-world knowledge and industry insights to the classroom.",
      icon: Users,
    },
    {
      title: "Flexible Delivery",
      description: "Programs designed to fit your institution's unique schedule, budget, and specific needs.",
      icon: Zap,
    },
    {
      title: "Student Success",
      description: "85% job placement rate and strong community satisfaction across all our programs.",
      icon: TrendingUp,
    },
    {
      title: "Dedicated Support",
      description: "Full support team to ensure smooth program delivery, student success, and continuous improvement.",
      icon: CheckCircle,
    },
    {
      title: "Institutional Recognition",
      description: "Join a network of forward-thinking organizations shaping the future of tech education in Africa.",
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
        <section className="relative min-h-[70vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/diverse-professionals-handshake-partnership-busine.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-40 w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Partner With Us
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
                Building the Future of Tech Education Together
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                Join our growing network of schools and organizations committed to transforming lives through quality
                tech education across Uganda and Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
                >
                  Become a Partner
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-foreground py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">{stat.value}</p>
                  <p className="text-background/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                How We Partner
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">Partnership Models</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Choose the partnership model that best fits your institution's needs and goals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <GraduationCap className="text-primary group-hover:text-white" size={32} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">School Programs</h3>
                <p className="text-foreground/70 mb-6">
                  Introduce coding to your students with our flexible school-based programs. We handle curriculum,
                  instruction, and assessment.
                </p>
                <ul className="space-y-3 text-sm text-foreground/60 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Tailored to your school schedule
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Beginner to advanced levels
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Certification included
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>

              <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Building2 className="text-primary group-hover:text-white" size={32} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">Corporate Training</h3>
                <p className="text-foreground/70 mb-6">
                  Upskill your employees with our corporate training programs. Custom content designed for your team's
                  specific needs.
                </p>
                <ul className="space-y-3 text-sm text-foreground/60 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Custom curriculum design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    On-site or online delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Performance tracking
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>

              <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Handshake className="text-primary group-hover:text-white" size={32} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">Community Initiatives</h3>
                <p className="text-foreground/70 mb-6">
                  Partner with us to bring coding education to underserved communities and create lasting impact.
                </p>
                <ul className="space-y-3 text-sm text-foreground/60 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Scholarship programs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Community training centers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Impact measurement
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Why CodeClub
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground">
                  Why Partner with CodeClub?
                </h2>
                <p className="text-foreground/60 text-lg mb-8">
                  We're more than just a training provider. We're your strategic partner in building a tech-ready
                  workforce and transforming education.
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
                          <h3 className="font-display font-bold text-lg mb-1 text-foreground">{benefit.title}</h3>
                          <p className="text-foreground/60 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src="/students-and-teachers-collaborating-in-modern-clas.jpg"
                    alt="Partnership collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                  <p className="font-display font-bold text-3xl">85%</p>
                  <p className="text-sm text-primary-foreground/80">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Network
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
                Trusted by Leading Institutions
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Join our growing network of schools, organizations, and NGOs committed to quality tech education.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="group bg-card border border-border rounded-xl p-8 flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={`/.jpg?height=80&width=160&query=${partner.name.toLowerCase().replace(/\s+/g, "-")}-logo`}
                    alt={partner.name}
                    className="h-12 md:h-16 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
                  />
                  <p className="text-foreground/70 text-sm font-medium">{partner.name}</p>
                  <span className="text-xs text-primary/70 mt-1">{partner.type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Getting Started
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">Partnership Process</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                A simple, streamlined process to get your partnership started.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Schedule a call to discuss your goals and learn about our programs",
                },
                {
                  step: "02",
                  title: "Consultation",
                  description: "We assess your needs and recommend the best partnership model",
                },
                {
                  step: "03",
                  title: "Customization",
                  description: "Together, we tailor programs to fit your institution perfectly",
                },
                { step: "04", title: "Launch", description: "Begin your partnership with full onboarding and support" },
              ].map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl mx-auto mb-6 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-28 px-4">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/diverse-team-celebrating-success-office.jpg')" }}
          />
          <div className="absolute inset-0 bg-foreground/90" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-background">
              Ready to Transform Education Together?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring quality tech education to your institution and create lasting impact in your
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
              >
                Start a Partnership
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:bg-background/90 transition-all"
              >
                View Our Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
