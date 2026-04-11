import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js";
import userAuth from "../middleware/userAuthMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// protected route
router.get("/profile", userAuth, getUserProfile);

export default router;
