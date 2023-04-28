import { Person } from "../Person";

export class Passenger extends Person {
    constructor (firstName: string, lastName: string, gender: string, phone: string) {
        super(firstName, lastName, gender, phone);
    }
}