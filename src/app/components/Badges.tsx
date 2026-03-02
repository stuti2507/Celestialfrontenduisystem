interface ConfidenceBadgeProps {
  level: 'high' | 'moderate' | 'low' | 'preliminary';
  className?: string;
}

export function ConfidenceBadge({ level, className = '' }: ConfidenceBadgeProps) {
  const styles = {
    high: 'bg-[#75C4D5]/20 text-[#2C7A8C] border-[#75C4D5]/40',
    moderate: 'bg-[#A8D5E2]/20 text-[#4A8FA0] border-[#A8D5E2]/40',
    low: 'bg-[#D4F1F4]/20 text-[#6B9AA8] border-[#D4F1F4]/40',
    preliminary: 'bg-[#E6EAF2]/20 text-[#6B7588] border-[#E6EAF2]/40',
  };

  const labels = {
    high: 'High Confidence',
    moderate: 'Moderate Confidence',
    low: 'Low Confidence',
    preliminary: 'Preliminary',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${styles[level]} ${className}`}
    >
      {labels[level]}
    </span>
  );
}

interface PolicyTagProps {
  relevance: 'immediate' | 'medium-term' | 'research-stage';
  className?: string;
}

export function PolicyTag({ relevance, className = '' }: PolicyTagProps) {
  const styles = {
    immediate: 'bg-[#5AB9CC]/20 text-[#2C7A8C] border-[#5AB9CC]/40',
    'medium-term': 'bg-[#8FCFE0]/20 text-[#4A8FA0] border-[#8FCFE0]/40',
    'research-stage': 'bg-[#D4F1F4]/20 text-[#6B9AA8] border-[#D4F1F4]/40',
  };

  const labels = {
    immediate: 'Immediate Policy Relevance',
    'medium-term': 'Medium-Term Policy',
    'research-stage': 'Research Stage',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${styles[relevance]} ${className}`}
    >
      {labels[relevance]}
    </span>
  );
}
