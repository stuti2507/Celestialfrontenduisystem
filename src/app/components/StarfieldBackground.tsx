import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Generate stars
    const stars: Star[] = [];
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        speed: Math.random() * 0.05 + 0.01,
      });
    }

    // Animation
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Slow drift
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;

        // Draw star
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}

export function SnowflakePattern({ className = '', opacity = 0.08 }: { className?: string; opacity?: number }) {
  return (
    <motion.svg
      className={`absolute pointer-events-none ${className}`}
      style={{ opacity }}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      {/* Hexagonal snowflake pattern */}
      <g transform="translate(200, 200)">
        {/* Center hexagon */}
        <path
          d="M 0,-60 L 52,-30 L 52,30 L 0,60 L -52,30 L -52,-30 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-[#A8D5E2]"
        />
        
        {/* Inner spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <line x1="0" y1="0" x2="0" y2="-60" stroke="currentColor" strokeWidth="1" className="text-[#A8D5E2]" />
            <line x1="0" y1="-40" x2="-15" y2="-50" stroke="currentColor" strokeWidth="1" className="text-[#A8D5E2]" />
            <line x1="0" y1="-40" x2="15" y2="-50" stroke="currentColor" strokeWidth="1" className="text-[#A8D5E2]" />
          </g>
        ))}
        
        {/* Outer ring */}
        <circle cx="0" cy="0" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-[#A8D5E2]" opacity="0.5" />
        
        {/* Molecular nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const x = Math.cos((angle * Math.PI) / 180) * 80;
          const y = Math.sin((angle * Math.PI) / 180) * 80;
          return (
            <circle key={`node-${angle}`} cx={x} cy={y} r="3" fill="currentColor" className="text-[#A8D5E2]" opacity="0.7" />
          );
        })}
      </g>
    </motion.svg>
  );
}