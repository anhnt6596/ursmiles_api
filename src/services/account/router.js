import express from 'express';
import { getAllAccounts, login, signup, edit } from './controllers';

const router = express.Router();

router.get('/', getAllAccounts);

router.post('/login', login);

router.post('/register', signup);

router.post('/edit/:ID', edit);

router.get('/getbyname/:username', (req, res) => {
    res.send('getByUsername');
});

export default router;