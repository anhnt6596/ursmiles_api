import express from 'express';
import { getAll, editbyMaSo, create, requireRole } from './controllers';

const router = express.Router();

// router.get('/', requireRole("admin"), getAll);
router.get('/', getAll);

// router.post('/create', requireRole("doctor"), create);
router.post('/create', create);

// router.post('/edit/:MaSo', requireRole("doctor"), editbyMaSo);
router.post('/edit/:MaSo', editbyMaSo);

export default router;