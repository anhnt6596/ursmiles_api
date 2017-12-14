import express from 'express';
import { getAll, editbyMaSo, create, getByIDBacSi, requireRole } from './controllers';

const router = express.Router();

router.get('/',requireRole("admin"), getAll);

router.post('/create', requireRole("doctor"), create);

router.post('/edit/:MaSo', requireRole("doctor"), editbyMaSo);

router.get('/getbyidbs/:IDBacSi', requireRole("doctor") ,getByIDBacSi);

export default router;