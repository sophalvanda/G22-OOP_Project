import { Address } from "../Address/Address";
import { Airplane } from "../Airplan/Airplan";
import { Gate } from "../Gate/Gate";
import { Airline } from "./Airline";
import { Flight } from "./Flight";

export class Airport {
    private airline:Airline[] = [];
    private flight: Flight[] = [];
    private airplane:Airplane[] = [];
    private gate: Gate[] = [];
    constructor(private address: Address){}
}