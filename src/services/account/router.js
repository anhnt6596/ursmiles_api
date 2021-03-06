import express from 'express';
import {
    getAllAccounts,
    login,
    signup,
    edit,
    requireRole,
    permission,
    changeRole,
} from './controllers';


const router = express.Router();

router.get('/', getAllAccounts);

router.post('/login', login);

router.post('/register', signup);

router.post('/edit/:ID', edit);

router.post('/changerole', requireRole("admin"), changeRole);

router.post('/permission', requireRole("admin"), permission);

export default router;