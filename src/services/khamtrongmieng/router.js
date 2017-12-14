import express from 'express';
import {getAll, create, editbyMaSo, requireRole} from './controller';

const router = express.Router();

router.get('/', requireRole("admin"), getAll);

router.post('/create', requireRole("doctor"), create);

router.post('/edit/:MaSo', requireRole("doctor"), editbyMaSo);


export default router;