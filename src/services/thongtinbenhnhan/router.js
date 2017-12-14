import express from 'express';
import { getByMaSo, editByMaSo, create } from './controllers';

const router = express.Router();

router.get('/:MaSo', getByMaSo);

router.post('/create', create);

router.post('/edit/:MaSo', editByMaSo);

export default router;