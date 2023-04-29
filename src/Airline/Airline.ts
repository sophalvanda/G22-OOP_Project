import { Address } from "../Address/Address";
import { Booking } from "../Booking/Booking";
import { DateTime } from "../Date/DateTime";
import { Employee } from "../Person/Employee/Employee";
import { Passenger } from "../Person/Passenger/Passenger";
import { Airplane } from "./Airplan/Airplan";
import { AllEmployee } from "./AllEmployee/AllEmployee";
import { Flight } from "./Flight";

export class Airline {
    private employees: Employee[] = [];
    private flights: Flight[] = [];
    private bookings: Booking[] = [];
    
    constructor (private name: string,private address: Address, private allEmployees: AllEmployee) {
        this.name = name;
        this.address = address;
        this.allEmployees = allEmployees;
    }

    addEmployee(employee: Employee) {
        return this.employees.push(employee);
    }
    addFlight(flight: Flight) {
        return this.flights.push(flight);
    }
    addBooking(booking: Booking) {
        return this.bookings.push(booking);
    }
    getPasenagerInFlight(flight:Flight):Passenger[]{
        let allPassenger:Passenger[]=[]
        for (let myFlight of this.flights){
            if(myFlight == flight){
                for(let booking of this.bookings){
                    allPassenger.push(booking.getPassengerBooking())
                }
            }
        }
        return allPassenger;
    }

    getFlightToJoin(date:DateTime): Flight[]{
        let allFlight:Flight[]=[]
        for( let myFlight of this.flights){
            if(myFlight.getDateTime() == date){
                allFlight.push(myFlight)
            }
        }
        return allFlight;
    }

    getSalaryPaidToAllEmployees():number{
        return (this.allEmployees.getSalaryPilots() + this.allEmployees.getSalaryCoPilots()+ this.allEmployees.getSalaryCrews()+ this.allEmployees.getsalaryChefs())+this.allEmployees.getSalaryAttendants()
    }

    getGetStayAt(airplane: Airplane) {
        for (let flight of this.flights) {
            if (flight.getAirplane() == airplane) {
                return flight.getGate();
            }
        }  
    }
}