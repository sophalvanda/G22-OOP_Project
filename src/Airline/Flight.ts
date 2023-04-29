import { Airplane } from "./Airplan/Airplan";
import { Gate } from "../Gate/Gate";
import { Airport } from "../Airport/Airport";
import { DateTime } from "../Date/DateTime";

export class Flight {
    private gates: Gate[] = [];
    
    constructor(
        private numberOfFlight: string,
        private airplane: Airplane,
        private airport: Airport,
        private dateTime: DateTime,

        ){
        this.numberOfFlight = numberOfFlight;
    }
    addGate(gate: Gate){
        return this.gates.push(gate);
    }
    getDateTime(){
        return this.dateTime;
    }
    getGate() {
        return this.gates;
    }
    getAirplane() {
        return this.airplane;
    }
}