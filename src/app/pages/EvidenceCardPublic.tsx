import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { GlassCard } from '../components/GlassCard';
import { ConfidenceBadge, PolicyTag } from '../components/Badges';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { Bookmark, Share2, Bell, MessageSquare, ExternalLink, Lock } from 'lucide-react';

export function EvidenceCardPublic() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="top-10 right-20" opacity={0.05} />
      
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-3xl font-semibold">
                  NAD+ Supplementation and Cellular Aging
                </h1>
                <div className="flex gap-2">
                  <ConfidenceBadge level="moderate" />
                  <PolicyTag relevance="medium-term" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Evidence ID: EVD-2024-0847 | Last Updated: February 10, 2026
              </p>
            </div>

            {/* Tab System */}
            <Tabs defaultValue="evidence" className="w-full">
              <TabsList className="grid w-full grid-cols-3 backdrop-blur-lg bg-white/50">
                <TabsTrigger value="evidence">Evidence</TabsTrigger>
                <TabsTrigger value="methods" className="flex items-center gap-2">
                  Methods
                  <Lock className="w-3 h-3" />
                </TabsTrigger>
                <TabsTrigger value="policy" className="flex items-center gap-2">
                  Policy
                  <Lock className="w-3 h-3" />
                </TabsTrigger>
              </TabsList>

              <TabsContent value="evidence" className="space-y-6 mt-6">
                {/* Claim */}
                <div>
                  <h3 className="font-semibold mb-2">Claim / Question</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Does NAD+ (nicotinamide adenine dinucleotide) supplementation improve markers of cellular aging and metabolic function in humans?
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="p-4 rounded-lg bg-[#D4F1F4]/30 border border-[#A8D5E2]/30">
                  <h3 className="font-semibold mb-2">Why It Matters</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    NAD+ levels decline with age and are linked to mitochondrial dysfunction, DNA repair capacity, and metabolic health. If supplementation proves effective and safe, it could represent a scalable intervention for healthspan extension.
                  </p>
                </div>

                {/* Evidence Type */}
                <div>
                  <h3 className="font-semibold mb-2">Evidence Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-white/60 border border-white/40">
                      Randomized Controlled Trials (n=8)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-white/60 border border-white/40">
                      Systematic Review (n=2)
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-white/60 border border-white/40">
                      Cohort Studies (n=4)
                    </span>
                  </div>
                </div>

                {/* Findings */}
                <div>
                  <h3 className="font-semibold mb-3">Key Findings</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#5AB9CC] mt-1">•</span>
                      <span>8 RCTs show NAD+ precursor supplementation increases blood NAD+ levels by 40-90% (moderate quality evidence)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5AB9CC] mt-1">•</span>
                      <span>Improvements in insulin sensitivity observed in 3/5 metabolic studies (heterogeneous results)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5AB9CC] mt-1">•</span>
                      <span>Mixed results on physical performance metrics; no consistent benefit detected across trials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5AB9CC] mt-1">•</span>
                      <span>Safety profile appears favorable in short-term studies (≤12 weeks); long-term data limited</span>
                    </li>
                  </ul>
                </div>

                {/* Limitations */}
                <div className="p-4 rounded-lg bg-[#E6EAF2]/30 border border-[#E6EAF2]/50">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    Limitations
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-1">⚠</span>
                      <span>Most trials ≤12 weeks; insufficient data on sustained use beyond 6 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-1">⚠</span>
                      <span>Heterogeneous dosing protocols (250-2000mg/day) limit comparability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-1">⚠</span>
                      <span>Primarily studied in middle-aged adults; data in elderly populations sparse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-1">⚠</span>
                      <span>Biomarker outcomes do not yet translate to validated longevity endpoints</span>
                    </li>
                  </ul>
                </div>

                {/* Citations */}
                <div>
                  <h3 className="font-semibold mb-3">Primary Citations</h3>
                  <div className="space-y-2">
                    {[
                      { title: 'Nicotinamide riboside supplementation in humans', journal: 'Nature Communications', year: '2024', pmid: '38123456' },
                      { title: 'NAD+ metabolism and metabolic health', journal: 'Cell Metabolism', year: '2023', pmid: '37654321' },
                      { title: 'Systematic review of NAD+ precursors', journal: 'Aging Cell', year: '2025', pmid: '39876543' },
                    ].map((citation, i) => (
                      <a
                        key={i}
                        href={`https://pubmed.ncbi.nlm.nih.gov/${citation.pmid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg bg-white/50 hover:bg-white/70 border border-white/40 transition-colors group"
                      >
                        <div className="flex-1">
                          <div className="text-sm font-medium">{citation.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {citation.journal} ({citation.year})
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-[#5AB9CC]" />
                      </a>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="methods" className="space-y-4 mt-6">
                <div className="p-8 text-center space-y-4">
                  <Lock className="w-12 h-12 mx-auto text-muted-foreground" />
                  <h3 className="font-semibold">Pro Access Required</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Full methodology, study tables, bias assessment, and effect size analysis available with Pro access.
                  </p>
                  <button className="px-6 py-2 bg-gradient-to-r from-[#75C4D5] to-[#5AB9CC] text-white rounded-lg hover:shadow-lg transition-all">
                    Upgrade to Pro
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="policy" className="space-y-4 mt-6">
                <div className="p-8 text-center space-y-4">
                  <Lock className="w-12 h-12 mx-auto text-muted-foreground" />
                  <h3 className="font-semibold">Pro Access Required</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Policy translation, implementation readiness assessment, and cost-benefit analysis available with Pro access.
                  </p>
                  <button className="px-6 py-2 bg-gradient-to-r from-[#75C4D5] to-[#5AB9CC] text-white rounded-lg hover:shadow-lg transition-all">
                    Upgrade to Pro
                  </button>
                </div>
              </TabsContent>
            </Tabs>

            {/* Action Bar */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/40">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors">
                <Bookmark className="w-4 h-4" />
                <span className="text-sm">Save</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="text-sm">Track Updates</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">View Debate</span>
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
