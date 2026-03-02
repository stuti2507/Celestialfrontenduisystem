import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { createExportToken } from '../utils/exportToken.js';

export function generateProExport(req: AuthRequest, res: Response) {
  const token = createExportToken(req.params.id, req.user!.userId);
  res.json({
    watermark: `ESTRA Pro • user:${req.user!.email} • ${new Date().toISOString()}`,
    tokenized_pdf_link: `/exports/${req.params.id}?token=${token}`,
  });
}
