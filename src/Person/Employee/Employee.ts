import { Person } from "../Person";

export class Employee extends Person {
    constructor (firstName: string, lastName: string, gender: string, phone: string, private salary: number) {
        super (firstName, lastName, gender, phone);
        this.salary = salary;
    }
}