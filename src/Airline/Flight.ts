import { Airplane } from "../Airplan/Airplan";

export class Flight {
    constructor(
        private numberOfFlight: string,
        private airplane: Airplane,

        ){
        this.numberOfFlight = numberOfFlight;
    }
}