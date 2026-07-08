"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const experiences = [
  {
    role: "Associate Developer",
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
  return (
    <section id="experience" className="relative py-24 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative border-l border-white/10 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Icon Marker */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1 p-2 rounded-xl bg-[#030014] border border-white/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-2xl relative border border-white/5 hover:border-primary/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-secondary">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center text-xs text-slate-400 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5 mr-3" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
