import { Attendants } from "../Person/Employee/Attendants";
import { CoPilot } from "../Person/Employee/CoPilot";
import { Crew } from "../Person/Employee/Crew";
import { Pilot } from "../Person/Employee/Pilot";
import { Seat } from "./Seat";

export class Airplane {
    private attandants: Attendants[] = [];
    private crews: Crew[] = []; 
    private seats: Seat[] = [];
    constructor (
        private name: string,
        private pilot: Pilot,
        private coPilot: CoPilot,
    ){}
}