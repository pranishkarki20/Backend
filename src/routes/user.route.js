import {Router} from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import { validregister } from '../middleware/registermiddle.js';
import { validlogin } from '../middleware/loginmiddle.js';
const router = Router() ; //Creating  router instance 
//router.route means define  multiple Http  methods for the 
// same URL path in one chain.

//IN short router means  group all request methods for the same  path together 
router.route('/register').post(validregister, registerUser) // Create a backend POST API route /register that runs the registerUser function.
router.route('/login').post(validlogin, loginUser);
router.route('/logout').post(logoutUser);
export default router ; 
  
