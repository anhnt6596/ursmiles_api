import express from 'express';
import { getAll, editbyMaSo, create, getByIDBacSi, requireRole } from './controllers';

const router = express.Router();

router.get('/',requireRole("admin"), getAll);

// router.post('/create', requireRole("doctor"), create);
router.post('/create', create);

// router.post('/edit/:MaSo', requireRole("doctor"), editbyMaSo);
router.post('/edit/:MaSo', editbyMaSo);

// router.get('/getbyid/:id', requireRole("doctor"), getByIDBacSi);
router.get('/getbyidbs/:IDBacSi', getByIDBacSi);

export default router;