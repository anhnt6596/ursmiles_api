import express from 'express';
import { getByMaSo, editByMaSo, create } from './controllers';

const router = express.Router();

router.post('/:MaSo', getByMaSo);

router.post('/create', create);

router.post('/edit/:MaSo', editByMaSo);

export default router;