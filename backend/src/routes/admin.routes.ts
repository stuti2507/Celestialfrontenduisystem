import { Router } from 'express';
import { getGovernanceDashboard } from '../controllers/admin.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { UserRole } from '@prisma/client';

export const adminRouter = Router();
adminRouter.get('/governance', authenticate, authorize([UserRole.Admin]), getGovernanceDashboard);
