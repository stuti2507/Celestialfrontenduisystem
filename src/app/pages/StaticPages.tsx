import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { Shield, Users, BookOpen, Target } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="top-10 right-10" opacity={0.05} />

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold">About ESTRA</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evidence Synthesis & Translation for Real-World Action
          </p>
        </div>

        <GlassCard className="p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              ESTRA exists to bridge the gap between longevity science and evidence-based policy. 
              We provide a governed platform for transparent evidence synthesis, expert interpretation, 
              and policy translation—ensuring that scientific advances translate into real-world health improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-6">
            <div className="p-6 rounded-lg bg-[#D4F1F4]/20 border border-[#A8D5E2]/30">
              <Target className="w-8 h-8 text-[#5AB9CC] mb-3" />
              <h3 className="font-semibold mb-2">What We Are</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Scientific reference infrastructure</li>
                <li>• Expert interpretation layer</li>
                <li>• Policy translation engine</li>
                <li>• Public clarity interface</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-[#E6EAF2]/20 border border-[#E6EAF2]/40">
              <Shield className="w-8 h-8 text-[#6B7588] mb-3" />
              <h3 className="font-semibold mb-2">What We Are Not</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Not a blog or media outlet</li>
                <li>• Not biotech marketing</li>
                <li>• Not social media</li>
                <li>• Not medical advice</li>
              </ul>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-8 h-8 text-[#5AB9CC] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Core Principles</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Transparency in Uncertainty</h3>
                  <p className="text-sm">
                    We explicitly communicate confidence levels, limitations, and knowledge gaps. 
                    Uncertainty is information, not weakness.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Evidence Before Advocacy</h3>
                  <p className="text-sm">
                    We synthesize what the evidence shows, not what we wish it showed. 
                    Policy recommendations follow data, not ideology.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Governed Expertise</h3>
                  <p className="text-sm">
                    Expert contributors are credentialed and accountable. All syntheses undergo peer review 
                    and version control.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Public Access</h3>
                  <p className="text-sm">
                    Core evidence is freely accessible. Advanced tools support professional use. 
                    No paywalls on life-or-death information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-[#5AB9CC] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">For Whom</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Policymakers:</strong> Evidence-to-policy translation with implementation feasibility assessments</p>
                <p><strong className="text-foreground">Researchers:</strong> Comprehensive evidence maps and identified knowledge gaps</p>
                <p><strong className="text-foreground">Clinicians:</strong> Confidence-rated intervention summaries for patient discussions</p>
                <p><strong className="text-foreground">Informed Public:</strong> Clear explanations of complex science without sensationalism</p>
                <p><strong className="text-foreground">Journalists:</strong> Fact-checked sources and context for accurate reporting</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export function Methodology() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="bottom-10 left-10" opacity={0.05} />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold">Methodology</h1>
          <p className="text-muted-foreground">
            Our systematic approach to evidence synthesis and confidence assessment
          </p>
        </div>

        <GlassCard className="p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Evidence Collection</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We systematically search peer-reviewed literature from PubMed, clinical trial registries, 
              and institutional databases (WHO, OECD, national health agencies). All sources are archived 
              with version control and DOI/PMID linkage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Quality Assessment</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Each evidence item undergoes systematic bias assessment using established tools:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• RCTs: Cochrane Risk of Bias tool</li>
              <li>• Observational studies: Newcastle-Ottawa Scale</li>
              <li>• Systematic reviews: AMSTAR-2 criteria</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Confidence Ratings</h2>
            <div className="space-y-2 text-sm">
              <div className="p-3 rounded-lg bg-[#75C4D5]/10 border border-[#75C4D5]/30">
                <strong className="text-foreground">High Confidence:</strong> Multiple high-quality RCTs with consistent findings, 
                low heterogeneity, validated outcomes
              </div>
              <div className="p-3 rounded-lg bg-[#A8D5E2]/10 border border-[#A8D5E2]/30">
                <strong className="text-foreground">Moderate Confidence:</strong> Some RCT evidence with limitations, or strong 
                observational data with mechanistic support
              </div>
              <div className="p-3 rounded-lg bg-[#D4F1F4]/10 border border-[#D4F1F4]/30">
                <strong className="text-foreground">Low Confidence:</strong> Limited human data, conflicting results, or 
                significant methodological concerns
              </div>
              <div className="p-3 rounded-lg bg-[#E6EAF2]/10 border border-[#E6EAF2]/30">
                <strong className="text-foreground">Preliminary:</strong> Early-stage investigation, animal models only, or 
                insufficient data for robust conclusions
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Expert Review</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All evidence syntheses undergo peer review by credentialed experts in the relevant domain. 
              Conflicts of interest are disclosed. Disagreements are documented in the Debate Room.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Version Control & Updates</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evidence items are living documents. Updates trigger when new high-quality evidence emerges. 
              Version history is maintained. Users can track changes and receive notifications.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
