import { Router } from 'express';
import { whyNowData } from '../controllers/whyNow.controller.js';

export const whyNowRouter = Router();
whyNowRouter.get('/', whyNowData);
