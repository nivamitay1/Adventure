import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../../errors/bad-request-error";
import { User } from "../../models/userModel";
import { Password } from "../../services/password";

const signinController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    next(new BadRequestError("Invalid credential"));
    return;
  }

  const passwordMatch = await Password.compare(existingUser.password, password);

  if (!passwordMatch) {
    next(new BadRequestError("Invalid credential"));
    return;
  }

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY!
  );

  // Store it on session object
  req.session = { jwt: userJwt };
  res.status(200).send(existingUser);
};

export { signinController };
