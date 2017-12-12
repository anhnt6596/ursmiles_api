import express from 'express';
import { getAll, editbyMaSo, create, requireRole } from './controllers';

const router = express.Router();

router.get('/',requireRole("admin"), getAll);

router.post('/create',requireRole("doctor"), create);

router.post('/edit/:MaSo',requireRole("doctor"), editbyMaSo);

router.get('/getbyid/:id',requireRole("doctor"), (req, res) => {
    res.send('getById');
});

export default router;