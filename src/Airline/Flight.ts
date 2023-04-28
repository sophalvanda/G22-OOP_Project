import { Airplane } from "../Airplan/Airplan";
import { Gate } from "../Gate/Gate";

export class Flight {
    private gates: Gate[] = [];
    constructor(
        private numberOfFlight: string,
        private airplane: Airplane,

        ){
        this.numberOfFlight = numberOfFlight;
    }
}