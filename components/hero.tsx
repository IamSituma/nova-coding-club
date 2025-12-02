"use client"

import { ArrowRight, Terminal } from "lucide-react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form state
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [program, setProgram] = useState("")
  const [experience, setExperience] = useState("")
  const [goals, setGoals] = useState("")
  const [agree, setAgree] = useState(false)

  // Validation errors
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Close modal on ESC key press or click outside
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal()
    }

    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById("hero-modal")
      if (modal && !modal.contains(event.target as Node)) {
        closeModal()
      }
    }

    window.addEventListener("keydown", handleEsc)
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("keydown", handleEsc)
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const validateEmail = (email: string) => {
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address")
      return false
    }
    setEmailError("")
    return true
  }

  const validatePhone = (phone: string) => {
    const ugPrefixes = ["070", "071", "072", "073", "074", "075", "076", "077", "078", "079"]
    const digitsOnly = phone.replace(/\D/g, "")
    if (digitsOnly.length !== 10) {
      setPhoneError("Phone number must be 10 digits")
      return false
    }
    if (!ugPrefixes.includes(digitsOnly.slice(0, 3))) {
      setPhoneError("Invalid Ugandan phone prefix")
      return false
    }
    setPhoneError("")
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!agree) {
      alert("You must agree to the terms and conditions")
      return
    }

    if (!validateEmail(email) || !validatePhone(phone)) return

    if (isSubmitting) return
    setIsSubmitting(true)

    const data = {
      formType: "program",
      fullName,
      email,
      phone,
      program,
      experience,
      goals,
      agree,
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz41D2wCbJrxWB72jdcdcdvNZMo9iw1ca5O0fmilydKS1_fFShAT0K-oXJaLQH3utGj/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      )
      const result = await res.json()
      if (result.status === "success") {
        alert("Registration successful!")
        setFullName("")
        setEmail("")
        setPhone("")
        setProgram("")
        setExperience("")
        setGoals("")
        setAgree(false)
        closeModal()
      } else {
        alert("Failed to register: " + result.message)
      }
    } catch (error: any) {
      alert("Error: " + error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <section className="min-h-[850px] pt-20 pb-12 md:pt-24 md:pb-16 flex items-center px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero1.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col items-start text-left gap-6 md:gap-8">
            <div className="space-y-6 md:space-y-8 max-w-3xl">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-medium text-sm flex items-center gap-2">
                  <Terminal size={16} /> Learn. Code. Grow.
                </span>
              </div>

              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight text-white">
                Unlock Your Coding Potential at Nova Coding Club
              </h1>

              <p className="text-lg md:text-xl text-white/90 text-balance max-w-2xl leading-relaxed">
                Join our coding communities designed for students and professionals. Whether you're just starting out or looking to level up your skills, we have programs tailored just for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-white text-[#009696] rounded-full font-semibold hover:shadow-lg hover:shadow-white/50 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  Get Started <ArrowRight size={20} />
                </button>
                <a
                  href="/programs"
                  className="px-8 py-4 bg-transparent text-white border border-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            id="hero-modal"
            className="bg-background rounded-2xl max-w-3xl w-full p-10 md:p-14 relative overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-foreground text-lg font-bold hover:text-red-500 transition-all"
            >
              ✕
            </button>

            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground">
              Register for a Program
            </h2>
            <p className="text-foreground/70 mb-6">
              Fill in your details below to register for a coding program. We’ll get back to you with all the details.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="block w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      validateEmail(e.target.value)
                    }}
                    placeholder="john@example.com"
                    className="block w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>

                <div>
                  <label className="block text-foreground font-medium">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value)
                      validatePhone(e.target.value)
                    }}
                    placeholder="+256 700 000 000"
                    className="block w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                  {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                </div>

                <div>
                  <label className="block text-foreground font-medium">Program *</label>
                  <div className="w-full">
                    <select
                      required
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="block w-full max-w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a program</option>
                      <option value="school">School Coding Club - UGX 250,000</option>
                      <option value="webdev">Web Dev Bootcamp - UGX 450,000</option>
                      <option value="Summer">Summer Bootcamp - UGX 650,000</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-foreground font-medium">Experience Level *</label>
                <select
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="block w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner - No coding experience</option>
                  <option value="intermediate">Intermediate - Some coding knowledge</option>
                  <option value="advanced">Advanced - Professional experience</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="block text-foreground font-medium">Goals (Optional)</label>
                <textarea
                  rows={3}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="Tell us about your learning goals..."
                  className="block w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 bg-secondary/30 border border-border rounded cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-foreground/70 text-sm cursor-pointer">
                    I agree to the terms and conditions and want to receive updates.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-teal-600 text-white hover:shadow-lg hover:shadow-teal-400/50"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
