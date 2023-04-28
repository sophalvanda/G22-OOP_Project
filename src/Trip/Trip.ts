import { Flight } from "../Airline/Flight";
import { DateTime } from "../Date/DateTime";

export class Trip {
    private departure: string;
    private Return?: string;
    private flight: Flight[] = [];
    private date: DateTime | undefined;
    constructor(departure: string, Return?: string) {
        this.departure = departure;
    }
}