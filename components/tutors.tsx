export default function Tutors() {
  const tutors = [
    {
      name: "Steve Byarugaba",
      title: "Software Engineer",
      image: "/john2.png",
      bio: "Full-stack developer with 8+ years of experience at tech startups.",
    },
    {
      name: "Nina Bwengye",
      title: "Software Engineer",
      image: "/jane2.png",
      bio: "React Native specialist who has shipped 15+ mobile apps.",
    },
    {
      name: "Nanyonga Rahmah",
      title: "Software Engineer",
      image: "/jane.png",
      bio: "Machine learning engineer with 5+ years in fintech and analytics.",
    },
    {
      name: "Situma AMbrose",
      title: "Software Enginer",
      image: "/john.png",
      bio: "Award-winning designer focused on user-centered design principles.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-secondary/20 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-3 md:mb-4 text-foreground">
              Meet The Team
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              Learn from industry experts dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {tutors.map((tutor, idx) => (
              <div
                key={idx}
                className="card-hover group bg-background/50 border border-border rounded-lg overflow-hidden"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={tutor.image || "/placeholder.svg"}
                    alt={tutor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-display font-bold text-base md:text-lg mb-1 text-foreground">{tutor.name}</h3>
                  <p className="text-primary font-semibold text-xs md:text-sm mb-2 md:mb-3">{tutor.title}</p>
                  <p className="text-foreground/60 text-xs md:text-sm leading-relaxed">{tutor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
