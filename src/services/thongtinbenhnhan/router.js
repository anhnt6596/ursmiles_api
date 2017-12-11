import express from 'express';
import { getByMaSo, editByMaSo } from './controllers';

const router = express.Router();

router.get('/:MaSo', getByMaSo);

router.post('/edit/:MaSo', editByMaSo);

export default router;