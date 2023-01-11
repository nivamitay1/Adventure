import { body } from "express-validator";
import { TripClass } from "../../../models/types/tripClass";

const createTripBodyValidator = () => {
  return [
    body("from").not().isEmpty().withMessage("From is required"),
    body("destination").not().isEmpty().withMessage("Destination is required"),
    body("departDate").not().isEmpty().withMessage("Depart date is required"),
    body("returnDate").not().isEmpty().withMessage("Return Date is required"),
    body("price")
      .not()
      .isEmpty()
      .withMessage("price is required")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
    body("image").not().isEmpty().withMessage("Image is required"),
    body("availableSits")
      .not()
      .isEmpty()
      .withMessage("Available Sits is required")
      .isFloat({ gt: 0 })
      .withMessage("Available Sits must be greater than 0"),
    body("tripClass")
      .not()
      .isEmpty()
      .withMessage("Trip Class is required")
      .isIn([TripClass.Economy, TripClass.Business, TripClass.FirstClass])
      .withMessage("Trip Class is either Economy,Business or First-class"),
  ];
};

export { createTripBodyValidator };
