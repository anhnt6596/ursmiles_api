import express from 'express';
import { getAll, editbyMaSo, create } from './controllers';

const router = express.Router();

router.get('/', getAll);

router.post('/create', create);
router.post('/edit/:MaSo', editbyMaSo);

router.get('/getbyid/:id', (req, res) => {
    res.send('getById');
});

export default router;