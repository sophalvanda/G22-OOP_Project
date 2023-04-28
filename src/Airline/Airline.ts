import { DateTime } from "../Date/DateTime";
import { Employee } from "../Person/Employee/Employee";
import { Flight } from "./Flight";

export class Airline {
    private employee: Employee[] = [];
    private flight: Flight[] = [];
    private date: DateTime | undefined;
    constructor (private name: string) {
        this.name = name;
    }

}