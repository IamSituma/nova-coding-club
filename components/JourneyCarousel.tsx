"use client";
import { useState } from "react";

export default function JourneyCarousel({ milestones }: { milestones: any[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
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
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full border-2 border-primary bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-display font-bold text-lg md:text-xl">
                    {milestone.year}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="w-full h-56 md:h-64 overflow-hidden rounded-lg">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {idx < milestones.length * 2 - 1 && (
                  <div className="h-1 w-full bg-primary/30 mt-6 md:mt-8 rounded"></div>
                )}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-20" />
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
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
  );
}
