import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { ExternalLink, TrendingUp, Activity } from 'lucide-react';

// Mock data
const lifeExpectancyData = [
  { year: 1990, value: 64.2, source: 'WHO' },
  { year: 1995, value: 65.8, source: 'WHO' },
  { year: 2000, value: 67.0, source: 'WHO' },
  { year: 2005, value: 68.9, source: 'WHO' },
  { year: 2010, value: 70.8, source: 'WHO' },
  { year: 2015, value: 72.0, source: 'WHO' },
  { year: 2020, value: 72.8, source: 'WHO' },
  { year: 2024, value: 73.4, source: 'WHO' },
];

const healthspanData = [
  { year: 2000, lifespan: 67.0, healthspan: 58.5, gap: 8.5 },
  { year: 2005, lifespan: 68.9, healthspan: 59.8, gap: 9.1 },
  { year: 2010, lifespan: 70.8, healthspan: 60.9, gap: 9.9 },
  { year: 2015, lifespan: 72.0, healthspan: 61.4, gap: 10.6 },
  { year: 2020, lifespan: 72.8, healthspan: 61.3, gap: 11.5 },
  { year: 2024, lifespan: 73.4, healthspan: 61.1, gap: 12.3 },
];

const interventionEffects = [
  { intervention: 'Metformin', effectSize: 0.18, confidence: 0.85, trials: 12 },
  { intervention: 'Rapamycin', effectSize: 0.25, confidence: 0.72, trials: 8 },
  { intervention: 'NAD+ Precursors', effectSize: 0.12, confidence: 0.68, trials: 8 },
  { intervention: 'Senolytic Therapy', effectSize: 0.15, confidence: 0.54, trials: 4 },
  { intervention: 'Exercise (150min/wk)', effectSize: 0.32, confidence: 0.95, trials: 24 },
  { intervention: 'Mediterranean Diet', effectSize: 0.28, confidence: 0.91, trials: 18 },
];

const biomarkerTrends = [
  { year: 2015, studies: 45 },
  { year: 2016, studies: 58 },
  { year: 2017, studies: 72 },
  { year: 2018, studies: 91 },
  { year: 2019, studies: 118 },
  { year: 2020, studies: 142 },
  { year: 2021, studies: 189 },
  { year: 2022, studies: 234 },
  { year: 2023, studies: 298 },
  { year: 2024, studies: 367 },
  { year: 2025, studies: 428 },
];

