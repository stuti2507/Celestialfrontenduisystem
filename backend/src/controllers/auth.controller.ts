import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { env } from '../config/env.js';

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(8) });

export async function login(req: Request, res: Response) {
  const parse = loginSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ message: 'Invalid payload' });

  const user = await prisma.user.findUnique({ where: { email: parse.data.email } });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(parse.data.password, user.password_hash);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user.id, role: user.role, email: user.email }, env.jwtSecret, { expiresIn: '12h' });
  return res.json({ token, role: user.role });
}
