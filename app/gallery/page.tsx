import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const albums = [
  {
    id: "bootcamp-graduation-2024",
    title: "Bootcamp Graduation 2024",
    cover: "/graduation-ceremony-students-celebrating-with-cert.jpg",
    imageCount: 24,
  },
  {
    id: "hackathon-2024",
    title: "CodeClub Hackathon 2024",
    cover: "/students-at-hackathon-working-on-laptops-coding.jpg",
    imageCount: 36,
  },
  {
    id: "school-coding-workshop",
    title: "School Coding Workshop",
    cover: "/children-learning-coding-in-classroom-with-teacher.jpg",
    imageCount: 18,
  },
  {
    id: "tech-conference-2024",
    title: "Tech Conference 2024",
    cover: "/tech-conference-speakers-on-stage-presentation.jpg",
    imageCount: 42,
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    cover: "/students-learning-web-development-in-modern-classr.jpg",
    imageCount: 28,
  },
  {
    id: "mobile-dev-showcase",
    title: "Mobile Dev Showcase",
    cover: "/mobile-app-developers-presenting-apps-on-phones.jpg",
    imageCount: 15,
  },
  {
    id: "community-meetup",
    title: "Community Meetup",
    cover: "/tech-community-meetup-networking-event.jpg",
    imageCount: 22,
  },
  {
    id: "student-projects-expo",
    title: "Student Projects Expo",
    cover: "/students-presenting-tech-projects-at-exhibition.jpg",
    imageCount: 31,
  },
  {
    id: "coding-competition",
    title: "Coding Competition 2024",
    cover: "/programming-competition-students-focused-on-comput.jpg",
    imageCount: 27,
  },
  {
    id: "mentorship-program",
    title: "Mentorship Program",
    cover: "/mentor-teaching-student-one-on-one-coding-session.jpg",
    imageCount: 14,
  },
  {
    id: "ui-ux-workshop",
    title: "UI/UX Design Workshop",
    cover: "/design-workshop-students-working-on-wireframes.jpg",
    imageCount: 19,
  },
  {
    id: "team-building-day",
    title: "Team Building Day",
    cover: "/team-building-activities-outdoor-games-corporate.jpg",
    imageCount: 33,
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#009696] via-[#007a7a] to-[#005f5f] overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>

        <div className="relative z-10 text-center px-4 py-16 md:py-24">
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
            Our Gallery
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
            Explore moments from our events, workshops, bootcamps, and community gatherings. See the CodeClub experience
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
                {/* Pink gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#d946a8]/90 via-[#d946a8]/40 to-transparent"></div>
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
      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#009696] to-[#007a7a] rounded-2xl p-6 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-3 md:mb-4">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-sm md:text-lg text-white/90 max-w-2xl mx-auto mb-6 md:mb-8">
              Join CodeClub today and create your own memories. Be featured in our next gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/register"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-[#009696] rounded-md font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Join Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/programs"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-white border border-white rounded-md font-semibold hover:bg-white/10 transition-all duration-300 text-sm md:text-base text-center"
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
