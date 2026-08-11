"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Cpu, Sparkles, X } from "lucide-react";

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

interface Project {
  title: string;
  github: string;
  tech: string[];
  category: "web" | "mobile" | "ai" | "security";
  description: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "CloudPrep - AI Cloud Certification Prep",
    github: "https://github.com/Sanka-47/Ai-Cloud-Certification-Prep",
    tech: ["React.js", "Google Gemini API", "Firebase", "Vapi", "Tailwind CSS"],
    category: "ai",
    description: "An AI-powered certification learning application helping users prep for AWS and GCP exams through voice interaction and dynamic query solvers.",
    features: [
      "Developed AI-powered interactive quiz generator utilizing Google Gemini API for dynamic question generation based on AWS and GCP certification materials",
      "Implemented voice interaction features using Vapi for audio learning and text-to-speech functionality",
      "Built responsive web application using React and Tailwind CSS with real-time quiz functionality and progress tracking"
    ]
  },
  {
    title: "Exotics Watches - E-Commerce Application",
    github: "https://github.com/Sanka-47/Sanka-47-Exotic-Watches-NextJ",
    tech: ["Next.js 15", "Prisma ORM", "NextAuth", "Stripe", "Cloudinary", "shadcn/ui"],
    category: "web",
    description: "A secure and high-performance e-commerce platform built with Next.js 15 server-side capabilities, fully integrated with payment gateways and content optimization layers.",
    features: [
      "Built responsive e-commerce web application using Next.js 15 framework with server-side rendering and static generation for optimal performance",
      "Implemented secure user authentication using NextAuth with session management and multiple provider support",
      "Integrated Stripe payment gateway for secure credit card processing and Cloudinary API for optimized image storage and delivery",
      "Developed admin analytics dashboard with shadcn/ui components for real-time sales tracking and inventory management"
    ]
  },
  {
    title: "React Chat App - Secure Communication Platform",
    github: "https://github.com/Sanka-47/React-Chat-App",
    tech: ["React.js", "Node.js", "WebRTC", "Socket.IO", "Firebase", "Tailwind CSS", "Framer Motion"],
    category: "security",
    description: "A highly secure instant messaging app focusing on extreme privacy, featuring client-side message encryption and peer-to-peer communication tools.",
    features: [
      "Built highly secure messaging platform with end-to-end encryption supporting private messaging, group chats, file sharing, and voice/video calling",
      "Implemented WebRTC for peer-to-peer voice and video communication with Socket.IO for signaling and real-time data synchronization",
      "Designed advanced security features including AES encryption for messages, dual-layer authentication with passphrase and custom clearance questions",
      "Engineered auto-lock functionality after 5 minutes of inactivity and designed stealth dark-mode glassmorphic user interface using Framer Motion"
    ]
  },
  {
    title: "Void Project - Institute Management System",
    github: "https://github.com/Sanka-47/Void-PROJECT",
    tech: ["Java", "MySQL", "JDBC", "Swing/AWT", "Agile/Scrum"],
    category: "security",
    description: "A comprehensive Java-based desktop administration tool managing financial reporting, student tracks, and instructor payouts.",
    features: [
      "Served as Team Lead directing 7-member Agile development team in building comprehensive Java-based institute management system",
      "Designed and implemented specialized features including tutor wallet tracking, withdrawal management, student profile modules, and financial reporting",
      "Managed project requirements, coordinated team activities, conducted code reviews, and ensured timely delivery of sprint objectives",
      "Implemented robust database schema with proper transaction management and data integrity constraints"
    ]
  },
  {
    title: "TaprobaneWheels - Android Mobile Commerce",
    github: "https://github.com/Sanka-47/TaprobaneWheels",
    tech: ["Java", "Android Studio", "Firebase Auth", "Firebase Firestore", "XML", "Material Design"],
    category: "mobile",
    description: "A full-featured native Android commerce platform tailored for electronic product distributions.",
    features: [
      "Built full-featured Android e-commerce application for selling electronic products with modern Material Design UI",
      "Implemented shopping cart functionality, product listing with filtering, checkout flow, and order management",
      "Integrated Firebase Authentication for secure user login and Firebase Realtime Database/Firestore for real-time product data synchronization",
      "Added product search capability, category filtering, light/dark mode support, and enhanced user experience with intuitive navigation"
    ]
  },
  {
    title: "AI Code Mentor - Intelligent Learning Platform",
    github: "https://github.com/HasithaS001/Ai-code-mentor",
    tech: ["React.js", "Tailwind CSS", "Monaco Editor", "Node.js", "AI APIs"],
    category: "ai",
    description: "A smart learning space transforming standard raw codebase repos into structured, AI-parsed workflows.",
    features: [
      "Transformed complex codebases into interactive learning experiences using intelligent code analysis and AI-powered features",
      "Implemented AI-powered code explanations, automatic visual flow diagram generation, and contextual quiz generation based on code structure",
      "Integrated Monaco Editor with advanced features including syntax highlighting and text-to-speech voice narration for multi-modal learning",
      "Built flexible project management workflows supporting both ZIP file uploads and Git repository cloning for seamless code import"
    ]
  },
  {
    title: "PayHere Starter Pack - Payment Gateway",
    github: "https://github.com/Sanka-47/payhere_starter_pack",
    tech: ["React.js", "Express.js", "SQLite3", "PayHere API", "Node.js", "React Router"],
    category: "web",
    description: "A full-stack payment gateway solution integrating PayHere API for secure one-time and subscription-based transactions with automated notification handling.",
    features: [
      "Built secure full-stack payment processing system integrated with PayHere payment gateway supporting one-time and subscription payments",
      "Implemented automatic webhook notification handling to process real-time transaction updates and status synchronization",
      "Designed lightweight SQLite database schema for persistent transaction data storage, retrieval, and merchant records",
      "Developed interactive React frontend with client-side routing and Lucide icons for seamless checkout and payment tracking"
    ]
  },
  {
    title: "TaprobaneWheels Admin Panel",
    github: "https://github.com/Sanka-47/admintabrobane",
    tech: ["React.js", "Tailwind CSS", "Firebase", "REST API"],
    category: "web",
    description: "Web management control dashboard governing product inventories and access control protocols.",
    features: [
      "Developed comprehensive admin dashboard to manage TaprobaneWheels e-commerce platform with role-based access control",
      "Built modules for product management (CRUD operations), user management, order management, and inventory tracking",
      "Integrated real-time database synchronization with Firebase and implemented secure admin authentication system",
      "Designed scalable UI components using React and Tailwind CSS with responsive layouts and real-time data updates"
    ]
  },
  {
    title: "Exotica - Car Auction Website",
    github: "https://github.com/Sanka-47/Exotica-ReactJs",
    tech: ["React.js", "Tailwind CSS", "shadcn/ui", "Responsive Design"],
    category: "web",
    description: "Responsive portal integrating automotive auctions with complex visual media filters and dynamic bidding.",
    features: [
      "Designed and implemented clean, modern user interface utilizing React, Tailwind CSS, and shadcn design components",
      "Created fully responsive layouts with adaptive design for mobile, tablet, and desktop viewports",
      "Built complex vehicle filtering system with multiple search criteria and real-time bidding workflow interface",
      "Implemented real-time bid updates and vehicle listing pages with rich media support"
    ]
  },
  {
    title: "Exotica Blog - MERN Stack Platform",
    github: "https://github.com/Sanka-47/ExoticaBlog-MernStack",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary"],
    category: "web",
    description: "Complete full-stack blog hub with content editors, comment workflows, and cloud image structures.",
    features: [
      "Built full-stack car blogging platform using complete MERN stack for rich-media publication",
      "Implemented cloud image uploads with Cloudinary integration for optimized media storage and delivery",
      "Developed workflows for real-time blog publishing, content management, user comments, and category organization",
      "Designed RESTful backend API with proper error handling and implemented responsive front-end for content creation and consumption"
    ]
  },
  {
    title: "Daily Summary Automation - n8n Workflow",
    github: "https://github.com/HasithaS001/Ai-code-mentor",
    tech: ["n8n", "Workflow Automation", "REST APIs", "Email Integration"],
    category: "ai",
    description: "Workflow pipelines compiling personalized data digests, synchronizing with weather, calendar, and task logs.",
    features: [
      "Created comprehensive no-code automation architecture to generate and distribute personalized daily summary emails",
      "Integrated multiple external APIs to seamlessly bundle calendar events, active tasks, and real-time weather forecasts into daily summaries",
      "Implemented scheduled automation workflows using n8n platform for reliable and consistent email delivery",
      "Designed email templates for professional presentation of aggregated information and data formatting"
    ]
  },
  {
    title: "Flutter Journaling App - Cross-Platform",
    github: "https://github.com/Sanka-47/Void-PROJECT",
    tech: ["Flutter", "Dart", "SQLite"],
    category: "mobile",
    description: "An encrypted local diary application optimized for privacy-oriented personal logs.",
    features: [
      "Engineered clean, cross-platform mobile journaling application optimized for personal use and daily logging",
      "Implemented local SQLite database for persistent storage of journal entries with encryption capabilities",
      "Created intuitive user interface with Dart and Flutter frameworks supporting iOS and Android platforms",
      "Added features including date-based entry organization, full-text search, and data export functionality"
    ]
  },
  {
    title: "Cheese and Chocolates - POS System",
    github: "https://github.com/Sanka-47/CheeseAndChocolates-Java-Soft-Application",
    tech: ["Java", "Swing/AWT", "MySQL"],
    category: "security",
    description: "Java-built desktop POS program providing billing modules, low-stock signals, and purchase archives.",
    features: [
      "Developed standalone desktop Point of Sale (POS) system built entirely in Java for retail shop management",
      "Integrated automated invoice generation with formatting and printing capabilities for customer receipts",
      "Implemented real-time inventory and stock tracking with low-stock alerts and reorder management",
      "Built customer record database with purchase history and integrated sales reporting and analytics features"
    ]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "ai" | "security">("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative py-24 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4"
          >
            My Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(["all", "web", "mobile", "ai", "security"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20 scale-105"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-primary/30"
              }`}
            >
              {cat === "ai" ? "AI & Automation" : cat === "security" ? "Security & Desktop" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider bg-primary/10 border border-primary/20 text-primary">
                      {project.category === "ai" ? "AI & Automation" : project.category === "security" ? "Security & Sys" : project.category}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 group-hover:text-primary transition-colors">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-500">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-xs font-bold text-primary group-hover:underline">
                    <span>View System Details</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-xl font-bold bg-white border border-slate-200 hover:border-primary/40 text-slate-800 hover:bg-slate-50 transition-all duration-300"
            >
              {showAll ? "Show Less" : "Show All Projects"}
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8 border border-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider bg-primary/10 border border-primary/20 text-primary inline-block mb-3">
                    {selectedProject.category === "ai" ? "AI & Automation" : selectedProject.category === "security" ? "Security & System" : selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Key Accomplishments */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 text-secondary mr-2" />
                    Key Accomplishments & Features
                  </h4>
                  <ul className="space-y-2.5 pl-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <span className="text-accent mr-2.5 font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Used */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 flex items-center">
                    <Cpu className="w-4 h-4 text-accent mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 hover:border-primary/40 transition-all duration-200 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
