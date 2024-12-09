import { Router } from "express";
import {
  forgotPasswordController,
  registerController,
} from "../controller/auth.controller";
import { loginController } from "../controller/auth.controller";
import {
  validateForgotPassword,
  validateLogin,
  validateRegister,
} from "../validators/auth.validators";

const router = Router();

router.post("/register", validateRegister, registerController);
router.post("/login", validateLogin, loginController);
router.post(
  "/forgot-password",
  validateForgotPassword,
  forgotPasswordController
);

export default router;
