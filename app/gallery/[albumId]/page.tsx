"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const albumsData: Record<
  string,
  {
    title: string
    date: string
    description: string
    images: string[]
  }
> = {
  "scooby-doo-boom-kids-visit": {
    title: "A Day of Discovery and Coding Fun!",
    date: "August 15, 2025",
    description:
      "Yesterday, the kids from Scooby Doo Boom visited Nova Gen and got hands-on with coding and software engineering. Their curiosity and energy filled the room, showing just how bright the future is with young minds like these!",
    images: [
      "/scooby1.jpg",
      "/scooby3.jpg",
      "/scooby2.jpg",
      "/scooby4.jpg",
      "/scooby5.jpg",
      "/scooby6.jpg",
    ],
  },
  "smart-girls": {
    title: "Empowering the Next Generation of Women in Tech",
    date: "August 20, 2024",
    description:
      "Nabilah Kitiibwa, CEO of Nova Gen, spoke at the Smart Girls Foundation graduation held at Kitetika Kumbuzi Campus. She highlighted Nova Gen’s commitment to supporting young women by providing coding training to graduates and high-achieving ICT students. Through initiatives like this, Nova Gen is helping to create opportunities for the girl child to thrive in technology and innovation.",
    images: [
      "/smart1.webp",
      "/smart2.webp",
      "/smart3.webp",
      "/smart4.webp",
      "/smart5.webp",
      "/smart6.webp",
    ],
  },
}

const otherAlbums = [
  { id: "smart-girls", title: "Smart Girls", cover: "/smart3.webp?height=200&width=300" },
  { id: "scooby-doo-boom-kids-visit", title: "Scooby Doo Kids", cover: "/scooby2.jpg?height=200&width=300" },
]

export default function AlbumDetailPage() {
  const params = useParams()
  const albumId = params.albumId as string
  const album = albumsData[albumId]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setCurrentIndex(0)
  }, [albumId])

  if (!album) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold">Album not found</h1>
          <Link href="/gallery" className="text-primary hover:underline mt-4 block">
            Back to Gallery
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % album.images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + album.images.length) % album.images.length)
  }

  const progress = ((currentIndex + 1) / album.images.length) * 100

  // Filter out current album from other albums
  const filteredOtherAlbums = otherAlbums.filter((a) => a.id !== albumId)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Album Viewer Section */}
      <section className="pt-16 bg-[#1a1a2e] min-h-[60vh] sm:min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6 md:gap-8">

            {/* Main Image Carousel */}
            <div className="relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black rounded-lg overflow-hidden">
                <img
                  src={album.images[currentIndex] || "/placeholder.svg"}
                  alt={`${album.title} - Image ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>

              {/* Thumbnail Strip */}
              <div className="mt-4 overflow-x-auto">
                <div className="flex gap-2 pb-2">
                  {album.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`flex-shrink-0 w-16 sm:w-20 h-12 sm:h-14 rounded-md overflow-hidden border-2 transition-all ${
                        idx === currentIndex
                          ? "border-[#d946a8] opacity-100"
                          : "border-transparent opacity-60 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#d946a8] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Album Info */}
            <div className="text-white mt-6 lg:mt-0">
              <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#d946a8] mb-2">{album.title}</h1>
              <p className="text-white/60 text-sm sm:text-base mb-4 md:mb-6">{album.date}</p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">{album.description}</p>
              <div className="mt-4 flex items-center gap-2 text-white/60 text-sm">
                <span>{currentIndex + 1}</span> / <span>{album.images.length} photos</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other Albums Section */}
      <section className="py-12 md:py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-xl md:text-3xl text-foreground mb-6 md:mb-8">More Albums</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredOtherAlbums.map((otherAlbum) => (
              <Link
                key={otherAlbum.id}
                href={`/gallery/${otherAlbum.id}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img
                  src={otherAlbum.cover || "/placeholder.svg"}
                  alt={otherAlbum.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d946a8]/90 via-[#d946a8]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-display font-semibold text-xs sm:text-sm text-white text-center">
                    {otherAlbum.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#009696] to-[#007a7a] rounded-2xl p-6 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-3 md:mb-4">
              Create Your Own Memories
            </h2>
            <p className="text-sm md:text-lg text-white/90 max-w-2xl mx-auto mb-6 md:mb-8">
              Join CodeClub and be part of our growing community. Your journey starts here!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/register"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-[#009696] rounded-md font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/gallery"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-white border border-white rounded-md font-semibold hover:bg-white/10 transition-all duration-300 text-sm md:text-base text-center"
              >
                Back to Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
