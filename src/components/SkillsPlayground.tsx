"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, Layers, Server, Smartphone, Database, Shield, Move } from "lucide-react";

interface SkillItem {
  name: string;
  category: string;
}

interface Bubble {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
}

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Cpu,
    colorClass: "border-emerald-500/30 text-emerald-600 bg-emerald-500/5 hover:border-emerald-500 hover:text-emerald-700",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "Dart", "HTML/CSS", "XML"],
  },
  {
    id: "frontend",
    title: "Frontend & Frameworks",
    icon: Layers,
    colorClass: "border-sky-500/30 text-sky-600 bg-sky-500/5 hover:border-sky-500 hover:text-sky-700",
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Bootstrap"],
  },
  {
    id: "backend",
    title: "Backend & Integration",
    icon: Server,
    colorClass: "border-amber-500/30 text-amber-600 bg-amber-500/5 hover:border-amber-500 hover:text-amber-700",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "WebRTC", "Stripe API", "Google Gemini API", "Vapi"],
  },
  {
    id: "mobile",
    title: "Mobile & Desktop Dev",
    icon: Smartphone,
    colorClass: "border-purple-500/30 text-purple-600 bg-purple-500/5 hover:border-purple-500 hover:text-purple-700",
    skills: ["Flutter", "Android Studio", "Java (Android)", "Swing/AWT (Desktop)"],
  },
  {
    id: "databases",
    title: "Databases & ORMs",
    icon: Database,
    colorClass: "border-indigo-500/30 text-indigo-600 bg-indigo-500/5 hover:border-indigo-500 hover:text-indigo-700",
    skills: ["MySQL", "MongoDB", "Firebase Firestore", "Prisma ORM", "SQLite", "Realtime Database"],
  },
  {
    id: "devops",
    title: "DevOps & Security",
    icon: Shield,
    colorClass: "border-rose-500/30 text-rose-600 bg-rose-500/5 hover:border-rose-500 hover:text-rose-700",
    skills: ["Git/GitHub", "Docker", "Vercel", "n8n Automation", "JWT / OAuth / NextAuth", "AES / E2E Encryption", "CryptoJS"],
  },
];

// Flat list of skills
const allSkills: SkillItem[] = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ name: skill, category: cat.id }))
);

