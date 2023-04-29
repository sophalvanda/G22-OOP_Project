import { Flight } from "../Airline/Flight";
import { DateTime } from "../Date/DateTime";
import { FlightBooking } from "../FlightBooking/FlightBooking";
import { Passenger } from "../Person/Passenger/Passenger";
import { Trip } from "../Trip/Trip";
import { ConditionType } from "./ConditionType";
import { CreditCard } from "./CreditCard";

export class Booking {
    private trip: Trip[] = [];
    constructor(
        private referenceNumner: number,
        private price: number,
        private creditCard: CreditCard,
        private passenger: Passenger,
        private flightbooking: FlightBooking,
        private conditiontype: ConditionType,
    ) {
        this.price = price;
    }

    // add trip information
    addTrip(trip: Trip) {
        return this.trip.push(trip);
    }
    // get details of booking
    getDetailBooking(bookingNumber: number): FlightBooking | undefined {
        if (bookingNumber == this.referenceNumner) {
            return this.flightbooking;
        }
        return undefined;
    }
    getPassengerBooking(){
        return this.passenger;
    }

   
}