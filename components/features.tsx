"use client"

import { BookOpen, Users, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Expert-Led Training",
      description: "Learn from industry professionals with years of experience in tech.",
      icon: BookOpen,
      image: "/expert-instructor-teaching-coding.jpg",
      delay: 0,
    },
    {
      title: "Community Learning",
      description: "Connect with peers, collaborate on projects, and grow together.",
      icon: Users,
      image: "/students-collaborating-on-project.jpg",
      delay: 0.1,
    },
    {
      title: "Practical Skills",
      description: "Hands-on projects and real-world coding challenges to accelerate your growth.",
      icon: Zap,
      image: "/coding-hands-on-project-laptop.jpg",
      delay: 0.2,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="card-bend p-6 md:p-8 bg-secondary/30 border border-border rounded-2xl hover:bg-secondary/50 hover:border-primary/50 flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${feature.delay}s both`,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed mb-4">{feature.description}</p>

                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
