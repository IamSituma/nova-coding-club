import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section
      className="relative py-20 md:py-32 px-4 flex items-center min-h-[650px] md:min-h-[750px]"
      style={{
        backgroundImage: "url('/diverse-students-learning-coding-together-in-moder.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto w-full text-center text-white px-4">
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 md:mb-8 leading-tight">
          Ready to Start Your Coding Journey?
        </h2>
        <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed">
          Join hundreds of students who are already learning, growing, and building amazing projects with Nova Coding Club.<br />
          Your future in tech starts here.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <Link
            href="/register"
            className="px-8 md:px-10 py-3 md:py-4 bg-primary/90 hover:bg-primary/100 text-white rounded-full font-semibold text-base md:text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Enroll for free <ArrowRight size={20} />
          </Link>
          <Link
            href="/programs"
            className="px-8 md:px-10 py-3 md:py-4 bg-white/20 hover:bg-white/30 text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-center"
          >
            View programs
          </Link>
        </div>
      </div>
    </section>
  )
}
