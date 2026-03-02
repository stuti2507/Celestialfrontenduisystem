import { motion } from 'motion/react';

export function EcosystemCircle() {
  const layers = [
    {
      title: 'Layer 1 — Public Knowledge Bank',
      description: 'Verified, simplified science written by MDs, PhDs, and qualified experts.',
      radius: 280,
      color: '#A8D5E2',
    },
    {
      title: 'Layer 2 — Expert Network & Evidence Bank',
      description: 'A structured, verified knowledge system for longevity experts.',
      radius: 220,
      color: '#8FCFE0',
    },
    {
      title: 'Layer 3 — Intelligence Engine',
      description: 'Anonymous real-world data → B2B insights → white papers → system change.',
      radius: 160,
      color: '#75C4D5',
    },
    {
      title: 'Layer 4 — ESTRA Think Tank',
      description: 'High-level problem-solving for insurers, hospitals, and governments. (Prevention models, regenerative organs, national health strategy.)',
      radius: 100,
      color: '#5AB9CC',
    },
  ];

  return (
    <div className="relative flex items-center justify-center py-16">
      {/* SVG Circular Diagram */}
      <svg width="600" height="600" viewBox="0 0 600 600" className="max-w-full h-auto">
        <g transform="translate(300, 300)">
          {/* Draw concentric circles */}
          {layers.map((layer, index) => (
            <motion.circle
              key={index}
              cx="0"
              cy="0"
              r={layer.radius}
              fill="none"
              stroke={layer.color}
              strokeWidth="1.5"
              opacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
            />
          ))}
          
          {/* Center dot */}
          <circle cx="0" cy="0" r="4" fill="#5AB9CC" opacity="0.8" />
          
          {/* Connecting lines */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const x = Math.cos((angle * Math.PI) / 180) * 280;
            const y = Math.sin((angle * Math.PI) / 180) * 280;
            return (
              <motion.line
                key={angle}
                x1="0"
                y1="0"
                x2={x}
                y2={y}
                stroke="#A8D5E2"
                strokeWidth="0.5"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            );
          })}
        </g>
      </svg>

      {/* Layer Labels - positioned around the circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-[600px] max-h-[600px]">
          {layers.map((layer, index) => {
            // Position labels at different angles around the circle
            const angles = [90, 180, 270, 0]; // Top, Left, Bottom, Right
            const angle = angles[index];
            const distance = layer.radius + 60;
            const x = Math.cos((angle * Math.PI) / 180) * distance;
            const y = Math.sin((angle * Math.PI) / 180) * distance;

            return (
              <motion.div
                key={index}
                className="absolute backdrop-blur-md bg-white/80 rounded-lg p-4 border border-white/60 shadow-sm pointer-events-auto max-w-[180px]"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                <h4 className="text-xs font-semibold mb-1 text-foreground">{layer.title}</h4>
                <p className="text-[10px] text-muted-foreground leading-snug">{layer.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
