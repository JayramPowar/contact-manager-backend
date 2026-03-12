import express from "express";
import { getCurrentUser, loginUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register",registerUser );

router.post("/login", loginUser);

router.get("/current", getCurrentUser);

export default router;