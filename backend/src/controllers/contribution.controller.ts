import { Response } from 'express';
import { ContributionStatus } from '@prisma/client';
import { prisma } from '../config/prisma.js';
import { AuthRequest } from '../middleware/auth.js';

export async function submitContribution(req: AuthRequest, res: Response) {
  const contribution = await prisma.contribution.create({
    data: {
      evidence_card_id: req.body.evidence_card_id,
      contributor_id: req.user!.userId,
      type: req.body.type,
      content: req.body.content,
    },
  });
  return res.status(201).json(contribution);
}

export async function reviewContribution(req: AuthRequest, res: Response) {
  const updated = await prisma.contribution.update({
    where: { id: req.params.id },
    data: {
      status: req.body.status as ContributionStatus,
      reviewed_by: req.user!.userId,
    },
  });
  return res.json(updated);
}

export async function approveContribution(req: AuthRequest, res: Response) {
  const contribution = await prisma.contribution.findUnique({ where: { id: req.params.id } });
  if (!contribution) return res.status(404).json({ message: 'Not found' });

  const card = await prisma.evidenceCard.update({
    where: { id: contribution.evidence_card_id },
    data: { version: { increment: 1 } },
  });

  await prisma.contribution.update({
    where: { id: contribution.id },
    data: {
      status: ContributionStatus.approved,
      reviewed_by: req.user!.userId,
      version_applied: card.version,
    },
  });

  await prisma.evidenceVersion.create({
    data: {
      evidence_card_id: card.id,
      version: card.version,
      changed_by: req.user!.userId,
      change_note: `Contribution ${contribution.id} approved and merged`,
    },
  });

  return res.json({ message: 'Contribution approved and version incremented', version: card.version });
}
