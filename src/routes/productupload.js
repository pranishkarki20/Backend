import { Router } from 'express';
import upload from "../middleware/multer.js";
const router = Router();

router.post(
  "/upload",
  upload.any(),
  (req, res) => {
    res.json({
      fileurl: `/uploads/$(req.file.filename)`,
    });

  }
);
export default router;