import { Request, Response } from "express";
import { Trip } from "../../models/tripModel";

const getTripController = async (req: Request, res: Response) => {
  const trips = await Trip.findOne({
    _id: req.params.id,
    availableSits: { $gt: 0 },
    departDate: { $gt: new Date() },
  });

  res.status(200).send(trips);
};
export { getTripController };
