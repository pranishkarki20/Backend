import { Router } from 'express';
import upload from "../Multer/multer.js";
const router = Router();

router.post(
  "/upload",
  upload.any(),
  (req, res) => {

    console.log(req.file);

    res.json({
      message: "Uploaded successfully",
      file: req.file
    });

  }
);
export default router;