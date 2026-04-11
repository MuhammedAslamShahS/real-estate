import express from "express";
import {
  createEnquiry,
  getMyEnquiries,
} from "../controllers/enquiryController.js";
import userAuth from "../middleware/userAuthMiddleware.js";

const router = express.Router();

router.post("/", userAuth, createEnquiry);
router.get("/my", userAuth, getMyEnquiries);

export default router;