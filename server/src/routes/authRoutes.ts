import express from "express";
const router = express.Router();
import { signupBodyValidator } from "./validators/auth/signupBodyValidator";
import { signinBodyValidator } from "./validators/auth/signinBodyValidator";
import { validationRequest } from "../middlewares/validate-request";
import { signupController } from "../controllers/auth/signup";
import { currentUser } from "../middlewares/current-user";
import { currentUserController } from "../controllers/auth/currentUser";
import { signinController } from "../controllers/auth/signin";
import { signoutController } from "../controllers/auth/signout";

// Signup route
router.post(
  "/signup",
  signupBodyValidator(),
  validationRequest,
  signupController
);

// Signin route
router.post(
  "/signin",
  signinBodyValidator(),
  validationRequest,
  signinController
);

router.post("/signout", signoutController);

// Currentuser route
router.get("/currentuser", currentUser, currentUserController);

export { router as authRouter };
