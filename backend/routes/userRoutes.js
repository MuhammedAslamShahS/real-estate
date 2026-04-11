import express from "express";
import {
    registerUser,
    loginUser,
    getUserProfile,
    saveProperty,
    getSavedProperties,
} from "../controllers/userController.js";
import userAuth from "../middleware/userAuthMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// protected route
router.get("/profile", userAuth, getUserProfile);

// user can save property and saved property
router.post("/save/:propertyId", userAuth, saveProperty);
router.get("/saved-properties", userAuth, getSavedProperties);

export default router;
