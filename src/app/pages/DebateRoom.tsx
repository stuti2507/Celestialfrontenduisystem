import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function DebateRoom() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="top-10 right-10" opacity={0.05} />

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold">Debate Room</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Structured scientific dialogue on contested evidence. Transparent position comparison 
            with cited sources and identified knowledge gaps.
          </p>
        </div>

        {/* Current Debate */}
        <GlassCard className="p-8">
          <div className="space-y-6">
            <div className="pb-4 border-b border-white/40">
              <h2 className="text-2xl font-semibold mb-2">
                Caloric Restriction: Universal Longevity Mechanism vs. Context-Dependent Adaptation
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Active Since: January 2026</span>
                <span>•</span>
                <span>43 Evidence Items Cited</span>
                <span>•</span>
                <span>12 Expert Contributors</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Position A */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#75C4D5]"></div>
                  <h3 className="font-semibold">Position A: Universal Mechanism</h3>
                </div>
                <div className="p-4 rounded-lg bg-[#75C4D5]/10 border border-[#75C4D5]/30 space-y-3">
                  <p className="text-sm leading-relaxed">
                    Caloric restriction (CR) extends lifespan through evolutionarily conserved pathways 
                    (AMPK, mTOR, sirtuins) across species from yeast to primates.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground">Key Evidence</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#75C4D5] mt-1">•</span>
                        <span>Consistent 20-40% lifespan extension in rodent models (n=127 studies)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#75C4D5] mt-1">•</span>
                        <span>NIA rhesus monkey study: improved healthspan markers over 25 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#75C4D5] mt-1">•</span>
                        <span>Human CALERIE trial: metabolic improvements confirmed</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <a href="#" className="text-xs text-[#5AB9CC] hover:underline flex items-center gap-1">
                      View 18 cited sources <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Position B */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#8FCFE0]"></div>
                  <h3 className="font-semibold">Position B: Context-Dependent</h3>
                </div>
                <div className="p-4 rounded-lg bg-[#8FCFE0]/10 border border-[#8FCFE0]/30 space-y-3">
                  <p className="text-sm leading-relaxed">
                    CR benefits are highly variable, dependent on genetic background, diet composition, 
                    age of intervention, and baseline health status.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground">Key Evidence</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8FCFE0] mt-1">•</span>
                        <span>Wisconsin monkey study: no lifespan extension (contradicts NIA study)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8FCFE0] mt-1">•</span>
                        <span>Genetic diversity matters: 41 mouse strains show 0-30% variation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8FCFE0] mt-1">•</span>
                        <span>Late-life CR less effective; requires early intervention</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <a href="#" className="text-xs text-[#5AB9CC] hover:underline flex items-center gap-1">
                      View 14 cited sources <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement Zone */}
            <div className="p-4 rounded-lg bg-[#D4F1F4]/20 border border-[#A8D5E2]/30">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#A8D5E2]"></div>
                Agreement Zone
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#A8D5E2] mt-1">✓</span>
                  <span>CR activates conserved metabolic pathways (AMPK, mTOR inhibition)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8D5E2] mt-1">✓</span>
                  <span>Improves metabolic health markers in most mammalian models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A8D5E2] mt-1">✓</span>
                  <span>Human long-term adherence is challenging (compliance issues)</span>
                </li>
              </ul>
            </div>

            {/* Evidence Gaps */}
            <div className="p-4 rounded-lg bg-[#E6EAF2]/20 border border-[#E6EAF2]/40">
              <h3 className="font-semibold mb-3">Critical Evidence Gaps</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1">⚠</span>
                  <span>No randomized controlled trial of CR on human lifespan (ethically infeasible)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">⚠</span>
                  <span>Discrepancy between NIA and Wisconsin primate studies remains unexplained</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">⚠</span>
                  <span>Optimal CR dosage and timing windows unclear for human translation</span>
                </li>
              </ul>
            </div>

            {/* Synthesis */}
            <div className="pt-6 border-t border-white/40">
              <h3 className="font-semibold mb-3">Current Synthesis Statement</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Moderate evidence supports metabolic benefits of caloric restriction across species, 
                with high confidence in pathway activation. Lifespan extension in humans remains 
                uncertain due to genetic and contextual variability. Current policy recommendation: 
                Further research needed before population-level guidance.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Confidence:</span>
                  <span className="px-3 py-1 rounded-full bg-[#A8D5E2]/20 text-[#4A8FA0] border border-[#A8D5E2]/40">
                    Moderate
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Policy Impact:</span>
                  <span className="px-3 py-1 rounded-full bg-[#D4F1F4]/20 text-[#6B9AA8] border border-[#D4F1F4]/40">
                    Research Stage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* More Debates */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Active Debates</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Rapamycin: Clinical Translation Readiness', status: 'High Activity', citations: 38 },
              { title: 'Senolytics: Timing vs. Continuous Dosing', status: 'Active', citations: 24 },
              { title: 'Metformin: Longevity Drug or Diabetes-Specific?', status: 'Active', citations: 52 },
              { title: 'NAD+ Supplementation Route: Oral vs. IV', status: 'Emerging', citations: 16 },
            ].map((debate, i) => (
              <GlassCard key={i} hover className="p-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">{debate.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="px-2 py-1 rounded-full bg-[#A8D5E2]/20">{debate.status}</span>
                    <span>{debate.citations} sources cited</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#5AB9CC] hover:underline cursor-pointer">
                    <span>View Debate</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
