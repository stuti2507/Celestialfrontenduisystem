import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export function createExportToken(evidenceId: string, userId: string) {
  return jwt.sign({ evidenceId, userId, feature: 'pro-export' }, env.jwtSecret, { expiresIn: '10m' });
}
