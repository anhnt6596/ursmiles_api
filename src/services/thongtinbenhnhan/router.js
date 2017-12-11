import express from 'express';
import { getByMaSo } from './controllers';

const router = express.Router();

router.get('/:MaSo', getByMaSo);

export default router;