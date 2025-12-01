"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export default function Programs() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form state
  const [schoolName, setSchoolName] = useState("")
  const [contactPerson, setContactPerson] = useState("")
  const [studentName, setStudentName] = useState("")
  const [age, setAge] = useState("")
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [parentEmail, setParentEmail] = useState("")
  const [hasLaptop, setHasLaptop] = useState("")
  const [paymentPreference, setPaymentPreference] = useState("")
  const [agree, setAgree] = useState(false)

  const programs = [
    {
      title: "School Coding Club",
      slug: "school",
      image: "/school.png",
      description: "Perfect for high school students learning programming fundamentals.",
      price: "250,000",
      features: ["HTML, CSS & Javascript Basics", "Project Portfolio", "Web Development","Career Guidance", "1 Session Per Week"],
    },
    {
      title: "Bootcamp - Web Development",
      slug: "webdev",
      image: "/web.jpg",
      description: "Intensive bootcamp to become a full-stack web developer.",
      price: "450,000",
      features: ["Frontend & Backend", "Database Design", "Deployment", "Job Prep", "3 Sessions Per Week"],
    },
    {
      title: "Bootcamp - Summer",
      slug: "mobiledev",
      image: "/college.jpg",
      description: "Master mobile app development for iOS and Android platforms.",
      price: "1,000,000",
      features: ["React Native", "Flutter", "APIs", "App Publishing", "3 Sessions Per Week"],
    },
  ]

  // Close modal on ESC or click outside
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModal(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const handleSubmit = async (formType: string, e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    let data: any = { formType }

    if (formType === "school") {
      if (!schoolName || !contactPerson) {
        alert("Please fill in required fields")
        setIsSubmitting(false)
        return
      }
      data = { ...data, schoolName, contactPerson, phone, email, agree }
    } else if (formType === "webdev" || formType === "mobiledev") {
      if (!studentName || !age || !parentName || !phone || !hasLaptop || !paymentPreference) {
        alert("Please fill in required fields")
        setIsSubmitting(false)
        return
      }
      data = { ...data, studentName, age, parentName, phone, parentEmail, hasLaptop, paymentPreference }
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwE5Ct7uyoKK-v4PfZf8EW8DFH3EZ3kRSdU0W0fAJ39dUdg7nEinFD3p4e3AibJbeq44A/exec", // Replace with your Apps Script URL
        { method: "POST", body: JSON.stringify(data) }
      )
      const result = await res.json()
      if (result.status === "success") {
        alert("Registration successful!")
        // Reset fields
        setSchoolName(""); setContactPerson(""); setStudentName(""); setAge(""); setParentName(""); setPhone(""); setEmail(""); setParentEmail(""); setHasLaptop(""); setPaymentPreference(""); setAgree(false)
        setActiveModal(null)
      } else {
        alert("Failed: " + result.message)
      }
    } catch (err: any) {
      alert("Error: " + err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">

        {/* Header */}
        <div>
          <h2 className="font-display font-bold text-2xl md:text-4xl mb-4 text-foreground">
            Our Programs
          </h2>
          <p className="text-foreground/60 text-base md:text-lg">
            Choose from our carefully designed programs tailored to your skill level and goals.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => (
            <div key={program.slug} className="bg-secondary/30 border border-border rounded-2xl overflow-hidden flex flex-col hover:border-primary/50 transition-all">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2 text-foreground">{program.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{program.description}</p> {/* spacing between description and bullets */}

                {/* Features */}
                <ul className="mb-4 space-y-2 md:space-y-3"> {/* Increased space for bullets */}
                  {program.features.map((f, idx) => (
                    <li key={idx} className="text-foreground/70 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between py-2 border-t border-border">
                  <span className="text-foreground/60 text-sm">Price:</span>
                  <span className="font-semibold text-primary text-sm">UGX {program.price}</span>
                </div>
                <button
                  onClick={() => setActiveModal(program.slug)}
                  disabled={isSubmitting}
                  className={`mt-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitting ? "bg-gray-400 text-white cursor-not-allowed" : "bg-teal-600 text-white hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? "Processing..." : (program.slug === "school" ? "Register School" : "Join Class")}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if ((e.target as HTMLDivElement).classList.contains("fixed")) setActiveModal(null) }}
        >
          <div className="bg-background rounded-2xl max-w-2xl w-full p-8 md:p-12 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-foreground text-lg font-bold hover:text-red-500 transition-all"
            >
              ✕
            </button>

            {/* School Modal */}
            {activeModal === "school" && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">School Registration</h2>
                <p className="text-foreground/70 mb-6">Register your school for the Nova Coding Club programs.</p>
                <form className="space-y-6" onSubmit={(e) => handleSubmit("school", e)}>
                  <input type="text" required placeholder="School Name *" value={schoolName} onChange={(e)=>setSchoolName(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <input type="text" required placeholder="Immediate Person of Contact *" value={contactPerson} onChange={(e)=>setContactPerson(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <input type="tel" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} className="w-4 h-4"/>
                    <label className="text-foreground/70 text-sm">I agree to terms and updates</label>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-lg bg-teal-600 text-white font-semibold">{isSubmitting ? "Submitting..." : "Register"}</button>
                </form>
              </>
            )}

            {/* WebDev / MobileDev Modal */}
            {(activeModal === "webdev" || activeModal === "mobiledev") && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{activeModal === "webdev" ? "Web Development Bootcamp" : "Mobile Development Bootcamp"}</h2>
                <p className="text-foreground/70 mb-6">Register your child for the {activeModal === "webdev" ? "Web Dev" : "Mobile Dev"} bootcamp.</p>
                <form className="space-y-6" onSubmit={(e) => handleSubmit(activeModal, e)}>
                  <input type="text" required placeholder="Student Name *" value={studentName} onChange={(e)=>setStudentName(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <input type="number" required placeholder="Age *" value={age} onChange={(e)=>setAge(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <input type="text" required placeholder="Parent Name *" value={parentName} onChange={(e)=>setParentName(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <input type="tel" required placeholder="Phone Number *" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <input type="email" placeholder="Parent Email (Optional)" value={parentEmail} onChange={(e)=>setParentEmail(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg"/>
                  <select required value={hasLaptop} onChange={(e)=>setHasLaptop(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg">
                    <option value="">Does your child have a laptop? *</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <select required value={paymentPreference} onChange={(e)=>setPaymentPreference(e.target.value)} className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg">
                    <option value="">Payment Preference *</option>
                    <option value="Bank">Bank</option>
                    <option value="Mobile Money">Mobile Money</option>
                    <option value="Cash">Cash</option>
                  </select>
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-lg bg-teal-600 text-white font-semibold">{isSubmitting ? "Submitting..." : "Register"}</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
