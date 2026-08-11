"use client";

import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Junior Developer",
    company: "Future Code Technologies",
    period: "June 2025 - Present",
    bullets: [
      "Developed and deployed full-stack web applications using React, Node.js, and Next.js with focus on code quality, performance optimization, and scalability",
      "Implemented secure JWT-based authentication systems and integrated payment gateways including Stripe with PCI compliance considerations",
      "Collaborated with cross-functional development teams in Agile/Scrum environment using sprint planning, daily standups, and iterative development",
      "Designed and optimized MySQL database schemas with 100+ tables for high-concurrency read/write operations and data integrity",
      "Developed RESTful APIs using Node.js and Express.js with proper error handling and documentation"
    ]
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "October 2024 - Present",
    bullets: [
      "Built and deployed multiple full-stack applications for personal projects and client engagements using MERN (MongoDB, Express, React, Node) and Next.js technology stacks",
      "Implemented end-to-end features including user authentication, payment processing, product management, inventory tracking, and responsive user interfaces",
      "Developed workflow automation solutions using n8n platform for process optimization and integration of third-party services",
      "Created mobile applications using Flutter and Android development frameworks"
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animate the vertical line height based on scroll progress
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );

    // 2. Animate each experience item marker and card when visible
    const items = gsap.utils.toArray<HTMLElement>(".experience-item");
    items.forEach((item) => {
      const marker = item.querySelector(".timeline-marker");
      const card = item.querySelector(".timeline-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      if (marker) {
        tl.to(marker, {
          borderColor: "var(--accent, #0284c7)",
          color: "var(--accent, #0284c7)",
          scale: 1.15,
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      }

      if (card) {
        tl.fromTo(
          card,
          { opacity: 0, x: -45, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.35"
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section id="experience" className="relative py-24 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="max-w-4xl mx-auto relative pl-10 sm:pl-16 space-y-16">
          {/* Vertical progress line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-200 rounded-full overflow-hidden">
            <div
              ref={lineRef}
              className="w-full h-0 bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            />
          </div>

          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="experience-item relative pl-10 sm:pl-14"
            >
              {/* Icon Marker */}
              <div className="timeline-marker absolute left-0 top-1 p-2.5 rounded-xl bg-white border border-slate-200 text-slate-400 z-10 transition-colors duration-300 shadow-sm">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Card Container */}
              <div className="timeline-card glass-card p-6 sm:p-8 rounded-2xl relative border border-slate-200/50 hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-secondary">
                      {exp.company}
                    </p>
                  </div>

                  <div className="inline-flex items-center text-xs text-slate-600 font-mono bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 mr-3" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
