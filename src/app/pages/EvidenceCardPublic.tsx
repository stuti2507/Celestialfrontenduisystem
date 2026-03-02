import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { GlassCard } from '../components/GlassCard';
import { ConfidenceBadge, PolicyTag } from '../components/Badges';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { Bookmark, GitCompare, Bell, MessageSquare, Landmark, FilePenLine } from 'lucide-react';
import { eligibleContributorRoles, Role, roleTabs } from '../lib/rbac';

const versions = [
  { version: 3, date: '2026-02-10', note: 'Policy equity considerations revised', by: 'Head Editor' },
  { version: 2, date: '2026-01-22', note: 'Methods meta-statistics updated', by: 'Section Editor' },
  { version: 1, date: '2025-12-18', note: 'Initial editorial publication', by: 'Head Editor' },
];

export function EvidenceCardPublic() {
  const [params] = useSearchParams();
  const role = (params.get('role') as Role) ?? 'PublicUser';
  const tabs = useMemo(() => roleTabs[role] ?? [1], [role]);
  const canContribute = eligibleContributorRoles.includes(role);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="top-10 right-20" opacity={0.05} />
      <div className="max-w-5xl mx-auto space-y-6">
        <GlassCard className="p-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold">NAD+ Supplementation and Cellular Aging</h1>
              <p className="text-sm text-muted-foreground mt-2">Evidence ID: EVD-2024-0847 • Active Version: v3 • Access Role: {role}</p>
            </div>
            <div className="flex gap-2"><ConfidenceBadge level="moderate" /><PolicyTag relevance="medium-term" /></div>
          </div>

          <Tabs defaultValue="evidence" className="w-full">
            <TabsList className="grid w-full grid-cols-3 backdrop-blur-lg bg-white/50">
              <TabsTrigger value="evidence">Tab 1 – Evidence</TabsTrigger>
              <TabsTrigger value="methods" disabled={!tabs.includes(2)}>Tab 2 – Methods</TabsTrigger>
              <TabsTrigger value="policy" disabled={!tabs.includes(3)}>Tab 3 – Policy & Systems</TabsTrigger>
            </TabsList>

            <TabsContent value="evidence" className="mt-6 space-y-4">
              <p className="text-muted-foreground">Does NAD+ supplementation improve markers of cellular aging and metabolic function in humans?</p>
              <div className="p-4 rounded-lg bg-[#D4F1F4]/30 border border-[#A8D5E2]/30">
                <h3 className="font-semibold mb-2">Why It Matters</h3>
                <p className="text-sm text-muted-foreground">NAD+ decline is linked to metabolic dysfunction and DNA repair disruption; translational implications are substantial.</p>
              </div>
            </TabsContent>

            <TabsContent value="methods" className="mt-6">
              {tabs.includes(2) ? (
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Study Tables: 8 RCTs, 2 systematic reviews, 4 cohorts.</p>
                  <p>Bias Assessment: Moderate risk due to heterogenous dosing and short follow-up windows.</p>
                  <p>Meta Stats: pooled effect 0.41; I² = 0.34.</p>
                  <p>Effect Sizes: NAD+ serum levels +62% (CI 48–76%).</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Pro access required.</p>
              )}
            </TabsContent>

            <TabsContent value="policy" className="mt-6">
              {tabs.includes(3) ? (
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="italic text-foreground">Translation layer, not clinical guidance.</p>
                  <p>Population relevance: adults 60+ with cardiometabolic risk.</p>
                  <p>Cost signals: potential outpatient savings with validated long-term effects.</p>
                  <p>Infrastructure needs: biomarker labs + pharmacovigilance.</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Policy layer restricted to Pro and editorial roles.</p>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex flex-wrap gap-3 pt-6 border-t border-white/40">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors disabled:opacity-40"><Bookmark className="w-4 h-4" />Save</button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors disabled:opacity-40" disabled={!tabs.includes(2)}><GitCompare className="w-4 h-4" />Compare</button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors disabled:opacity-40"><MessageSquare className="w-4 h-4" />View Debates</button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors disabled:opacity-40"><Bell className="w-4 h-4" />Track Updates</button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors disabled:opacity-40" disabled={!tabs.includes(3)}><Landmark className="w-4 h-4" />View Policy Implications</button>
            {canContribute && <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors disabled:opacity-40"><FilePenLine className="w-4 h-4" />Contribute Expertise</button>}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="text-lg font-semibold mb-4">Version History</h2>
          <div className="space-y-3">
            {versions.map((v) => (
              <div key={v.version} className="border border-white/40 rounded-lg p-3 text-sm flex items-center justify-between">
                <span>v{v.version} • {v.note}</span>
                <span className="text-muted-foreground">{v.date} • {v.by}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h2 className="font-semibold">Featured Expert</h2>
          <p className="text-sm text-muted-foreground mt-2">Reviewed by <Link to="/experts/dr-stuti-iyer" className="text-[#5AB9CC]">Dr. Stuti Iyer, MD PhD</Link>.</p>
        </GlassCard>
      </div>
    </div>
  );
}
