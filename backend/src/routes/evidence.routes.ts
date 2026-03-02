import { Router } from 'express';
import { getEvidenceCard } from '../controllers/evidence.controller.js';
import { authenticate } from '../middleware/auth.js';

export const evidenceRouter = Router();
evidenceRouter.get('/:id', authenticate, getEvidenceCard);
