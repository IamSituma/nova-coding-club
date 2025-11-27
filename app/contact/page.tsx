"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">

        {/* HERO */}
        <section className="flex items-center justify-center relative min-h-[40vh] sm:min-h-[70vh] md:min-h-[60vh] px-4 ">
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/contact.jpg')" }}
  />
  <div className="absolute inset-0 bg-black/60 z-0" />

  <div className="relative max-w-7xl mx-auto text-center text-white z-10">
    <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
      Get in Touch
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
      Have questions or want to collaborate? Our team is here to help. Reach out and we'll get back to you as soon as possible.
    </p>
  </div>
</section>


        {/* CONTACT SECTION */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT: FORM + CONTACT INFO */}
            <div className="space-y-6">

              {/* Form Title */}
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                Send Us a Message
              </h2>

              {/* Contact Info */}
              <div className="bg-white/5 p-4 md:p-6 rounded-2xl shadow-sm backdrop-blur-md space-y-3">
                <h3 className="font-display font-bold text-lg text-foreground">Contact Details</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Mail className="text-primary" size={18} />
                    <p className="text-foreground/70">info@novageneration.tech</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-primary" size={18} />
                    <p className="text-foreground/70">+256 741 004 466</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={18} />
                    <p className="text-foreground/70">Kampala, Uganda</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={18} />
                    <p className="text-foreground/70">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="bg-white/5 p-6 md:p-8 rounded-3xl shadow-sm backdrop-blur-md space-y-4">
                <div>
                  <label className="block text-foreground font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary transition text-sm"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary transition text-sm"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary transition resize-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 md:py-3 bg-black text-primary-foreground rounded-xl font-semibold text-base hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT: MAP + TEXT */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-[400px] md:h-[630px] rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0000000000005!2d32.58252!3d0.347596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb2c9c5d6f3b%3A0x91e8b1a23e21b74!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>

              <p className="text-foreground/70 text-center md:text-left text-sm md:text-base">
                Visit our main office in Kampala or reach out to our learning centers across the city. 
                We’re always ready to guide you and provide support for your tech education journey.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
