import { GlassCard } from '../components/GlassCard';

export function ExpertProfile() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <GlassCard className="p-8">
          <h1 className="text-3xl font-semibold">Dr. Stuti Iyer, MD, PhD <span className="text-sm ml-2 px-2 py-1 bg-[#5AB9CC]/20 rounded">Verified</span></h1>
          <p className="text-muted-foreground mt-2">Specialty: Longevity Medicine • Affiliation: ESTRA Clinical Review Board • Country: United Kingdom</p>
          <p className="mt-4 text-sm text-muted-foreground">Clinical longevity researcher focused on translational trial quality, synthesis governance, and policy-aware interpretation.</p>
        </GlassCard>
        <GlassCard className="p-6">
          <h2 className="font-semibold mb-3">Activity</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Contributions count: 12</li>
            <li>Cards reviewed: 9</li>
            <li>Debate participation: 5 rooms</li>
            <li>Commentary history: 18 editorial notes</li>
          </ul>
        </GlassCard>
        <GlassCard className="p-6">
          <h2 className="font-semibold mb-3">Linked Evidence Contributions</h2>
          <a href="/evidence?role=ProUser" className="text-[#5AB9CC] text-sm">NAD+ Supplementation and Cellular Aging (v3)</a>
        </GlassCard>
      </div>
    </div>
  );
}
