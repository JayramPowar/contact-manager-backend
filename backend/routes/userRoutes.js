import express from "express";
import { getCurrentUser, loginUser, registerUser } from "../controllers/userController.js";
import validateTokenHandler from "../middlewares/validateTokenHandler.js";


const router = express.Router();

router.post("/register",registerUser );

router.post("/login", loginUser);

router.get("/current",validateTokenHandler, getCurrentUser);

export default router;