import { Request, Response } from 'express';

export function getGovernanceDashboard(_: Request, res: Response) {
  res.json({
    controls: [
      'Evidence editing',
      'Approving contributions',
      'Version rollbacks',
      'Conflict-of-interest logging',
      'Debate synthesis publishing',
    ],
  });
}
