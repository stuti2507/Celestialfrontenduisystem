import { Router } from 'express';
import { approveContribution, reviewContribution, submitContribution } from '../controllers/contribution.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { contributorRoles, headEditorRoles, sectionEditorRoles } from '../middleware/rbac.js';

export const contributionsRouter = Router();
contributionsRouter.post('/', authenticate, authorize(contributorRoles), submitContribution);
contributionsRouter.patch('/:id/review', authenticate, authorize(sectionEditorRoles), reviewContribution);
contributionsRouter.patch('/:id/approve', authenticate, authorize(headEditorRoles), approveContribution);
