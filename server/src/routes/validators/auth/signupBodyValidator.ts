import { body } from "express-validator";

const signupBodyValidator = () => {
  return [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be between 8 and 20 characters."),
  ];
};
export { signupBodyValidator };
