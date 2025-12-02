// app/programs/page.tsx

export const metadata = {
  title: "Programs | Nova Coding Club",
  description: "Explore our coding programs, from school coding clubs to advanced bootcamps. Learn programming, web development, mobile apps, and more with hands-on projects.",
}


import Navbar from "@/components/navbar"
import Programs from "@/components/programs"
import ProgramsPageFAQ from "@/components/ProgramsPageFAQ"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      {/* Custom Hero Section for Programs Page */}
      <section
        className="relative py-20 md:py-32 px-4 flex items-center min-h-[600px] md:min-h-[700px] bg-gradient-to-r from-teal-700 to-teal-500"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 md:mb-8 leading-tight">
            Explore Our Programs
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed">
            From coding fundamentals to advanced bootcamps, find the right program for your learning journey.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link
              href="/contact"
              className="px-8 md:px-10 py-3 md:py-4 bg-white text-teal-700 rounded-full font-semibold text-base md:text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <Programs />

      {/* FAQ Section */}
      <ProgramsPageFAQ />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  )
}
