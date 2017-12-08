import express from 'express';

import account from './account/router';
import benhnhan from './benhnhan/router';
import tieusuykhoa from './tieusuykhoa/router';
import tieusunhakhoa from './tieusunhakhoa/router';

const router = express.Router();

router.use('/v1/account', account);
router.use('/v1/benhnhan', benhnhan);
router.use('/v1/tieusuykhoa', tieusuykhoa);
router.use('/v1/tieusunhakhoa', tieusunhakhoa);

export default router;