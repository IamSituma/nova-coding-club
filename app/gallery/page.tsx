export const metadata = {
  title: "Gallery | Nova Coding Club",
  description: "Explore our gallery of photos and videos from our events, workshops, bootcamps, and community gatherings.",
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const albums = [

  {
    id: "smart-girls",
    title: "Smart Girls",
    cover: "/smart2.webp",
    imageCount: 6,
  },
  {
    id: "scooby-doo-boom-kids-visit",
    title: "Scooby Doo Boom Kids Visit",
    cover: "/scooby1.jpg",
    imageCount: 6,
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[40vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#009696] via-[#007a7a] to-[#005f5f] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img
            src="/gallery.jpg"
            alt="Coding Ideas"
            className="absolute inset-0 w-full h-full object-cover"
          />
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>

        <div className="relative z-10 text-center px-4 py-16 md:py-24">
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
            Our Gallery
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
            Explore moments from our events, workshops, bootcamps, and community gatherings. See the Nova Coding Club experience
            through the eyes of our students and instructors.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-3 md:mb-4">Photo Albums</h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of memories from various events and programs
            </p>
          </div>

          {/* Album Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {albums.map((album) => (
              <Link
                key={album.id}
                href={`/gallery/${album.id}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={album.cover || "/placeholder.svg"}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* gray gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#009696]/80 via-[#000000]/40 to-transparent"></div>
                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="font-display font-semibold text-sm md:text-base text-white text-center">
                    {album.title}
                  </h3>
                  <p className="text-white/80 text-xs text-center mt-1">{album.imageCount} photos</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-black">
  <div className="max-w-7xl mx-auto text-center">
    <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
      <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white">
        Be Part of Our Coding Journey!
      </h2>
      <p className="text-white/90 text-sm md:text-lg max-w-2xl">
        Join Nova Coding Club today and create your own memories. Get featured in our next gallery and explore exciting tech programs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
        <Link
          href="/programs"
          className="flex items-center justify-center px-8 py-3 md:px-10 md:py-4 border border-white rounded-xl text-white text-sm md:text-base font-semibold hover:bg-white/20 transition-colors duration-300"
        >
          View Programs
        </Link>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </main>
  )
}
