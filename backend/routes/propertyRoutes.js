import express from "express";

import {
    addProperty,
    getAllProperties,
    getSingleProperty,
    updateProperty,
    deleteProperty,
} from "../controllers/propertyController.js";

import upload from "../middleware/uploadMiddleware.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import router from "./adminRoutes.js";

// create
router.post("/", protectAdmin, upload.single("image"), addProperty);

// read / get
router.get("/", getAllProperties);

router.get("/:id", getSingleProperty);

// update property / edit property
router.put("/:id", protectAdmin, upload.single("image"), updateProperty);

// delete property
router.delete("/:id", protectAdmin, deleteProperty);

export default router;
