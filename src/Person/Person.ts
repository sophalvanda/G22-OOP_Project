import { Gender } from "./Gender/Gender";

export abstract class Person {
    constructor (private firstName: string,private lastName: string, private gender: Gender, private phone: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.phone = phone;
    }
}