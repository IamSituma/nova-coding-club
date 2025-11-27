"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kamala Ssebagala",
      program: "School Coding Club",
      role: "Student",
      text: "CodeClub transformed my understanding of programming. The instructors are incredibly patient and the projects are real-world applicable.",
      rating: 5,
      reviews: 128,
      image: "/young-african-female-student-portrait.jpg",
    },
    {
      name: "David Mukwaya",
      program: "Web Dev Bootcamp",
      role: "Junior Developer at TechCorp",
      text: "I landed my first tech job 2 months after completing the bootcamp. The career support and portfolio projects were game-changers.It's been a great journey",
      rating: 5,
      reviews: 256,
      image: "/young-african-male-professional-portrait.jpg",
    },
    {
      name: "Grace Nakimuli",
      program: "Data Science Track",
      role: "Data Analyst",
      text: "The practical approach to teaching makes complex concepts easy to understand. Highly recommend CodeClub to anyone serious about tech.",
      rating: 5,
      reviews: 189,
      image: "/young-african-female-professional-portrait.jpg",
    },
    {
      name: "Brian Okello",
      program: "Mobile Dev Bootcamp",
      role: "App Developer",
      text: "Best investment in my career. The community and support system are unmatched. I went from zero to building production apps. I recommend",
      rating: 5,
      reviews: 312,
      image: "/young-african-male-developer-portrait.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground">What Our Students Say</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
            Hear from our graduates who have transformed their careers through our programs
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Author Image */}
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mb-3 md:mb-4"
              />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2 md:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400 md:w-3.5 md:h-3.5" />
                ))}
                <span className="text-muted-foreground text-xs ml-1">({testimonial.reviews})</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-xs md:text-sm text-foreground leading-relaxed mb-3 md:mb-4">"{testimonial.text}"</p>

              {/* Author Info */}
              <div className="border-t border-border pt-3 md:pt-4">
                <h4 className="font-display font-semibold text-foreground text-sm md:text-base">{testimonial.name}</h4>
                <p className="text-primary text-xs md:text-sm font-medium">{testimonial.program}</p>
                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                <span className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">Verified</span>
                <span className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary">Employed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
