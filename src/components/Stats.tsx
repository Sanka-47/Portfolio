"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Database, ShieldCheck } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "2+ Years",
    label: "Professional & Freelance Dev",
    icon: Briefcase,
    color: "from-slate-300 to-slate-500",
  },
  {
    id: 2,
    value: "12+ Built",
    label: "Complex Systems Completed",
    icon: Code2,
    color: "from-slate-400 to-slate-600",
  },
  {
    id: 3,
    value: "100+ Tables",
    label: "Optimized Database Schemas",
    icon: Database,
    color: "from-slate-500 to-slate-700",
  },
  {
    id: 4,
    value: "AWS",
    label: "Certified Cloud Practitioner",
    icon: ShieldCheck,
    color: "from-sky-400 to-slate-500",
  },
];

export default function Stats() {
  return (
    <section className="relative py-12 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] duration-300"
              >
                {/* Glow Overlay */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-full filter blur-xl transition-opacity duration-300`} />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
