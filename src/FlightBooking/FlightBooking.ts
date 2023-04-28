import { Flight } from "../Airline/Flight";
import { Baggage } from "./Baggage";

export class FlightBooking {
    constructor(
        private flight: Flight,
        private baggage: Baggage,
        ){
    
    }
}