import { Request, Response } from 'express';
import { prisma } from '../config/prisma.js';
import { AuthRequest } from '../middleware/auth.js';
import { rolePolicy } from '../middleware/rbac.js';

export async function getEvidenceCard(req: AuthRequest, res: Response) {
  const card = await prisma.evidenceCard.findUnique({
    where: { id: req.params.id },
    include: { evidenceLayer: true, methodsLayer: true, policyLayer: true, versionHistory: true },
  });
  if (!card) return res.status(404).json({ message: 'Evidence card not found' });

  const role = req.user?.role ?? 'Guest';
  const tabs = rolePolicy.evidenceTabs[role];

  return res.json({
    id: card.id,
    title: card.title,
    claim: card.claim,
    why_it_matters: card.why_it_matters,
    confidence_label: card.confidence_label,
    version: card.version,
    evidence: card.evidenceLayer,
    methods: tabs.includes(2) ? card.methodsLayer : null,
    policy: tabs.includes(3) ? card.policyLayer : null,
    accessibleTabs: tabs,
    versionHistory: card.versionHistory,
  });
}
