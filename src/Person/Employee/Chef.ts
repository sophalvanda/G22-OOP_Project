import { Employee } from "./Employee";

export class Chef extends Employee {
    constructor (firstName: string, lastName: string, gender: string, phone: string, salary: number) {
        super(firstName, lastName, gender, phone, salary);
    }
}