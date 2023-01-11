import { Request, Response } from "express";

const signoutController = (req: Request, res: Response) => {
  req.session = null;
  res.send({});
};

export { signoutController };
