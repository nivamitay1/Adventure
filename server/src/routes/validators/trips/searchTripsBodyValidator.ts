import { body } from "express-validator";
import { TripClass } from "../../../models/types/tripClass";

const searchTripsBodyValidator = () => {
  return [
    body("from").not().isEmpty().withMessage("From is required"),
    body("destination").not().isEmpty().withMessage("Destination is required"),
    body("departDate").not().isEmpty().withMessage("Depart date is required"),
    body("returnDate").not().isEmpty().withMessage("Return Date is required"),
    body("tripClass")
      .not()
      .isEmpty()
      .withMessage("Trip Class is required")
      .isIn([TripClass.Economy, TripClass.Business, TripClass.FirstClass])
      .withMessage("Trip Class is either Economy,Business or First-class"),
  ];
};

export { searchTripsBodyValidator };
