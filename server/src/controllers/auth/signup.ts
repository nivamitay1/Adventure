import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../errors/bad-request-error";
import { User } from "../../models/userModel";
import jwt from "jsonwebtoken";

const signupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    next(new BadRequestError("Email in use"));
    return;
  }

  const user = User.build({ email, password });
  await user.save();
  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  // Store it on session object
  req.session = { jwt: userJwt };
  res.status(201).send(user);
};

export { signupController };
