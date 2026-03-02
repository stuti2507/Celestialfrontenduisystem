import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { FileDown, CheckCircle2, AlertTriangle, DollarSign, Users } from 'lucide-react';

export function ThinkTank() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="top-20 left-20" opacity={0.05} />

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold">Think Tank Output</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert synthesis and policy translation for implementation-ready longevity interventions
          </p>
        </div>

        {/* Main Report */}
        <GlassCard className="p-10">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4 pb-6 border-b border-white/40">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#75C4D5]/20 text-[#2C7A8C] text-xs">
                Policy Brief
              </div>
              <h2 className="text-3xl font-semibold">
                Community Exercise Programs: Cost-Effective Longevity Intervention
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Published: February 5, 2026</span>
                <span>•</span>
                <span>Expert Panel: 8 contributors</span>
                <span>•</span>
                <span>Evidence Base: 47 sources</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Executive Summary</h3>
              <div className="p-6 rounded-lg bg-[#D4F1F4]/20 border border-[#A8D5E2]/30 space-y-3 text-sm leading-relaxed">
                <p>
                  Structured community exercise programs represent the highest-confidence, 
                  most cost-effective longevity intervention available for immediate policy implementation. 
                  Evidence from 24 randomized controlled trials demonstrates consistent improvements in 
                  all-cause mortality (HR: 0.68, 95% CI: 0.62-0.74) with effect sizes superior to most 
                  pharmacological interventions.
                </p>
                <p>
                  <strong>Key Recommendation:</strong> Municipal governments should allocate 2-3% of public 
                  health budgets to subsidized community exercise programs targeting adults 45+, with 
                  expected ROI of 4.2:1 over 10 years through reduced healthcare costs.
                </p>
              </div>
            </div>

            {/* Evidence Base */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#5AB9CC]" />
                Evidence Base
              </h3>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-white/50 border border-white/40">
                    <div className="text-2xl font-bold text-[#75C4D5] mb-1">24</div>
                    <div className="text-xs text-muted-foreground">RCTs Analyzed</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 border border-white/40">
                    <div className="text-2xl font-bold text-[#5AB9CC] mb-1">95%</div>
                    <div className="text-xs text-muted-foreground">Confidence Level</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 border border-white/40">
                    <div className="text-2xl font-bold text-[#8FCFE0] mb-1">32%</div>
                    <div className="text-xs text-muted-foreground">Mortality Reduction</div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/40 border border-white/30">
                  <p className="text-sm text-muted-foreground">
                    Meta-analysis of 24 RCTs (n=89,472 participants) shows 150 minutes/week of 
                    moderate-intensity exercise reduces all-cause mortality by 32% (HR: 0.68) with 
                    benefits observed across age groups, socioeconomic strata, and baseline health status.
                  </p>
                </div>
              </div>
            </div>

            {/* Feasibility */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#5AB9CC]" />
                Implementation Feasibility
              </h3>
              <div className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#75C4D5]/10 border border-[#75C4D5]/30">
                    <h4 className="font-semibold mb-2">High Feasibility Factors</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• No regulatory approval required</li>
                      <li>• Infrastructure widely available (parks, community centers)</li>
                      <li>• Scalable across urban and rural settings</li>
                      <li>• Strong public acceptance (87% support in surveys)</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-[#E6EAF2]/20 border border-[#E6EAF2]/40">
                    <h4 className="font-semibold mb-2">Implementation Barriers</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Adherence challenges (52% dropout by 6 months)</li>
                      <li>• Requires sustained behavior change</li>
                      <li>• Accessibility for mobility-limited populations</li>
                      <li>• Need for trained program facilitators</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Analysis */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#5AB9CC]" />
                Cost-Benefit Analysis
              </h3>
              <div className="p-6 rounded-lg bg-white/50 border border-white/40 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Estimated Costs (per capita/year)</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Program facilitation</span>
                        <span className="font-medium">$180</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Facility maintenance</span>
                        <span className="font-medium">$65</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Equipment</span>
                        <span className="font-medium">$45</span>
                      </li>
                      <li className="flex justify-between pt-2 border-t border-white/40">
                        <span className="font-semibold">Total Annual Cost</span>
                        <span className="font-bold text-[#5AB9CC]">$290</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Estimated Benefits (per capita/year)</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Reduced hospital admissions</span>
                        <span className="font-medium">$680</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Reduced chronic disease costs</span>
                        <span className="font-medium">$420</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Productivity gains</span>
                        <span className="font-medium">$120</span>
                      </li>
                      <li className="flex justify-between pt-2 border-t border-white/40">
                        <span className="font-semibold">Total Annual Benefit</span>
                        <span className="font-bold text-[#75C4D5]">$1,220</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/40 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Return on Investment (10 years)</div>
                  <div className="text-3xl font-bold text-[#5AB9CC]">4.2 : 1</div>
                </div>
              </div>
            </div>

            {/* Risks */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#6B7588]" />
                Risks & Considerations
              </h3>
              <div className="p-4 rounded-lg bg-[#E6EAF2]/20 border border-[#E6EAF2]/40 space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong>Injury Risk:</strong> 3-5% of participants experience minor musculoskeletal 
                  injuries; mitigated through screening and graduated progression protocols.
                </p>
                <p className="text-muted-foreground">
                  <strong>Selection Bias:</strong> Programs may disproportionately attract already-healthy 
                  individuals; targeted outreach required for at-risk populations.
                </p>
                <p className="text-muted-foreground">
                  <strong>Long-term Adherence:</strong> Sustained behavior change remains challenging; 
                  social support structures and gamification strategies improve retention.
                </p>
              </div>
            </div>

            {/* Equity Considerations */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Equity Considerations</h3>
              <div className="p-4 rounded-lg bg-[#D4F1F4]/20 border border-[#A8D5E2]/30 text-sm text-muted-foreground space-y-2">
                <p>
                  Programs must be designed with explicit equity goals to avoid exacerbating health 
                  disparities. Recommendations include:
                </p>
                <ul className="space-y-1 pl-4">
                  <li>• Free or subsidized access for low-income populations</li>
                  <li>• Multilingual instruction and culturally adapted programming</li>
                  <li>• Transportation assistance or neighborhood-based locations</li>
                  <li>• Adaptive programming for mobility-limited individuals</li>
                  <li>• Childcare support to enable parental participation</li>
                </ul>
              </div>
            </div>

            {/* Export Action */}
            <div className="pt-6 border-t border-white/40 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                This brief synthesizes peer-reviewed evidence for policy use. All sources cited.
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#75C4D5] to-[#5AB9CC] text-white rounded-lg hover:shadow-lg transition-all">
                <FileDown className="w-4 h-4" />
                Export PDF (Watermarked)
              </button>
            </div>
          </div>
        </GlassCard>

        {/* More Think Tank Outputs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Recent Think Tank Outputs</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Mediterranean Diet Policy Implementation Guide', date: 'January 2026', type: 'Policy Brief' },
              { title: 'NAD+ Precursors: Regulatory Pathway Analysis', date: 'December 2025', type: 'Technical Report' },
              { title: 'Senolytic Therapy: Clinical Translation Roadmap', date: 'November 2025', type: 'Research Synthesis' },
            ].map((doc, i) => (
              <GlassCard key={i} hover className="p-6">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">{doc.type}</div>
                  <h3 className="font-semibold">{doc.title}</h3>
                  <div className="text-xs text-muted-foreground">{doc.date}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
