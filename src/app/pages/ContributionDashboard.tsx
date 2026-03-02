import { GlassCard } from '../components/GlassCard';

const rows = [
  { id: 'CTR-102', type: 'review', contributor: 'Dr. Stuti Iyer', status: 'pending' },
  { id: 'CTR-103', type: 'policy_note', contributor: 'A. Milani', status: 'pending' },
];

export function ContributionDashboard() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-5xl mx-auto">
        <GlassCard className="p-8">
          <h1 className="text-2xl font-semibold mb-2">Editorial Contribution Workflow</h1>
          <p className="text-sm text-muted-foreground mb-6">Verified experts submit structured input, Section Editors review, Head Editors approve and trigger version increments.</p>
          <div className="space-y-3">
            {rows.map((row) => (
              <div key={row.id} className="p-3 border border-white/40 rounded-lg flex items-center justify-between text-sm">
                <span>{row.id} • {row.type} • {row.contributor}</span>
                <div className="space-x-2">
                  <button className="px-3 py-1 rounded bg-white/60">Review</button>
                  <button className="px-3 py-1 rounded bg-[#5AB9CC] text-white">Approve + Version++</button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
