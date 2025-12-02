import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import JourneyCarousel from "@/components/JourneyCarousel";

export const metadata = {
  title: "About Us | Nova Coding Club",
  description:
    "Explore our coding programs, from school coding clubs to advanced bootcamps. Learn programming, web development, mobile apps, and more with hands-on projects.",
};

export default function About() {
  const values = [
    {
      title: "Knowledge",
      description:
        "We provide expert guidance in coding, software development, and technology, ensuring learners gain practical skills that are immediately applicable in real-world projects.",
      icon: "BookOpen",
    },
    {
      title: "Inclusivity",
      description:
        "We believe technology should be accessible to everyone. Our programs welcome learners of all backgrounds, regardless of gender, location, or experience level.",
      icon: "Globe",
    },
    {
      title: "Empowerment",
      description:
        "Through hands-on coding projects, mentorship, and career guidance, we empower students to build software solutions and confidently pursue careers in tech.",
      icon: "Users",
    },
    {
      title: "Innovation",
      description:
        "We foster creativity and problem-solving in software engineering, encouraging learners to explore new technologies and develop innovative solutions.",
      icon: "Lightbulb",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded Nova Coding Club",
      description:
        "Started with a vision to democratize coding education in Uganda. Our founders, passionate about tech, saw a gap in accessible quality programming education and decided to bridge it.",
      image: "/startup-founding-team-office.jpg",
    },
    {
      year: "2021",
      title: "100 Students Graduated",
      description:
        "Successfully launched our first cohorts in Kampala. Our inaugural programs received overwhelming response, proving the demand for quality tech education. Students began landing tech jobs immediately.",
      image: "/students-graduation-celebrating-success.jpg",
    },
    {
      year: "2022",
      title: "Expanded to 5 Locations",
      description:
        "Grew to serve students across multiple cities in Uganda. We opened learning centers in Kampala, Entebbe, Fort Portal, Jinja, and Mbale to reach more aspiring developers.",
      image: "/multiple-coding-centers-locations-classrooms.jpg",
    },
    {
      year: "2023",
      title: "1000 Students Milestone",
      description:
        "Reached over 1000 students with 85% job placement rate. Our programs expanded to include bootcamps, specialized tracks, and corporate training solutions.",
      image: "/large-group-students-learning-coding-classroom.jpg",
    },
    {
      year: "2024",
      title: "50+ School Partnerships",
      description:
        "Established partnerships with leading schools and organizations. We now serve both individual learners and institutions, bringing quality tech education to high schools across the region.",
      image: "/school-partnership-collaboration-education.jpg",
    },
  ];

  const stats = [
    { value: "1000+", label: "Students Trained" },
    { value: "50+", label: "School Partners" },
    { value: "15+", label: "Programs Offered" },
    { value: "85%", label: "Job Placement Rate" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden h-[350px] sm:h-[800px] md:h-[600px]">
          <img
            src="/ideas.jpg"
            alt="Coding Ideas"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 h-full flex flex-col justify-center">
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
              The Idea Behind Our Club
            </h1>
            <h2 className="font-display font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#009696] mt-4">
              Tech Skills Should Be for Everyone
            </h2>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#1a202c] py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/70 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-12 sm:py-16 md:py-24 px-4 bg-[#e8f4f8]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-10 md:mb-14 text-center text-foreground">
              Our Mission Starts With Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-display font-bold text-lg md:text-xl mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR JOURNEY CAROUSEL */}
        <JourneyCarousel milestones={milestones} />

        {/* FAQ SECTION */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
