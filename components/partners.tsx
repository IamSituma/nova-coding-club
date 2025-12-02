"use client"

export default function Partners() {
  // Logos used in the Partnership page
  const partners = [
    { name: "Sprint Internet Uganda", logo: "/sprint.png" },
    { name: "Nova Generation Limited", logo: "/nova.png" },
    { name: "Seroma Christian High School", logo: "/seroma.png" },
    { name: "British School of Kampala", logo: "/bsk.png" },
    { name: "Ambrosoli International School", logo: "/ambrosoli.png" },
    { name: "Smart Girls Foundation", logo: "/smart.png" },
  ]

  // Duplicate logos for smooth infinite scroll
  const visiblePartners = [...partners, ...partners]

  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Trusted by Leading Institutions
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Our partners include respected schools, organizations, and NGOs across Africa.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/100 to-background/0 pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/100 to-background/0 pointer-events-none z-10" />

          {/* Scrolling logos */}
          <div className="flex gap-10 animate-scroll logo-track">
            {visiblePartners.map((partner, idx) => (
              <div
                key={idx}
                className="logo-item shrink-0 w-40 h-28 flex items-center justify-center transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="logo-img h-16 md:h-20 object-contain grayscale transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel CSS */}
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .logo-track {
            display: flex;
            gap: 2.5rem;
            animation: scroll 20s linear infinite;
          }

          .logo-track:hover {
            animation-play-state: paused;
          }

          .logo-item {
            opacity: 0.7;
            transition: all 0.3s ease-in-out;
          }

          .logo-item:hover {
            opacity: 1 !important;
            transform: scale(1.15);
          }

          .logo-item:hover .logo-img {
            filter: grayscale(0);
          }
        `}</style>
      </div>
    </section>
  )
}
