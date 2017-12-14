import express from 'express';
import { getAll, editbyMaSo, getByIDBacSi, requireRole } from './controllers';

const router = express.Router();

router.get('/',requireRole("admin"), getAll);

// router.post('/edit/:MaSo', requireRole("doctor"), editbyMaSo);
router.post('/edit/:MaSo', editbyMaSo);

// router.get('/getbyidbs/:IDBacSi', requireRole("doctor"), getByIDBacSi);
router.get('/getbyidbs/:IDBacSi', getByIDBacSi);

export default router;