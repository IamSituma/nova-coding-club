"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "What are the prerequisites for joining CodeClub?",
      answer:
        "No prior programming experience is required! Our programs are designed for beginners through advanced learners. We offer foundational courses and advanced bootcamps to match your level.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept mobile money (MTN, Airtel), bank transfers, and cash payments. Flexible payment plans are available for bootcamp programs.",
    },
    {
      question: "Is job placement guaranteed after the bootcamp?",
      answer:
        "While we cannot guarantee placement, our bootcamp graduates have an 85% job placement rate within 3 months. We provide career coaching, resume review, and interview preparation.",
    },
    {
      question: "Can I study part-time?",
      answer:
        "Yes! Our School Coding Club is designed for part-time learning. Bootcamps are intensive but can sometimes accommodate flexible schedules. Contact us to discuss options.",
    },
    {
      question: "What do I need for the classes?",
      answer:
        "You need a laptop (Mac, Windows, or Linux), internet connection, and enthusiasm to learn. We provide all necessary software tools and learning materials.",
    },
    {
      question: "Do you offer any discounts or scholarships?",
      answer:
        "Yes! We offer scholarships for high-performing students and group discounts for school partnerships. Contact us to learn more about available opportunities.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-secondary/20 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left side - Title and Description */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-3 md:mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/60 text-base md:text-lg mb-4 md:mb-6">
              Find answers to common questions about our programs and services.
            </p>
            <p className="text-foreground/60 text-sm md:text-base">
              Can't find what you're looking for? Feel free to{" "}
              <a href="/contact" className="text-primary hover:underline font-medium">
                contact us
              </a>{" "}
              and we'll be happy to help.
            </p>
          </div>

          {/* Right side - Questions */}
          <div className="lg:w-2/3 space-y-2 md:space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-background/50 border border-border rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                  className="w-full p-4 md:p-6 flex justify-between items-center hover:bg-secondary/20 transition-colors duration-300 text-left"
                >
                  <h3 className="font-display font-semibold text-sm md:text-lg text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ${openFAQ === idx ? "rotate-180" : ""}`}
                  />
                </button>

                {openFAQ === idx && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t border-border">
                    <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
