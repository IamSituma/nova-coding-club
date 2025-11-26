"use client"

import { BookOpen, FileCode, MessageCircle, MessageCircleCode, User, UserCheck, UserPlus, Users, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Expert Tutors",
      description: "Get guidance from experienced coding mentors who make learning fun and easy to follow. Our tutors are here to support you every step of the way.",
      icon: UserCheck,
      image: "/tutor.jpg",
      delay: 0,
    },
    {
      title: "Hands-On Projects",
      description: "Learn by building real projects in HTML, CSS, JavaScript, and more. Apply your skills while creating cool fascinating practical projects.",
      icon: FileCode,
      image: "/projects.jpg",
      delay: 0.1,
    },
    {
      title: "Collaboration",
      description: "Join a vibrant coding community of students and professionals. Collaborate, share ideas, and grow together in a supportive environment.",
      icon: MessageCircleCode,
      image: "/ideas.jpg",
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
                <div className="w-12 h-12 rounded-lg bg-teal-700 flex items-center justify-center mb-4">
                  <Icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed mb-4">{feature.description}</p>

                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-50 object-cover rounded-lg mb-2"
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
