"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 z-10 scroll-mt-20">
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
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              A passionate engineer crafting seamless digital ecosystems
            </h3>
            
            <p className="leading-relaxed">
              I am a **Full Stack Developer** with a passion for designing and building highly scalable, secure, and user-centric web and mobile solutions. Having worked as both an Associate Developer and a Freelancer, I have hands-on experience navigating all phases of the software life cycle—from optimizing complex database configurations to implementing end-to-end security protocols.
            </p>

            <p className="leading-relaxed">
              Beyond individual contribution, I thrive in **Agile/Scrum** environments. I've directed and coordinated a cross-functional **7-member developer team** as Team Lead, ensuring high quality standards, reliable sprint releases, and client alignment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Location</h4>
                  <p className="text-xs text-slate-400">Ukuwela, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Heart className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Interests</h4>
                  <p className="text-xs text-slate-400">Kandyan Dancing, Swimming, Badminton</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6 relative border-l border-white/10 pl-4 ml-2">
                {/* BCU */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-4 border-[#030014]" />
                  <span className="text-xs text-secondary font-semibold">Expected 2026</span>
                  <h4 className="font-bold text-white text-sm mt-0.5">B.Sc. (Honours) in Software Engineering</h4>
                  <p className="text-xs text-slate-400">Birmingham City University</p>
                </div>

                {/* High School */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-4 border-[#030014]" />
                  <span className="text-xs text-slate-500 font-semibold">Graduated 2023</span>
                  <h4 className="font-bold text-white text-sm mt-0.5">High School Diploma</h4>
                  <p className="text-xs text-slate-400">Dharmaraja College, Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Certifications & Achievements</h3>
              </div>
              
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>AWS Cloud Practitioner Essentials Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Team Lead directing a 7-member development team in Agile environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Strong track record delivering high-quality client products on schedule</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
