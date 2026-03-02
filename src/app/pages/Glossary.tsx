import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { Search, ExternalLink } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  mechanism?: string;
  evidence?: string;
  policyLink?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'AMPK',
    category: 'Molecular Pathway',
    definition: 'AMP-activated protein kinase, a cellular energy sensor that regulates metabolic homeostasis.',
    mechanism: 'Activated during energy stress, AMPK promotes catabolic pathways (fatty acid oxidation, glucose uptake) and inhibits anabolic pathways (protein synthesis, lipogenesis).',
    evidence: 'Implicated in longevity benefits of caloric restriction and exercise. Genetic activation extends lifespan in model organisms.',
  },
  {
    term: 'Caloric Restriction',
    category: 'Intervention',
    definition: 'Reduction in calorie intake (typically 20-40%) without malnutrition.',
    mechanism: 'Activates longevity pathways including AMPK, sirtuins, and mTOR inhibition. Reduces oxidative stress and inflammation.',
    evidence: 'Extends lifespan in multiple species. Human data shows metabolic improvements (CALERIE trial). Long-term human lifespan effects unknown.',
    policyLink: 'Research Stage - requires further human validation',
  },
  {
    term: 'Healthspan',
    category: 'Metric',
    definition: 'The period of life spent in good health, free from chronic diseases and disabilities.',
    mechanism: 'Distinct from lifespan (total years lived). Healthspan gap = lifespan minus healthy years.',
    evidence: 'Global healthspan gap has widened to 12.3 years (WHO 2024), indicating longevity gains without proportional health gains.',
    policyLink: 'Central metric for longevity policy evaluation',
  },
  {
    term: 'mTOR',
    category: 'Molecular Pathway',
    definition: 'Mechanistic target of rapamycin, a protein kinase that regulates cell growth, proliferation, and metabolism.',
    mechanism: 'When active, mTOR promotes anabolism (protein synthesis, cell growth). Inhibition mimics caloric restriction and may extend lifespan.',
    evidence: 'Rapamycin (mTOR inhibitor) extends lifespan in mice. Human trials ongoing for age-related conditions.',
  },
  {
    term: 'NAD+',
    category: 'Biomarker',
    definition: 'Nicotinamide adenine dinucleotide, a coenzyme involved in cellular energy metabolism and DNA repair.',
    mechanism: 'NAD+ levels decline with age. Functions as substrate for sirtuins and PARP enzymes involved in longevity pathways.',
    evidence: 'Precursor supplementation (NR, NMN) increases blood NAD+ levels. Effects on longevity outcomes remain under investigation.',
  },
  {
    term: 'Senescence',
    category: 'Biological Process',
    definition: 'Permanent cell cycle arrest in response to stress, preventing damaged cells from dividing.',
    mechanism: 'Senescent cells accumulate with age and secrete inflammatory factors (SASP - senescence-associated secretory phenotype), contributing to tissue dysfunction.',
    evidence: 'Senolytic drugs that clear senescent cells improve healthspan in animal models. Human trials ongoing.',
  },
  {
    term: 'Sirtuins',
    category: 'Molecular Pathway',
    definition: 'Family of NAD+-dependent deacetylases that regulate cellular stress resistance, metabolism, and aging.',
    mechanism: 'Seven mammalian sirtuins (SIRT1-7) regulate diverse processes including DNA repair, mitochondrial function, and circadian rhythms.',
    evidence: 'Activation associated with caloric restriction benefits. Resveratrol initially proposed as activator (mechanism debated).',
  },
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLetter = selectedLetter === 'All' || term.term.startsWith(selectedLetter);
    return matchesSearch && matchesLetter;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <SnowflakePattern className="top-10 right-10" opacity={0.05} />
      <SnowflakePattern className="bottom-10 left-10" opacity={0.05} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-semibold">Longevity Science Glossary</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Definitions, mechanisms, and evidence links for key concepts in longevity research
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <GlassCard className="p-6 sticky top-24">
              <h3 className="font-semibold mb-4">Browse A–Z</h3>
              <div className="grid grid-cols-4 gap-2 mb-6">
                <button
                  onClick={() => setSelectedLetter('All')}
                  className={`p-2 rounded text-sm transition-colors ${
                    selectedLetter === 'All'
                      ? 'bg-[#A8D5E2]/20 text-[#2C7A8C] font-medium'
                      : 'hover:bg-white/50'
                  }`}
                >
                  All
                </button>
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`p-2 rounded text-sm transition-colors ${
                      selectedLetter === letter
                        ? 'bg-[#A8D5E2]/20 text-[#2C7A8C] font-medium'
                        : 'hover:bg-white/50'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-xs uppercase text-muted-foreground mb-3">Categories</h4>
                {['Molecular Pathway', 'Intervention', 'Biomarker', 'Metric', 'Biological Process'].map((cat) => (
                  <div key={cat} className="px-3 py-2 rounded-lg bg-white/40 border border-white/30 text-muted-foreground">
                    {cat}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search */}
            <GlassCard className="p-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8D5E2]/50"
                />
              </div>
            </GlassCard>

            {/* Terms */}
            <div className="space-y-4">
              {filteredTerms.length > 0 ? (
                filteredTerms.map((term, i) => (
                  <GlassCard key={i} className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-semibold mb-2">{term.term}</h2>
                          <span className="inline-block px-3 py-1 rounded-full text-xs bg-[#A8D5E2]/20 text-[#4A8FA0] border border-[#A8D5E2]/40">
                            {term.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-1">Definition</h4>
                          <p className="text-foreground">{term.definition}</p>
                        </div>

                        {term.mechanism && (
                          <div className="p-4 rounded-lg bg-[#D4F1F4]/20 border border-[#A8D5E2]/30">
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-1">Mechanism</h4>
                            <p className="text-sm text-muted-foreground">{term.mechanism}</p>
                          </div>
                        )}

                        {term.evidence && (
                          <div className="p-4 rounded-lg bg-white/40 border border-white/30">
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-1">Evidence Base</h4>
                            <p className="text-sm text-muted-foreground">{term.evidence}</p>
                          </div>
                        )}

                        {term.policyLink && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">Policy Status:</span>
                            <span className="px-3 py-1 rounded-full bg-[#E6EAF2]/20 text-[#6B7588] border border-[#E6EAF2]/40">
                              {term.policyLink}
                            </span>
                          </div>
                        )}

                        <div className="pt-2 border-t border-white/40">
                          <button className="flex items-center gap-2 text-sm text-[#5AB9CC] hover:underline">
                            <span>View related evidence</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ))
              ) : (
                <GlassCard className="p-12 text-center">
                  <p className="text-muted-foreground">No terms found matching your search.</p>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
