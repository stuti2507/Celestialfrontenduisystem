import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';

export function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative flex items-center justify-center">
      <SnowflakePattern className="top-1/4 right-1/4" opacity={0.05} />

      <GlassCard className="p-12 max-w-2xl text-center">
        <div className="space-y-6">
          <div className="text-6xl font-bold text-[#A8D5E2]">404</div>
          <h1 className="text-3xl font-semibold">Page Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Return to the home page to explore the evidence platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#75C4D5] to-[#5AB9CC] text-white rounded-lg hover:shadow-lg transition-all">
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 backdrop-blur-lg bg-white/70 border border-white/60 rounded-lg hover:bg-white/80 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
