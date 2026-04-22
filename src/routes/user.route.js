import {Router} from 'express';
import { registerUser } from '../controllers/user.controller.js';
 
const router = Router() ; 
router.post('/register', registerUser)
router.get('/', (req, res) => {
  res.json({ message: "All users" });
});

export default router ; 
  
