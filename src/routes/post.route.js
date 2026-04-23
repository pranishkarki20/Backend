import { Router } from 'express';

import { creatPost } from "../controllers/post.contollers.js";

const router = Router();

router.route('/create').post(creatPost);
export default router ; 