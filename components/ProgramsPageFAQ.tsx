"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function ProgramsPageFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does each program last?",
      answer:
        "Our programs range from 12 to 16 weeks depending on the course type. School Coding Club is 12 weeks, while full-stack or mobile bootcamps run for 16 weeks.",
    },
    {
      question: "Do I need a laptop to participate?",
      answer:
        "Yes, a personal laptop is required. Both Windows, Mac, and Linux systems are supported, and we provide guidance on setting up all necessary software.",
    },
    {
      question: "Are the courses online or in-person?",
      answer:
        "We offer a mix of both in-person and online classes. You can check the program details to see the delivery method for each course.",
    },
    {
      question: "Can I switch programs if I change my mind?",
      answer:
        "Absolutely! You can discuss with our program coordinators to switch to another course that better suits your goals, subject to availability.",
    },
    {
      question: "Do you provide certificates?",
      answer:
        "Yes! Every student who successfully completes a program will receive a certificate of completion, which can help showcase your skills to employers.",
    },
    {
      question: "Is there support after the course ends?",
      answer:
        "Yes, we offer career guidance, mentorship, and access to our alumni network to help you continue learning and pursue job opportunities.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-secondary/20 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left side */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-3 md:mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/60 text-base md:text-lg mb-4 md:mb-6">
              Answers to common questions about our programs.
            </p>
            <p className="text-foreground/60 text-sm md:text-base">
              Can't find what you're looking for? Feel free to{" "}
              <a href="/contact" className="text-primary hover:underline font-medium">
                contact us
              </a>.
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
                    <h3 className="font-display font-semibold text-sm md:text-lg text-foreground pr-4 transition-colors duration-300 group-hover:text-white">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 md:max-h-48 py-4 md:py-6" : "max-h-0 py-0"
                    }`}
                  >
                    <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
