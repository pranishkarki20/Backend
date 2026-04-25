import { Router } from 'express';

import { creatPost, updatepost } from "../controllers/post.contollers.js";
import { getpost } from '../controllers/post.contollers.js';
import { deletepost } from '../controllers/post.contollers.js';

const router = Router();

router.route('/create').post(creatPost);
router.route('/get').get(getpost);
router.route('/update/:id').patch(updatepost);
router.route('/delete/:id').delete(deletepost);

export default router ; 