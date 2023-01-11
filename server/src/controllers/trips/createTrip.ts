import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../errors/bad-request-error";
import { Trip } from "../../models/tripModel";
import { Error } from "mongoose";
const createTripController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    from,
    destination,
    departDate,
    returnDate,
    price,
    image,
    duration,
    availableSits,
    tripClass,
  } = req.body;

  try {
    const trip = Trip.build({
      from: {
        country: from.country,
        city: from.city,
        name: from.name,
        code: from.code,
        id: from.id,
      },
      destination: {
        country: destination.country,
        city: destination.city,
        name: destination.name,
        code: destination.code,
        id: destination.id,
      },
      departDate,
      returnDate,
      price,
      image,
      duration,
      availableSits,
      tripClass,
      createdAt: new Date(),
    });

    await trip.save();

    res.status(201).send(trip);
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      next(new BadRequestError(error.message));
    }
  }
};
export { createTripController };
