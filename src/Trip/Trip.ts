import { Flight } from "../Airline/Flight";
import { DateTime } from "../Date/DateTime";

export class Trip {
    private departure: string;
    private Return?: string;
    private flight: Flight[] = [];
    constructor(private datetime: DateTime,departure: string, Return?: string) {
        this.departure = departure;
    }
    addFlight(flight: Flight) {
        return this.flight.push(flight);
    }
}