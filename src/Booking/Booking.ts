import { DateTime } from "../Date/DateTime";
import { FlightBooking } from "../FlightBooking/FlightBooking";
import { Passenger } from "../Person/Passenger/Passenger";
import { CreditCard } from "./CreditCard";

export class Booking {
    // private creditCard: CreditCard;
    constructor(
        private price: number,
        private creditCard: CreditCard,
        private datetime: DateTime,
        private passenger: Passenger,
        private flightbooking: FlightBooking,
        ){
        this.price = price;
    }
}