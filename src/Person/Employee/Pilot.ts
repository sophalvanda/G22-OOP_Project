import { Gender } from "../Gender/Gender";
import { Employee } from "./Employee";

export class Pilot extends Employee {
    constructor (firstName: string, lastName: string, gender: Gender, phone: string, salary: number) {
        super(firstName, lastName, gender, phone, salary);
    }
    getSalaryPilot() {
        return this.salary; 
    }
}