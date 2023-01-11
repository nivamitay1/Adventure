import mongoose from "mongoose";
import { TripClass } from "./types/tripClass";

interface location {
  country: string;
  city: string;
  name: string;
  code: string;
  id: string;
}

export interface FlightDuration {
  hours: number;
  minutes: number;
}

export interface FlightDate {
  takeoff: Date;
  landing: Date;
}

// An interface that describes the properties
// that are requried to create a new Trip
interface TripAttrs {
  from: location;
  destination: location;
  departDate: FlightDate;
  returnDate: FlightDate;
  price: number;
  image: string;
  duration: FlightDuration;
  availableSits: number;
  tripClass: TripClass;
  createdAt: Date;
}

// An interface that describes the properties
// that a Trip Model has
interface TripModel extends mongoose.Model<TripDoc> {
  build(attr: TripAttrs): TripDoc;
}

// An interface that describes the properties
// that a Trip Document has
interface TripDoc extends mongoose.Document {
  from: location;
  destination: location;
  departDate: FlightDate;
  returnDate: FlightDate;
  price: number;
  image: string;
  duration: FlightDuration;
  availableSits: number;
  tripClass: TripClass;
  createdAt: Date;
}

const locationSchema = {
  country: {
    type: String,
    required: [true, "A Location must have a country."],
    trim: true,
    minlength: [
      2,
      "A Location country must have more or equal then 2 characters",
    ],
  },
  city: {
    type: String,
    required: [true, "A Location must have a city."],
    trim: true,
    minlength: [2, "A Location city must have more or equal then 2 characters"],
  },
  name: {
    type: String,
    required: [true, "A Location must have an air port."],
    trim: true,
    minlength: [
      2,
      "A Location air port must have more or equal then 2 characters",
    ],
  },
  code: {
    type: String,
    required: [true, "A Location must have a code."],
    trim: true,
    minlength: [3, "A Location code must have more or equal then 3 characters"],
  },
  id: {
    type: String,
    required: [true, "A Location must have an ID."],
  },
};

const tripSchema = new mongoose.Schema({
  from: locationSchema,
  destination: locationSchema,
  departDate: {
    takeoff: {
      type: Date,
      required: [true, "A trip must have a depart date takeoff."],
    },
    landing: {
      type: Date,
      required: [true, "A trip must have a depart date landing."],
    },
  },
  returnDate: {
    takeoff: {
      type: Date,
      required: [true, "A trip must have a return date takeoff."],
    },
    landing: {
      type: Date,
      required: [true, "A trip must have a return date landing."],
    },
  },
  price: { type: Number, required: [true, "A trip must have a price."] },
  image: { type: String, required: [true, "A trip must have an image."] },
  duration: {
    hours: { type: Number, required: [true, "A trip must have a duration."] },
    minutes: { type: Number, required: [true, "A trip must have a duration."] },
  },
  availableSits: {
    type: Number,
    required: [true, "A trip must have an available sits."],
  },
  tripClass: {
    type: String,
    enum: [TripClass.Economy, TripClass.Business, TripClass.FirstClass],
    default: TripClass.Economy,
    required: [true, "A trip must have a class."],
  },
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: Date.now(),
  },
});

tripSchema.statics.build = (attrs: TripAttrs) => {
  return new Trip(attrs);
};

const Trip = mongoose.model<TripDoc, TripModel>("Trip", tripSchema);

export { Trip };
