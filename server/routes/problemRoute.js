import express from 'express';
import { getProblemSet,getProblemDesc, getSubmissionOutput } from '../controllers/problemController.js';
import authMiddleware from '../middlewares/auth.js';
import limiter from '../middlewares/rateLimiter.js';

const router = express.Router();

router.get('/problemset',authMiddleware, getProblemSet);
router.post('/problem/:id/:title',authMiddleware, getProblemDesc)
router.post('/submissions',authMiddleware, limiter, getSubmissionOutput);


export default router;