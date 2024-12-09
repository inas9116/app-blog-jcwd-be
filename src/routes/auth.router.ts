import { Router } from "express";
import { registerController } from "../controller/auth.controller";
import { loginController } from "../controller/auth.controller";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);


export default router;