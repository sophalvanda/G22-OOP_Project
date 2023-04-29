import { Gender } from "../Gender/Gender";
import { Person } from "../Person";

export class Passenger extends Person {
    constructor (firstName: string, lastName: string, gender: Gender, phone: string) {
        super(firstName, lastName, gender, phone);
    }
}