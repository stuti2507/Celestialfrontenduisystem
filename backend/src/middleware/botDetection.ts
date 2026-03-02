import { NextFunction, Request, Response } from 'express';

const blockedAgents = [/curl/i, /wget/i, /python-requests/i];

export function botDetection(req: Request, res: Response, next: NextFunction) {
  const ua = req.headers['user-agent'] ?? '';
  if (blockedAgents.some((pattern) => pattern.test(ua))) {
    return res.status(403).json({ message: 'Automated traffic blocked' });
  }
  return next();
}
