"use client";

import { useEffect, useRef } from "react";

interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  initialSize: number;
  color: ColorRGB;
  alpha: number;
  decay: number;
}

const colors: ColorRGB[] = [
  { r: 2, g: 132, b: 199 },   // sky-600
  { r: 14, g: 165, b: 233 },  // sky-500
  { r: 100, g: 116, b: 139 }, // slate-500
  { r: 125, g: 211, b: 252 }, // sky-300
  { r: 56, g: 189, b: 248 }   // sky-400
];

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if it's a mobile touch-only device (disable to optimize performance on mobile,
    // but check user-agent rather than maxTouchPoints to avoid breaking touch-screen Windows laptops)
    if (typeof window !== "undefined") {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) return; // Disable cursor trail on actual mobile devices
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();

    // Mouse Move event
    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      const lastX = lastMousePos.current.x;
      const lastY = lastMousePos.current.y;
      
      const distance = Math.sqrt((currentX - lastX) ** 2 + (currentY - lastY) ** 2);

      // Only spawn if mouse has moved at least 4 pixels (avoids spam when standing still)
      if (distance > 4) {
        // Spawn 1-2 trail particles
        const numParticles = Math.min(2, Math.floor(distance / 10) + 1);
        for (let i = 0; i < numParticles; i++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 4.5 + 2.5; // size between 2.5px and 7px
          particlesRef.current.push({
            x: currentX + (Math.random() - 0.5) * 4,
            y: currentY + (Math.random() - 0.5) * 4,
            vx: (Math.random() - 0.5) * 1.0,
            vy: (Math.random() - 0.5) * 1.0,
            size,
            initialSize: size,
            color,
            alpha: 1.0,
            decay: Math.random() * 0.08 + 0.04 // fade out speed
          });
        }

        lastMousePos.current = { x: currentX, y: currentY };
      }
    };

    // Click event (radial explosion burst)
    const handleMouseDown = (e: MouseEvent) => {
      const numBurstParticles = 14;
      for (let i = 0; i < numBurstParticles; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 5 + 3.5;
        const angle = (i / numBurstParticles) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 3 + 2; // radial expansion velocity
        
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          initialSize: size,
          color,
          alpha: 1.0,
          decay: Math.random() * 0.07 + 0.05
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    // Animation / Rendering loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Physics update
        p.x += p.vx;
        p.y += p.vy;
        
        // Apply tiny friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Size decay
        p.size -= p.decay;
        
        if (p.size <= 0.5) {
          particles.splice(i, 1);
          continue;
        }

        p.alpha = Math.max(0, p.size / p.initialSize);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Setup shadow/glow blur for premium look
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.5})`;
        
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
        ctx.fill();
      }

      // Reset shadow blur for optimization after draw
      ctx.shadowBlur = 0;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanups
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}
