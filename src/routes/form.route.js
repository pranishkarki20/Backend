import { Router } from "express";

import { createform } from "../controllers/form.controllers.js";

const router = Router() ; 

router.route('/').post(createform);

export default router;
