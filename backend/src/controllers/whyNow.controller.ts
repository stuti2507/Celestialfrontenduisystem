import { Request, Response } from 'express';
import { getWhyNowData } from '../services/chartData.service.js';

export function whyNowData(_: Request, res: Response) {
  return res.json(getWhyNowData());
}