export default function SkillsPlayground() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const activeDragRef = useRef<{
    bubbleId: string;
    lastClientX: number;
    lastClientY: number;
  } | null>(null);
  
  const mouseRef = useRef({ x: 0, y: 0, isInside: false });

  // Initialize bubbles
  useEffect(() => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const width = rect.width || 600;
    const height = rect.height || 550;

    // Create bubbles with initial coordinates
    bubblesRef.current = allSkills.map((skill, index) => {
      // Calculate a radius based on the name length
      const radius = Math.max(34, Math.min(80, skill.name.length * 4 + 18));
      const mass = radius * radius; // mass proportional to area

      // Arrange them layout-wise without overlapping too much
      const cols = 6;
      const col = index % cols;
      const row = Math.floor(index / cols);

      return {
        id: `bubble-${index}`,
        name: skill.name,
        category: skill.category,
        x: radius + col * (width / cols) + (Math.random() - 0.5) * 20,
        y: radius + row * (height / 5) + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius,
        mass,
      };
    });

    // Cleanup drag listeners if component unmounts
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  // Main animation / Physics loop
  useEffect(() => {
    const loop = () => {
      if (!canvasRef.current) {
        animationFrameRef.current = requestAnimationFrame(loop);
        return;
      }

      const rect = canvasRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const bubbles = bubblesRef.current;
      const activeDrag = activeDragRef.current;

      // 1. Apply forces (buoyancy, drag, category gravity, cursor repulsion)
      bubbles.forEach((b) => {
        // Skip updating physics position via velocity if it's currently being dragged
        if (activeDrag && activeDrag.bubbleId === b.id) {
          return;
        }

        // Apply friction
        b.vx *= 0.985;
        b.vy *= 0.985;

        // Buoyancy / Ambient drift
        b.vx += (Math.random() - 0.5) * 0.08;
        b.vy += (Math.random() - 0.5) * 0.08;

        // Pull toward center if it's the hovered category
        if (hoveredCategory && b.category === hoveredCategory) {
          const pullForce = 0.05;
          const targetX = width / 2;
          const targetY = height / 2;
          b.vx += (targetX - b.x) * pullForce * 0.15;
          b.vy += (targetY - b.y) * pullForce * 0.15;
        }

        // Repel from cursor
        if (mouseRef.current.isInside) {
          const dx = b.x - mouseRef.current.x;
          const dy = b.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 130;
          if (dist < repelRadius && dist > 5) {
            const force = (repelRadius - dist) / repelRadius;
            const strength = 1.8;
            b.vx += (dx / dist) * force * strength;
            b.vy += (dy / dist) * force * strength;
          }
        }

        // Apply velocities to coordinates
        b.x += b.vx;
        b.y += b.vy;

        // Bound checks
        const elasticity = -0.65;
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx *= elasticity;
        } else if (b.x + b.radius > width) {
          b.x = width - b.radius;
          b.vx *= elasticity;
        }

        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy *= elasticity;
        } else if (b.y + b.radius > height) {
          b.y = height - b.radius;
          b.vy *= elasticity;
        }
      });

      // 2. Bubble to bubble elastic collisions
      for (let i = 0; i < bubbles.length; i++) {
        const a = bubbles[i];
        for (let j = i + 1; j < bubbles.length; j++) {
          const b = bubbles[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.radius + b.radius;

          if (dist < minDist) {
            // Resolve overlap (push them apart to avoid sinking together)
            const overlap = minDist - dist;
            const nx = dx / (dist || 1);
            const ny = dy / (dist || 1);

            const totalMass = a.mass + b.mass;
            
            // Check if either bubble is active drag, don't push dragged bubble
            if (activeDrag && activeDrag.bubbleId === a.id) {
              b.x += nx * overlap;
              b.y += ny * overlap;
            } else if (activeDrag && activeDrag.bubbleId === b.id) {
              a.x -= nx * overlap;
              a.y -= ny * overlap;
            } else {
              a.x -= nx * overlap * (b.mass / totalMass);
              a.y -= ny * overlap * (b.mass / totalMass);
              b.x += nx * overlap * (a.mass / totalMass);
              b.y += ny * overlap * (a.mass / totalMass);
            }

            // Standard elastic collision impulse resolution
            const rvx = b.vx - a.vx;
            const rvy = b.vy - a.vy;
            const velAlongNormal = rvx * nx + rvy * ny;

            if (velAlongNormal < 0) {
              const restitution = 0.7; // bounce percentage
              const impulse = -(1 + restitution) * velAlongNormal / (1 / a.mass + 1 / b.mass);

              if (activeDrag && activeDrag.bubbleId === a.id) {
                b.vx += (impulse * nx) / b.mass;
                b.vy += (impulse * ny) / b.mass;
              } else if (activeDrag && activeDrag.bubbleId === b.id) {
                a.vx -= (impulse * nx) / a.mass;
                a.vy -= (impulse * ny) / a.mass;
              } else {
                a.vx -= (impulse * nx) / a.mass;
                a.vy -= (impulse * ny) / a.mass;
                b.vx += (impulse * nx) / b.mass;
                b.vy += (impulse * ny) / b.mass;
              }
            }
          }
        }
      }

      // 3. Update DOM positions directly
      bubbles.forEach((b) => {
        const el = document.getElementById(b.id);
        if (el) {
          el.style.transform = `translate3d(${b.x - b.radius}px, ${b.y - b.radius}px, 0)`;
        }
      });

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hoveredCategory]);

  // Pointer drag event handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    
    const bubble = bubblesRef.current.find((b) => b.id === id);
    if (!bubble) return;

    activeDragRef.current = {
      bubbleId: id,
      lastClientX: e.clientX,
      lastClientY: e.clientY,
    };

    bubble.vx = 0;
    bubble.vy = 0;

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!activeDragRef.current || !canvasRef.current) return;
    const { bubbleId, lastClientX, lastClientY } = activeDragRef.current;
    
    const bubble = bubblesRef.current.find((b) => b.id === bubbleId);
    if (!bubble) return;

    const rect = canvasRef.current.getBoundingClientRect();
    
    // Position bubble directly under cursor, clamped to canvas limits
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;
    
    bubble.x = Math.max(bubble.radius, Math.min(rect.width - bubble.radius, rawX));
    bubble.y = Math.max(bubble.radius, Math.min(rect.height - bubble.radius, rawY));

    // Measure cursor speed and apply it as velocity (thrown speed)
    const dx = e.clientX - lastClientX;
    const dy = e.clientY - lastClientY;
    
    bubble.vx = dx * 0.8;
    bubble.vy = dy * 0.8;

    activeDragRef.current.lastClientX = e.clientX;
    activeDragRef.current.lastClientY = e.clientY;
  };

  const handlePointerUp = () => {
    activeDragRef.current = null;
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  // Cursor position tracking within the canvas
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
    mouseRef.current.isInside = true;
  };

  const handleMouseLeave = () => {
    mouseRef.current.isInside = false;
  };

  // Get matching border classes depending on highlighted states
  const getBubbleStyle = (bubble: Bubble) => {
    const isHighlighted = hoveredCategory === null || bubble.category === hoveredCategory;
    const baseStyle = "absolute select-none rounded-full flex items-center justify-center text-center font-mono font-medium border text-xs shadow-sm bg-white/70 backdrop-blur-md cursor-grab active:cursor-grabbing transition-all duration-300 pointer-events-auto will-change-transform";

    if (!isHighlighted) {
      return `${baseStyle} border-slate-200 text-slate-400 opacity-30 shadow-none`;
    }

    // Colors matched to highlighted categories
    switch (bubble.category) {
      case "languages":
        return `${baseStyle} border-emerald-400 text-emerald-700 shadow-emerald-500/10 hover:border-emerald-500 scale-105 z-20`;
      case "frontend":
        return `${baseStyle} border-sky-400 text-sky-700 shadow-sky-500/10 hover:border-sky-500 scale-105 z-20`;
      case "backend":
        return `${baseStyle} border-amber-400 text-amber-700 shadow-amber-500/10 hover:border-amber-500 scale-105 z-20`;
      case "mobile":
        return `${baseStyle} border-purple-400 text-purple-700 shadow-purple-500/10 hover:border-purple-500 scale-105 z-20`;
      case "databases":
        return `${baseStyle} border-indigo-400 text-indigo-700 shadow-indigo-500/10 hover:border-indigo-500 scale-105 z-20`;
      case "devops":
        return `${baseStyle} border-rose-400 text-rose-700 shadow-rose-500/10 hover:border-rose-500 scale-105 z-20`;
      default:
        return `${baseStyle} border-slate-300 text-slate-700 hover:border-primary/40`;
    }
  };

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left panel: category selectors */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
          Hover over or click a skill category below. The corresponding skill bubbles will instantly gravitate to the center of the sandbox. Hover, grab, fling, and test the physics boundaries!
        </p>

        <div className="flex flex-col space-y-3.5">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isHovered = hoveredCategory === cat.id;
            return (
              <button
                key={cat.id}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => setHoveredCategory(hoveredCategory === cat.id ? null : cat.id)}
                className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 group ${
                  isHovered || hoveredCategory === cat.id
                    ? "bg-slate-50 border-primary shadow-sm translate-x-2"
                    : "bg-white border-slate-200 hover:bg-slate-50/50 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className={`p-2 rounded-lg border transition-colors duration-300 ${cat.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 tracking-wide">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {cat.skills.join(", ")}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right panel: dynamic physics canvas */}
      <div className="lg:col-span-7 flex flex-col">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center text-xs text-slate-500 font-semibold space-x-1.5 uppercase tracking-wide">
            <Move className="w-4 h-4 text-slate-400" />
            <span>Interactive Sandbox Canvas</span>
          </div>
          <span className="text-[10px] bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded border border-slate-200">
            60FPS Vector Physics
          </span>
        </div>

        <div
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex-1 w-full h-[550px] min-h-[500px] bg-slate-50/40 rounded-2xl border border-slate-200/80 shadow-inner overflow-hidden select-none touch-none"
        >
          {/* Subtle grid mesh background inside canvas */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

          {/* Interactive bubbles */}
          {allSkills.map((skill, index) => {
            const bubbleId = `bubble-${index}`;
            const radius = Math.max(34, Math.min(80, skill.name.length * 4 + 18));
            
            // Find existing bubble to get radius initially
            const tempBubble = bubblesRef.current.find((b) => b.id === bubbleId);
            const rVal = tempBubble ? tempBubble.radius : radius;

            return (
              <div
                key={bubbleId}
                id={bubbleId}
                onPointerDown={(e) => handlePointerDown(e, bubbleId)}
                className={getBubbleStyle({
                  id: bubbleId,
                  name: skill.name,
                  category: skill.category,
                  x: 0,
                  y: 0,
                  vx: 0,
                  vy: 0,
                  radius: rVal,
                  mass: rVal * rVal,
                })}
                style={{
                  width: `${rVal * 2}px`,
                  height: `${rVal * 2}px`,
                  fontSize: rVal < 42 ? "10px" : "11px",
                }}
              >
                <span className="px-2 truncate pointer-events-none leading-none select-none font-bold">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
