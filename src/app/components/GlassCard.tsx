import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <motion.div
      className={`relative rounded-xl backdrop-blur-lg bg-white/70 border border-white/60 shadow-lg ${className}`}
      style={{
        boxShadow: '0 8px 32px 0 rgba(168, 213, 226, 0.15)',
      }}
      whileHover={hover ? { 
        boxShadow: '0 8px 32px 0 rgba(168, 213, 226, 0.3)',
        borderColor: 'rgba(168, 213, 226, 0.8)',
        transition: { duration: 0.3 }
      } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <div
      className={`relative rounded-lg backdrop-blur-md bg-white/60 border border-white/50 p-6 ${className}`}
      style={{
        boxShadow: '0 4px 16px 0 rgba(168, 213, 226, 0.1)',
      }}
    >
      {children}
    </div>
  );
}
