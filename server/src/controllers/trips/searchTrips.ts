import { NextFunction, Request, Response } from "express";
import { Trip } from "../../models/tripModel";
import { Error } from "mongoose";
import { BadRequestError } from "../../errors/bad-request-error";
import createTripsUtils from "../../services/createTripsUtils";

const searchTripsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { from, destination, departDate, returnDate, tripClass } = req.body;

  const trips = await Trip.find({
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

    "departDate.takeoff": {
      $gte: new Date(departDate).setHours(0, 0, 0),
      $lte: new Date(departDate).setHours(23, 59, 59, 59),
    },

    "returnDate.takeoff": {
      $gte: new Date(returnDate).setHours(0, 0, 0),
      $lte: new Date(returnDate).setHours(23, 59, 59, 59),
    },

    tripClass,
    availableSits: { $gt: 0 },
  });

  if (trips.length === 0) {
    try {
      let newTrips: any[] = [];
      for (let i = 0; i < 10; i++) {
        const price = createTripsUtils.calcPrice(
          from.lat,
          from.lon,
          destination.lat,
          destination.lon,
          tripClass
        );
        const duration = createTripsUtils.calcFlightDuration(
          from.lat,
          from.lon,
          destination.lat,
          destination.lon
        );
        const availableSits =
          createTripsUtils.getAvailableSitsByClass(tripClass);

        let image = await createTripsUtils.getImage(destination.name);

        const departDateTime = createTripsUtils.calcLandingTime(
          departDate,
          duration
        );
        const returnDateTime = createTripsUtils.calcLandingTime(
          returnDate,
          duration
        );

        const newTrip = Trip.build({
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
          departDate: departDateTime,
          returnDate: returnDateTime,
          price,
          image,
          duration,
          availableSits,
          tripClass,
          createdAt: new Date(),
        });

        await newTrip.save();
        newTrips = [...newTrips, newTrip];
      }
      return res.status(201).send(newTrips);
    } catch (error) {
      if (error instanceof Error.ValidationError) {
        return next(new BadRequestError(error.message));
      }
      console.log(error);
    }
  }

  res.status(200).send(trips);
};

export { searchTripsController };
