"use client"
import Link from "next/link"

export default function Categories() {
  const categories = [
    {
      name: "School Coding Club",
      count: "1 Program",
      image: "/school.png",
      slug: "school-coding-club",
    },
    {
      name: "Web Development Bootcamp",
      count: "1 Program",
      image: "/web.jpg",
      slug: "web-development-bootcamp",
    },
    {
      name: "Mobile Development Bootcamp",
      count: "1 Program",
      image: "/app.jpg",
      slug: "mobile-development-bootcamp",
    },
    {
      name: "UI/UX Design Fundamentals",
      count: "1 Program",
      image: "/ui.jpg",
      slug: "ui-ux-design",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-secondary/20 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground">Program Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={`/programs/${cat.slug}`}
                className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  className="w-full h-52 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-white transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs md:text-sm text-white/80">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
