import express from "express";
import { requireAuth } from "../middlewares/require-auth";
import { createTripBodyValidator } from "./validators/trips/createTripBodyValidator";
import { validationRequest } from "../middlewares/validate-request";
import { createTripController } from "../controllers/trips/createTrip";
import { getAllTripsController } from "../controllers/trips/getAllTrips";
import { getTripController } from "../controllers/trips/getTrip";
import { searchTripsController } from "../controllers/trips/searchTrips";
import { searchTripsBodyValidator } from "./validators/trips/searchTripsBodyValidator";
const router = express.Router();

router.post(
  "/create",
  requireAuth,
  createTripBodyValidator(),
  validationRequest,
  createTripController
);
router.get("/", getAllTripsController);
router.get("/:id", getTripController);
router.post(
  "/search",
  searchTripsBodyValidator(),
  validationRequest,
  searchTripsController
);

export { router as tripsRouter };
