import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { Bookmark, Clock, Star } from 'lucide-react';
import { ConfidenceBadge, PolicyTag } from '../components/Badges';

export function SavedLibrary() {
  const savedEvidence = [
    {
      id: 1,
      title: 'NAD+ Supplementation and Cellular Aging',
      confidence: 'moderate' as const,
      policy: 'medium-term' as const,
      savedDate: 'Feb 10, 2026',
      category: 'High Confidence',
    },
    {
      id: 2,
      title: 'Exercise Programs: All-Cause Mortality Effects',
      confidence: 'high' as const,
      policy: 'immediate' as const,
      savedDate: 'Feb 8, 2026',
      category: 'High Confidence',
    },
    {
      id: 3,
      title: 'Rapamycin: mTOR Inhibition in Humans',
      confidence: 'moderate' as const,
      policy: 'research-stage' as const,
      savedDate: 'Feb 5, 2026',
      category: 'Prevention Pilots',
    },
    {
      id: 4,
      title: 'Senolytic Therapy: Preliminary Human Data',
      confidence: 'preliminary' as const,
      policy: 'research-stage' as const,
      savedDate: 'Feb 1, 2026',
      category: 'Prevention Pilots',
    },
    {
      id: 5,
      title: 'Mediterranean Diet: Longevity Biomarkers',
      confidence: 'high' as const,
      policy: 'immediate' as const,
      savedDate: 'Jan 28, 2026',
      category: 'High Confidence',
    },
  ];

  const categories = ['All Items', 'High Confidence', 'Prevention Pilots', 'Custom Collections'];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="bottom-20 right-20" opacity={0.05} />

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">Saved Library</h1>
          <p className="text-muted-foreground">
            Your personal collection of evidence and research. Organized for quick reference.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-4">Collections</h3>
              <div className="space-y-2">
                {categories.map((category, i) => (
                  <button
                    key={i}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      i === 0
                        ? 'bg-[#A8D5E2]/20 text-[#2C7A8C] font-medium'
                        : 'text-muted-foreground hover:bg-white/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/40">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Saved</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">High Confidence</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Updated This Week</span>
                    <span className="font-medium">3</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">All Items ({savedEvidence.length})</h2>
              <select className="px-4 py-2 rounded-lg backdrop-blur-lg bg-white/70 border border-white/60 text-sm">
                <option>Sort by Date Saved</option>
                <option>Sort by Confidence</option>
                <option>Sort by Title</option>
              </select>
            </div>

            {savedEvidence.map((item) => (
              <GlassCard key={item.id} hover className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <ConfidenceBadge level={item.confidence} />
                        <PolicyTag relevance={item.policy} />
                      </div>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-white/60 transition-colors">
                      <Star className="w-5 h-5 fill-[#75C4D5] text-[#75C4D5]" />
                    </button>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Saved {item.savedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bookmark className="w-4 h-4" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#75C4D5] to-[#5AB9CC] text-white text-sm hover:shadow-lg transition-all">
                      View Evidence
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-white/50 hover:bg-white/70 border border-white/40 text-sm transition-colors">
                      Add Notes
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Empty State (hidden when items exist) */}
            {savedEvidence.length === 0 && (
              <GlassCard className="p-12">
                <div className="text-center space-y-4">
                  <Bookmark className="w-16 h-16 mx-auto text-muted-foreground opacity-30" />
                  <h3 className="text-xl font-semibold">No saved items yet</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Start building your research library by saving evidence cards that interest you.
                  </p>
                </div>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
