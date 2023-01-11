import { Request, Response } from "express";
import { Trip } from "../../models/tripModel";

const getAllTripsController = async (req: Request, res: Response) => {
  const trips = await Trip.find({
    availableSits: { $gt: 0 },
    departDate: { $gt: new Date() },
  });

  res.status(200).send(trips);
};
export { getAllTripsController };
