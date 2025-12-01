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
  "bootcamp-graduation-2024": {
    title: "Bootcamp Graduation 2024",
    date: "October 15, 2024",
    description:
      "Highlights from our October 2024 Bootcamp Graduation ceremony, celebrating the achievements of our web development and mobile development graduates. A proud moment for all our students who completed their intensive training programs.",
    images: [
      "/graduation-ceremony-group-photo-students-with-cert.jpg",
      "/student-receiving-certificate-on-stage-graduation.jpg",
      "/graduates-throwing-caps-celebration.jpg",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "hackathon-2024": {
    title: "CodeClub Hackathon 2024",
    date: "September 8, 2024",
    description:
      "Our annual 48-hour hackathon brought together over 100 participants to build innovative solutions. Teams competed to create impactful projects addressing real-world problems in education, health, and sustainability.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "school-coding-workshop": {
    title: "School Coding Workshop",
    date: "August 20, 2024",
    description:
      "Our outreach program brought coding education to local schools. Students aged 10-16 learned the basics of programming through fun, interactive activities and games.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "tech-conference-2024": {
    title: "Tech Conference 2024",
    date: "July 12, 2024",
    description:
      "Our flagship tech conference featured industry leaders, workshops, and networking opportunities. Attendees gained insights into the latest trends in software development, AI, and emerging technologies.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "web-dev-bootcamp": {
    title: "Web Development Bootcamp",
    date: "June 5, 2024",
    description:
      "An intensive 12-week bootcamp where students mastered HTML, CSS, JavaScript, React, and Node.js. From beginners to job-ready developers, this program transformed careers.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "mobile-dev-showcase": {
    title: "Mobile Dev Showcase",
    date: "May 18, 2024",
    description:
      "Students showcased their mobile applications built during the Mobile Development program. From iOS to Android, these innovative apps demonstrated the skills acquired during training.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "student-projects-expo": {
    title: "Student Projects Expo",
    date: "March 15, 2024",
    description:
      "A showcase of the best student projects from all our programs. Visitors explored interactive demos and learned about the innovative solutions created by our talented students.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "coding-competition": {
    title: "Coding Competition 2024",
    date: "February 28, 2024",
    description:
      "Our annual coding competition tested participants' problem-solving skills and algorithmic thinking. Competitors raced against time to solve challenging programming puzzles.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "mentorship-program": {
    title: "Mentorship Program",
    date: "January 10, 2024",
    description:
      "Our mentorship program pairs students with industry professionals for guidance and career development. These one-on-one sessions provide invaluable insights and support.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "ui-ux-workshop": {
    title: "UI/UX Design Workshop",
    date: "December 5, 2023",
    description:
      "A hands-on workshop covering user interface and user experience design principles. Participants learned to create beautiful, user-centered designs using industry-standard tools.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "team-building-day": {
    title: "Team Building Day",
    date: "November 18, 2023",
    description:
      "A fun day of team activities and bonding for our staff and students. From outdoor games to collaborative challenges, we strengthened our community bonds.",
    images: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
  },
}

const otherAlbums = [
  { id: "bootcamp-graduation-2024", title: "Bootcamp Graduation 2024", cover: "/placeholder.svg?height=200&width=300" },
  { id: "hackathon-2024", title: "CodeClub Hackathon 2024", cover: "/placeholder.svg?height=200&width=300" },
  { id: "school-coding-workshop", title: "School Coding Workshop", cover: "/placeholder.svg?height=200&width=300" },
  { id: "tech-conference-2024", title: "Tech Conference 2024", cover: "/placeholder.svg?height=200&width=300" },
  { id: "web-dev-bootcamp", title: "Web Development Bootcamp", cover: "/placeholder.svg?height=200&width=300" },
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

      {/* Album Viewer Section - Dark Background */}
      <section className="pt-16 bg-[#1a1a2e] min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-[1fr,400px] gap-6 md:gap-8">
            {/* Main Image Carousel */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[16/10] bg-black rounded-lg overflow-hidden">
                <img
                  src={album.images[currentIndex] || "/placeholder.svg"}
                  alt={`${album.title} - Image ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
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
                      className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden border-2 transition-all ${
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
            <div className="text-white">
              <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-[#d946a8] mb-2">
                {album.title}
              </h1>
              <p className="text-white/60 text-sm mb-4 md:mb-6">{album.date}</p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">{album.description}</p>
              <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
                <span>{currentIndex + 1}</span>
                <span>/</span>
                <span>{album.images.length} photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Albums Section */}
      <section className="py-12 md:py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-xl md:text-3xl text-foreground mb-6 md:mb-8">More Albums</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
                  <h3 className="font-display font-semibold text-xs md:text-sm text-white text-center">
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
