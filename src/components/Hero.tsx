"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const roles = [
  "Full Stack Developer",
  "Mobile App Developer",
  "AI Integration Enthusiast",
  "Team Leader",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden mesh-grid">
      {/* Dynamic blob background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-blob [animation-delay:4s]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border-primary/20 w-fit text-primary text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Opportunities</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans"
            >
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-600 bg-clip-text text-transparent glow-text-primary">Hi, I'm</span> <br />
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-600 bg-clip-text text-transparent glow-text-primary">
                Kalindu Koanara
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-10 text-xl sm:text-2xl font-medium text-slate-600 flex items-center font-mono"
            >
              <span>[</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-accent mx-2 font-semibold"
              >
                {roles[roleIndex]}
              </motion.span>
              <span>]</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            I construct scalable web and cross-platform mobile apps using **React**, **Next.js**, **Node.js**, **Flutter**, and **Java**. Passionate about E2E encryption, secure authentications, and AI workflow integrations.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <a
              href="https://github.com/Sanka-47"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kalindu-koanara47"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kalindu47kk@gmail.com"
              className="p-3 rounded-xl glass-card text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all hover:scale-110 duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/10 hover:shadow-slate-900/25 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold glass-card text-slate-800 hover:border-slate-400 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-accent group-hover:animate-bounce" />
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Right Terminal Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="w-full glass-card border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">

            {/* Terminal Header */}
            <div className="bg-slate-100 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-slate-500 font-mono">kalindu_profile.json</span>
              <span className="w-4" /> {/* Spacer */}
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4 text-slate-700 bg-white/60">
              <div className="flex items-center text-slate-400">
                <span className="text-accent mr-2">&gt;</span>
                <span>cat kalindu.json</span>
              </div>

              <div className="text-slate-600">
                <span className="text-slate-400">{"{"}</span>
                <div className="pl-4">
                  <div>
                    <span className="text-sky-600 font-semibold">"name"</span>: <span className="text-slate-800">"Kalindu Koanara"</span>,
                  </div>
                  <div>
                    <span className="text-sky-600 font-semibold">"origin"</span>: <span className="text-slate-800">"Sri Lanka"</span>,
                  </div>
                  <div>
                    <span className="text-sky-600 font-semibold">"experience"</span>: <span className="text-slate-800">"2+ Years Full Stack"</span>,
                  </div>
                  <div>
                    <span className="text-sky-600 font-semibold">"focus"</span>: <span className="text-slate-400">{"["}</span>
                    <span className="text-slate-800">"Web"</span>, <span className="text-slate-800">"Mobile"</span>, <span className="text-slate-800">"AI"</span>
                    <span className="text-slate-400">{"]"}</span>,
                  </div>
                  <div>
                    <span className="text-sky-600 font-semibold">"core_stack"</span>: <span className="text-slate-400">{"["}</span>
                    <div className="pl-4 text-sky-700">
                      "React/Next.js",<br />
                      "Node.js/Express",<br />
                      "Flutter/Dart",<br />
                      "Java/MySQL"<br />
                    </div>
                    <span className="text-slate-400">{"]"}</span>,
                  </div>
                  <div>
                    <span className="text-sky-600 font-semibold">"aws_certified"</span>: <span className="text-emerald-600 font-semibold">true</span>
                  </div>
                </div>
                <span className="text-slate-400">{"}"}</span>
              </div>

              <div className="flex items-center text-slate-400 pt-2">
                <span className="text-accent mr-2">&gt;</span>
                <span className="animate-pulse font-bold">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