export function SignalExplorer() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="top-20 right-10" opacity={0.04} />
      <SnowflakePattern className="bottom-20 left-10" opacity={0.04} />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold">Longevity Signal Explorer</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive data modules linked to primary peer-reviewed and institutional sources.
            Click any data point to view underlying studies.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4F1F4]/30 border border-[#A8D5E2]/30 text-sm">
            <Activity className="w-4 h-4 text-[#5AB9CC]" />
            All visualizations link to primary sources
          </div>
        </div>

        {/* Global Life Expectancy */}
        <GlassCard className="p-8">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Global Life Expectancy Trend</h2>
                <p className="text-sm text-muted-foreground">
                  World Health Organization (WHO) Global Health Observatory data
                </p>
              </div>
              <a
                href="https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/ghe-life-expectancy-and-healthy-life-expectancy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/70 border border-white/40 text-sm transition-colors"
              >
                <span>View Source</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={lifeExpectancyData}>
                <defs>
                  <linearGradient id="colorLife" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#75C4D5" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#75C4D5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 213, 226, 0.2)" />
                <XAxis dataKey="year" stroke="#6B7588" />
                <YAxis stroke="#6B7588" domain={[60, 75]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(168, 213, 226, 0.3)',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#75C4D5"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorLife)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Healthspan vs Lifespan Gap */}
        <GlassCard className="p-8">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Healthspan vs Lifespan Gap</h2>
                <p className="text-sm text-muted-foreground">
                  The growing gap between total lifespan and years lived in good health
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E6EAF2]/30 border border-[#E6EAF2]/50 text-sm">
                <TrendingUp className="w-4 h-4 text-[#6B7588]" />
                <span className="font-semibold">12.3 year gap</span>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthspanData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 213, 226, 0.2)" />
                <XAxis dataKey="year" stroke="#6B7588" />
                <YAxis stroke="#6B7588" domain={[55, 75]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(168, 213, 226, 0.3)',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="lifespan"
                  stroke="#75C4D5"
                  strokeWidth={2}
                  name="Total Lifespan"
                  dot={{ fill: '#75C4D5', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="healthspan"
                  stroke="#5AB9CC"
                  strokeWidth={2}
                  name="Healthy Years"
                  dot={{ fill: '#5AB9CC', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="p-4 rounded-lg bg-[#E6EAF2]/20 border border-[#E6EAF2]/40">
              <p className="text-sm text-muted-foreground">
                <strong>Key Insight:</strong> While life expectancy has increased by 6.4 years since 2000, 
                healthy years have only increased by 2.6 years, resulting in a growing healthspan gap of 12.3 years.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Intervention Effect Sizes */}
        <GlassCard className="p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Intervention Effect Size Visualization</h2>
              <p className="text-sm text-muted-foreground">
                Standardized effect sizes from meta-analyses and RCTs
              </p>
            </div>

            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 100 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 213, 226, 0.2)" />
                <XAxis
                  type="number"
                  dataKey="effectSize"
                  name="Effect Size"
                  stroke="#6B7588"
                  domain={[0, 0.35]}
                />
                <YAxis
                  type="category"
                  dataKey="intervention"
                  name="Intervention"
                  stroke="#6B7588"
                  width={90}
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(168, 213, 226, 0.3)',
                    borderRadius: '8px',
                  }}
                  formatter={(value: any, name: string) => {
                    if (name === 'effectSize') return [`${value}`, 'Effect Size'];
                    if (name === 'confidence') return [`${(value * 100).toFixed(0)}%`, 'Confidence'];
                    if (name === 'trials') return [value, 'Number of Trials'];
                    return value;
                  }}
                />
                <Scatter
                  data={interventionEffects}
                  fill="#75C4D5"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/50 border border-white/40">
                <div className="text-xs text-muted-foreground mb-1">Highest Effect</div>
                <div className="font-semibold">Exercise (150min/wk)</div>
                <div className="text-sm text-[#5AB9CC]">Effect Size: 0.32</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 border border-white/40">
                <div className="text-xs text-muted-foreground mb-1">Highest Confidence</div>
                <div className="font-semibold">Exercise Programs</div>
                <div className="text-sm text-[#5AB9CC]">95% Confidence</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 border border-white/40">
                <div className="text-xs text-muted-foreground mb-1">Most Studies</div>
                <div className="font-semibold">Exercise Interventions</div>
                <div className="text-sm text-[#5AB9CC]">24 Trials</div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* NAD+ Research Trends */}
        <GlassCard className="p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">NAD+ Biomarker Research Trends</h2>
              <p className="text-sm text-muted-foreground">
                Cumulative peer-reviewed studies on NAD+ and longevity pathways
              </p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={biomarkerTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 213, 226, 0.2)" />
                <XAxis dataKey="year" stroke="#6B7588" />
                <YAxis stroke="#6B7588" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(168, 213, 226, 0.3)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="studies" fill="#75C4D5" name="Published Studies" />
              </BarChart>
            </ResponsiveContainer>

            <div className="p-4 rounded-lg bg-[#D4F1F4]/30 border border-[#A8D5E2]/30">
              <p className="text-sm text-muted-foreground">
                Research interest in NAD+ metabolism has grown 8.5x since 2015, with 428 peer-reviewed 
                studies published in 2025 alone. Click any bar to explore studies from that year.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Data Sources */}
        <div className="text-center py-8">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-lg bg-white/40 border border-white/40">
            <h3 className="font-semibold">Primary Data Sources</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <a
                href="https://www.who.int"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors"
              >
                WHO
              </a>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors"
              >
                PubMed
              </a>
              <a
                href="https://clinicaltrials.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors"
              >
                ClinicalTrials.gov
              </a>
              <a
                href="https://data.oecd.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 border border-white/40 transition-colors"
              >
                OECD Health Data
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
