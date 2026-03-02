import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { ConfidenceBadge, PolicyTag } from '../components/Badges';
import { Filter, ArrowRight } from 'lucide-react';

export function TopicHub() {
  const topEvidence = [
    {
      title: 'Mediterranean Diet and Cardiovascular Health',
      confidence: 'high' as const,
      policy: 'immediate' as const,
      summary: 'Strong evidence for cardiovascular benefits and mortality reduction',
    },
    {
      title: 'Exercise and Insulin Sensitivity',
      confidence: 'high' as const,
      policy: 'immediate' as const,
      summary: 'Consistent improvements across multiple trial populations',
    },
    {
      title: 'Metformin: Metabolic Effects Beyond Diabetes',
      confidence: 'moderate' as const,
      policy: 'medium-term' as const,
      summary: 'Promising signals in non-diabetic populations require further validation',
    },
  ];

  const myths = [
    {
      myth: 'Supplements can replace a healthy diet',
      evidence: 'No supplement has shown equivalent benefits to whole-food dietary patterns in long-term studies',
    },
    {
      myth: 'All dietary fat increases cardiovascular risk',
      evidence: 'Mediterranean diet studies show unsaturated fats (olive oil, nuts) improve cardiovascular outcomes',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="top-10 left-10" opacity={0.05} />
      <SnowflakePattern className="bottom-10 right-10" opacity={0.05} />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#75C4D5]/20 text-[#2C7A8C] text-sm">
            Topic Hub
          </div>
          <h1 className="text-4xl font-semibold">Metabolic Health</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive evidence synthesis on metabolic interventions for longevity. 
            Includes dietary patterns, exercise protocols, and pharmacological approaches.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-[#75C4D5] mb-1">47</div>
            <div className="text-sm text-muted-foreground">Evidence Items</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-[#5AB9CC] mb-1">12</div>
            <div className="text-sm text-muted-foreground">High Confidence</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-[#8FCFE0] mb-1">3</div>
            <div className="text-sm text-muted-foreground">Active Debates</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-[#A8D5E2] mb-1">18</div>
            <div className="text-sm text-muted-foreground">RCTs Cited</div>
          </GlassCard>
        </div>

        {/* Topic Overview */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Topic Overview</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Metabolic health encompasses the body's ability to efficiently process and utilize energy, 
              maintain stable glucose regulation, manage lipid profiles, and sustain healthy mitochondrial 
              function. It represents one of the most evidence-rich domains in longevity science.
            </p>
            <p>
              Multiple intervention categories show consistent benefits: dietary patterns (Mediterranean, 
              time-restricted feeding), structured exercise programs, and select pharmacological agents. 
              Evidence quality ranges from high-confidence lifestyle interventions to emerging 
              pharmacological approaches requiring further validation.
            </p>
          </div>
        </GlassCard>

        {/* Top Evidence Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Top Evidence</h2>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/70 border border-white/40 transition-colors text-sm">
              <Filter className="w-4 h-4" />
              Filter by Confidence
            </button>
          </div>

          <div className="space-y-4">
            {topEvidence.map((item, i) => (
              <GlassCard key={i} hover className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.summary}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <ConfidenceBadge level={item.confidence} />
                      <PolicyTag relevance={item.policy} />
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-sm text-[#5AB9CC] hover:underline">
                    <span>View</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Myth vs Evidence */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Myth vs Evidence</h2>
          <div className="space-y-4">
            {myths.map((item, i) => (
              <GlassCard key={i} className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase text-muted-foreground mb-2">Common Myth</div>
                    <p className="font-semibold">{item.myth}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase text-muted-foreground mb-2">What Evidence Shows</div>
                    <p className="text-sm text-muted-foreground">{item.evidence}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Policy Relevance */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Policy Relevance</h2>
          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-lg bg-[#75C4D5]/10 border border-[#75C4D5]/30">
              <h3 className="font-semibold mb-2">Immediate Implementation Ready</h3>
              <p className="text-muted-foreground">
                Community exercise programs and dietary guidance (Mediterranean pattern) have sufficient 
                evidence for immediate public health implementation with expected positive ROI.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#A8D5E2]/10 border border-[#A8D5E2]/30">
              <h3 className="font-semibold mb-2">Medium-Term Development</h3>
              <p className="text-muted-foreground">
                Metformin repurposing and time-restricted feeding protocols show promise but require 
                additional large-scale trials before population-level recommendation.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#D4F1F4]/10 border border-[#D4F1F4]/30">
              <h3 className="font-semibold mb-2">Research Stage</h3>
              <p className="text-muted-foreground">
                Novel metabolic modulators (AMPK activators, NAD+ precursors) remain in early-stage 
                investigation; clinical translation timelines uncertain.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Related Topics */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Topics</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['Cardiovascular Aging', 'Mitochondrial Function', 'Cellular Senescence'].map((topic, i) => (
              <GlassCard key={i} hover className="p-6">
                <h3 className="font-semibold mb-2">{topic}</h3>
                <div className="text-sm text-muted-foreground mb-4">
                  {i === 0 && '32 evidence items'}
                  {i === 1 && '28 evidence items'}
                  {i === 2 && '19 evidence items'}
                </div>
                <button className="text-sm text-[#5AB9CC] hover:underline flex items-center gap-2">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
