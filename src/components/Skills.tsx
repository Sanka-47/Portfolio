"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Server, Smartphone, Database, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Cpu,
    color: "text-slate-300 border-slate-400/20 bg-slate-400/5",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "Dart", "HTML/CSS", "XML"],
  },
  {
    title: "Frontend & Frameworks",
    icon: Layers,
    color: "text-slate-400 border-slate-500/20 bg-slate-500/5",
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Bootstrap"],
  },
  {
    title: "Backend & Integration",
    icon: Server,
    color: "text-sky-400 border-sky-500/20 bg-sky-500/5",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "WebRTC", "Stripe API", "Google Gemini API", "Vapi"],
  },
  {
    title: "Mobile & Desktop Dev",
    icon: Smartphone,
    color: "text-slate-200 border-slate-300/20 bg-slate-300/5",
    skills: ["Flutter", "Android Studio", "Java (Android)", "Swing/AWT (Desktop)"],
  },
  {
    title: "Databases & ORMs",
    icon: Database,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    skills: ["MySQL", "MongoDB", "Firebase Firestore", "Prisma ORM", "SQLite", "Realtime Database"],
  },
  {
    title: "DevOps & Security",
    icon: Shield,
    color: "text-slate-400 border-slate-600/20 bg-slate-600/5",
    skills: ["Git/GitHub", "Docker", "Vercel", "n8n Automation", "JWT / OAuth / NextAuth", "AES / E2E Encryption", "CryptoJS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass-card p-6 rounded-2xl relative border border-slate-200/60 hover:border-primary/20"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-2.5 rounded-xl border ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Badges Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (catIndex * 0.05) + (skillIndex * 0.02) }}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 border border-slate-200 hover:border-primary/40 text-slate-700 hover:text-slate-950 cursor-default transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
