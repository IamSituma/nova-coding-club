"use client"; // Client component

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq"; // <-- import FAQ
import { BookOpen, Globe, Users, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Knowledge",
      description:
        "We provide expert guidance in coding, software development, and technology, ensuring learners gain practical skills that are immediately applicable in real-world projects",
      icon: BookOpen,
    },
    {
      title: "Inclusivity",
      description:
        "We believe technology should be accessible to everyone. Our programs welcome learners of all backgrounds, regardless of gender, location, or experience level.",
      icon: Globe,
    },
    {
      title: "Empowerment",
      description:
        "Through hands-on coding projects, mentorship, and career guidance, we empower students to build software solutions and confidently pursue careers in tech.",
      icon: Users,
    },
    {
      title: "Innovation",
      description:
        "We foster creativity and problem-solving in software engineering, encouraging learners to explore new technologies and develop innovative solutions.",
      icon: Lightbulb,
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded CodeClub",
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

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden h-[500px] md:h-[600px]">
          <img
            src="/ideas.jpg"
            alt="Coding Ideas"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 h-full flex flex-col justify-center">
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              The Idea Behind Our Club
            </h1>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#009696] mt-4">
              Tech Skills Should Be for Everyone
            </h2>
          </div>
        </section>

        {/* STATS */}
        <div className="bg-[#1a202c] py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <h3 className="font-display font-bold text-2xl md:text-4xl text-white mb-2">{stat.value}</h3>
                <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES */}
        <section className="py-16 md:py-24 px-4 bg-[#e8f4f8]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-10 md:mb-14 text-center text-foreground">
              Our Mission Starts With Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="text-[#009696]" size={32} />
                    </div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-3 text-foreground">{value.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR JOURNEY */}
        <section className="bg-background py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-12 text-foreground text-center">
              Our Journey
            </h2>

            <div className="relative overflow-hidden">
              <div
                className={`flex gap-8 md:gap-12 animate-scroll ${
                  hovered !== null ? "animation-play-state-paused" : ""
                }`}
              >
                {[...milestones, ...milestones].map((milestone, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex-shrink-0 w-72 md:w-80 transition-all duration-300 pt-12 ${
                      hovered === idx
                        ? "scale-105 z-10"
                        : hovered !== null
                        ? "opacity-30"
                        : ""
                    }`}
                    style={{ overflow: "visible" }}
                  >
                    {/* Year Circle */}
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-full border-2 border-primary bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-display font-bold text-lg md:text-xl">
                        {milestone.year}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="mb-4">
                      <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="w-full h-56 md:h-64 overflow-hidden rounded-lg">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Connector Dash */}
                    {idx < milestones.length * 2 - 1 && (
                      <div className="h-1 w-full bg-primary/30 mt-6 md:mt-8 rounded"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Fade overlay left & right */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-20" />
            </div>

            <style jsx>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
                display: flex;
              }
              .animation-play-state-paused {
                animation-play-state: paused !important;
              }
            `}</style>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQ />  {/* <-- replaced "Why Choose CodeClub" with FAQ */}

      </main>
      <Footer />
    </>
  );
}
