import { Router } from 'express';

import { creatPost } from "../controllers/post.contollers.js";
import { getpost } from '../controllers/post.contollers.js';

const router = Router();

router.route('/create').post(creatPost);
router.route('/get').get(getpost);

export default router ; 