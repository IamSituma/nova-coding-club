import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 text-foreground">Get In Touch</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Have questions? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 md:py-28 px-4 bg-secondary/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-4">
                    <Mail className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1 text-foreground">Email</h3>
                      <p className="text-foreground/60">info@codeclub.ug</p>
                      <p className="text-foreground/60 text-sm">support@codeclub.ug</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-4">
                    <Phone className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1 text-foreground">Phone</h3>
                      <p className="text-foreground/60">+256 700 000 000</p>
                      <p className="text-foreground/60">+256 800 111 111</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-4">
                    <MapPin className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1 text-foreground">Location</h3>
                      <p className="text-foreground/60">Kampala, Uganda</p>
                      <p className="text-foreground/60 text-sm">Multiple learning centers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-4">
                    <Clock className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1 text-foreground">Hours</h3>
                      <p className="text-foreground/60">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-foreground/60 text-sm">Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
