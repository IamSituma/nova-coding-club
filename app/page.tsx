import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Description from "@/components/description"
import Programs from "@/components/programs"
import Partners from "@/components/partners"
import Categories from "@/components/categories"
import Tutors from "@/components/tutors"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Categories />
      <Partners />
      <Tutors />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
