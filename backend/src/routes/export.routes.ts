import { Router } from 'express';
import { UserRole } from '@prisma/client';
import { generateProExport } from '../controllers/export.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

export const exportRouter = Router();
exportRouter.post('/:id/pro-pdf', authenticate, authorize([UserRole.ProUser, UserRole.Admin, UserRole.HeadEditor]), generateProExport);
