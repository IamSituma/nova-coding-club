import Link from "next/link"
import { ArrowRight, Users, Award, Briefcase } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Join hundreds of students who are already learning, growing, and building amazing projects with CodeClub.
              Your future in tech starts here.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 py-4 md:py-6">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="font-bold text-xl md:text-2xl text-foreground">500+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Students</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="font-bold text-xl md:text-2xl text-foreground">95%</p>
                <p className="text-xs md:text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="font-bold text-xl md:text-2xl text-foreground">200+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Hired</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/register"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Enroll for free <ArrowRight size={18} />
              </Link>
              <Link
                href="/programs"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-primary border border-primary rounded-md font-semibold hover:bg-primary/5 transition-all duration-300 text-sm md:text-base text-center"
              >
                View programs
              </Link>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
              <img
                src="/diverse-students-learning-coding-together-in-moder.jpg"
                alt="Students learning at CodeClub"
                className="w-full h-48 md:h-72 object-cover"
              />
              <div className="p-4 md:p-6">
                <p className="font-display font-bold text-base md:text-lg text-foreground">Join our community</p>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">
                  Learn from industry experts and build real-world projects
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-primary/20 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
