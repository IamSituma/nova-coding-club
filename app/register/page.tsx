import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Register() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 text-foreground">Join CodeClub Today</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Take the first step toward your coding journey. Fill out the form below and our team will contact you with
              enrollment details.
            </p>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 md:py-28 px-4 bg-secondary/10">
          <div className="max-w-2xl mx-auto bg-background border border-border rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4 pb-6 border-b border-border">
                <h3 className="font-display font-bold text-lg text-foreground">Personal Information</h3>

                <div>
                  <label className="block text-foreground font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+256 700 000 000"
                      className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div className="space-y-4 pb-6 border-b border-border">
                <h3 className="font-display font-bold text-lg text-foreground">Program Selection</h3>

                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Which program are you interested in? *
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors">
                    <option value="">Select a program</option>
                    <option value="school">School Coding Club - UGX 450,000</option>
                    <option value="webdev">Bootcamp - Web Development - UGX 850,000</option>
                    <option value="mobiledev">Bootcamp - Mobile Development - UGX 850,000</option>
                    <option value="python">Advanced Python - UGX 400,000</option>
                    <option value="design">UI/UX Design - UGX 500,000</option>
                    <option value="data">Data Science - UGX 700,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Your Current Experience Level *</label>
                  <select className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors">
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner - No coding experience</option>
                    <option value="intermediate">Intermediate - Some coding knowledge</option>
                    <option value="advanced">Advanced - Professional experience</option>
                  </select>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 pb-6">
                <h3 className="font-display font-bold text-lg text-foreground">Additional Information</h3>

                <div>
                  <label className="block text-foreground font-medium mb-2">What are your goals? (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your learning goals..."
                    className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    className="mt-1 w-4 h-4 bg-secondary/30 border border-border rounded cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-foreground/70 text-sm cursor-pointer">
                    I agree to the terms and conditions and would like to receive updates about CodeClub programs.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-lg"
              >
                Complete Registration
              </button>

              <p className="text-center text-foreground/60 text-sm">
                Our team will contact you within 24 hours to confirm your enrollment.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
