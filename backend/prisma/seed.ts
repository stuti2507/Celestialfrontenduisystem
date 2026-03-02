import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('ChangeMe!123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@estra.org' },
    update: {},
    create: {
      name: 'ESTRA Admin',
      email: 'admin@estra.org',
      role: UserRole.Admin,
      password_hash: passwordHash,
    },
  });

  const doctor = await prisma.user.upsert({
    where: { email: 'dr.iyer@estra.org' },
    update: {},
    create: {
      name: 'Dr. Stuti Iyer',
      email: 'dr.iyer@estra.org',
      role: UserRole.VerifiedDoctor,
      password_hash: passwordHash,
      expertProfile: {
        create: {
          credentials: 'MD, PhD',
          specialty: 'Longevity Medicine',
          affiliation: 'ESTRA Clinical Review Board',
          country: 'United Kingdom',
          bio: 'Clinical longevity researcher focused on translational trial quality.',
          verified_status: true,
          contribution_count: 12,
        },
      },
    },
  });

  const evidence = await prisma.evidenceCard.create({
    data: {
      title: 'NAD+ Supplementation and Cellular Aging',
      claim: 'Does NAD+ supplementation improve cellular aging markers in humans?',
      why_it_matters: 'Potential healthspan intervention with scalable public-health implications.',
      confidence_label: 'Moderate',
      created_by: admin.id,
      evidenceLayer: {
        create: {
          findings: [
            'RCTs indicate consistent increases in NAD+ biomarkers.',
            'Metabolic outcomes are directionally positive but heterogeneous.',
          ],
          limitations: [
            'Most studies are short-term.',
            'Elderly populations remain underrepresented.',
          ],
          citations: [
            { label: 'Nature Communications (2024)', url: 'https://pubmed.ncbi.nlm.nih.gov/38123456' },
          ],
        },
      },
      methodsLayer: {
        create: {
          study_tables: [{ study: 'RCT-1', n: 120, duration_weeks: 12 }],
          bias_assessment: { risk: 'Moderate', notes: 'Funding concentration in supplement manufacturers.' },
          meta_stats: { i2: 0.34, pooled_effect: 0.41 },
          effect_sizes: [{ endpoint: 'NAD+ serum level', effect: '+62%', ci: '48-76%' }],
        },
      },
      policyLayer: {
        create: {
          population_relevance: 'Aging populations over 60 with cardiometabolic risk factors.',
          cost_signals: 'Potential outpatient savings if validated in long-term trials.',
          infrastructure_needs: 'Biomarker labs and pharmacovigilance registry.',
          equity_considerations: 'Ensure access in low-resource care systems.',
          regulatory_maturity: 'Emerging; no unified international guidance.',
          disclaimer_required: true,
        },
      },
      versionHistory: {
        create: {
          version: 1,
          changed_by: admin.id,
          change_note: 'Initial editorial publication.',
        },
      },
      contributions: {
        create: {
          contributor_id: doctor.id,
          type: 'review',
          content: 'Recommend adding stratification by baseline insulin resistance.',
          status: 'approved',
          reviewed_by: admin.id,
          version_applied: 1,
        },
      },
    },
  });

  await prisma.savedLibrary.upsert({
    where: {
      user_id_evidence_card_id_collection_name: {
        user_id: doctor.id,
        evidence_card_id: evidence.id,
        collection_name: 'Clinical Signals',
      },
    },
    update: {},
    create: {
      user_id: doctor.id,
      evidence_card_id: evidence.id,
      collection_name: 'Clinical Signals',
    },
  });
}

main().finally(async () => prisma.$disconnect());
