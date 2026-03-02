import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env.js';
import { apiRateLimiter } from './middleware/rateLimit.js';
import { botDetection } from './middleware/botDetection.js';
import { authRouter } from './routes/auth.routes.js';
import { evidenceRouter } from './routes/evidence.routes.js';
import { contributionsRouter } from './routes/contributions.routes.js';
import { adminRouter } from './routes/admin.routes.js';
import { whyNowRouter } from './routes/whyNow.routes.js';
import { exportRouter } from './routes/export.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));
app.use(apiRateLimiter);
app.use(botDetection);

app.get('/health', (_, res) => res.json({ status: 'ok' }));
app.use('/auth', authRouter);
app.use('/evidence', evidenceRouter);
app.use('/contributions', contributionsRouter);
app.use('/admin', adminRouter);
app.use('/why-now', whyNowRouter);
app.use('/exports', exportRouter);

app.listen(env.port, () => {
  console.log(`ESTRA API listening on ${env.port}`);
});
