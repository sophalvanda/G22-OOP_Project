export abstract class Person {
    constructor (private firstName: string,private lastName: string, private gender: string, private phone: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.phone = phone;
    }
}