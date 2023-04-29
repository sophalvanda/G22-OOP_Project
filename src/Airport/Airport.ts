import { Address } from "../Address/Address";
import { Airplane } from "../Airline/Airplan/Airplan";
import { Gate } from "../Gate/Gate";
import { Airline } from "../Airline/Airline";
import { Flight } from "../Airline/Flight";
import { FlightBooking } from "../FlightBooking/FlightBooking";

export class Airport {
    private airlines:Airline[] = [];
    private flights: Flight[] = [];
    private airplanes:Airplane[] = [];
    private gates: Gate[] = [];
    
    constructor(private name: string,private address: Address,private departurePlace:string,private arrivedPlace:string){}
    addAirline(airline:Airline) {
        return this.airlines.push(airline);
    }
    addFlight(flight:Flight) {
        return this.flights.push(flight);
    }
    addAirplane(airplane:Airplane) {
        return this.airplanes.push(airplane);
    }
    addGate(gate:Gate) {
        return this.gates.push(gate);
    }
   
}