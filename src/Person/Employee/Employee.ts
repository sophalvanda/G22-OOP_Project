import { Gender } from "../Gender/Gender";
import { Person } from "../Person";

export class Employee extends Person {
    constructor (firstName: string, lastName: string, gender: Gender, phone: string, protected salary: number) {
        super (firstName, lastName, gender, phone);
        this.salary = salary;
    }
    
}