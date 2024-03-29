import { body } from "express-validator";

const signinBodyValidator = () => {
  return [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password."),
  ];
};
export { signinBodyValidator };
