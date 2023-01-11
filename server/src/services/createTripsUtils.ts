import axios from "axios";
import { TripClass } from "../models/types/tripClass";
import { addSeconds, format } from "date-fns";
import { FlightDate, FlightDuration } from "../models/tripModel";

export default class CreateTripsUtils {
  static calcPrice(
    fromLat: number,
    fromLon: number,
    DestinationLat: number,
    DestinationLon: number,
    tripClass: TripClass
  ): number {
    const distance = this.getDistanceFromLatLonInKm(
      fromLat,
      fromLon,
      DestinationLat,
      DestinationLon
    );

    const price = this.getPriceByDistanceAndClass(distance, tripClass);

    return price;
  }

  static getDistanceFromLatLonInKm(
    fromLat: number,
    fromLon: number,
    destinationLat: number,
    destinationLon: number
  ): number {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(destinationLat - fromLat); // deg2rad below
    const dLon = this.deg2rad(destinationLon - fromLon);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(fromLat)) *
        Math.cos(this.deg2rad(destinationLat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }
  static deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  static getPriceByDistanceAndClass(
    distance: number,
    tripClass: TripClass
  ): number {
    let price = 0;
    const randomNumber = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
    switch (tripClass) {
      case "Economy":
        price = distance / 10 + randomNumber;
        break;
      case "Business":
        price = distance / 7 + randomNumber;
        break;
      case "First-class":
        price = distance / 5 + randomNumber;
        break;

      default:
        price = 100;
        break;
    }
    price = Math.floor(price);
    return price;
  }

  static getAvailableSitsByClass(tripClass: TripClass): number {
    let availableSits = 0;
    switch (tripClass) {
      case "Economy":
        availableSits = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        break;
      case "Business":
        availableSits = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        break;
      case "First-class":
        availableSits = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
        break;

      default:
        availableSits = 100;
        break;
    }
    return availableSits;
  }

  static async getImage(destinationCountry: StringConstructor) {
    let image =
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTcwMDF8MHwxfHNlYXJjaHwxfHxwbGFuZXxlbnwwfDB8fHwxNjUxNDgzMzU4&ixlib=rb-1.2.1&q=80&w=1080";
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&client_id=${process.env.UNSPLASH_KEY}&query=${destinationCountry}&orientation=landscape`
      );
      const data = await res.data;
      if (data.total > 0) {
        image = data.results[0].urls.regular;
      }

      return image;
    } catch (error) {
      return image;
    }
  }

  static randomiseTime() {
    const randomHour = Math.floor(Math.random() * (23 - 1 + 1)) + 1;
    const randomMinutes = Math.round(Math.random() * 11) * 5;

    const randomisedTime = {
      randomHour,
      randomMinutes,
    };

    return randomisedTime;
  }

  static calcLandingTime(date: Date, duration: FlightDuration): FlightDate {
    const { randomHour, randomMinutes } = this.randomiseTime();

    const newTakeoffDate = new Date(date).setHours(
      randomHour,
      randomMinutes,
      0
    );
    const newLandingDate = new Date(date).setHours(
      randomHour + duration.hours,
      randomMinutes + Number(duration.minutes),
      0
    );

    const newDate = {
      takeoff: new Date(newTakeoffDate),
      landing: new Date(newLandingDate),
    };

    return newDate;
  }

  static calcFlightDuration(
    fromLat: number,
    fromLon: number,
    DestinationLat: number,
    DestinationLon: number
  ): FlightDuration {
    const distance = this.getDistanceFromLatLonInKm(
      fromLat,
      fromLon,
      DestinationLat,
      DestinationLon
    );
    let time = distance / 700;

    console.log(time);

    const hours = Math.floor(time);
    let minutes: any = (time - hours) * 60;
    // minutes = String(minutes.toFixed(0)).padStart(2, "0");

    const duration = { hours, minutes };

    return duration;
  }
}
