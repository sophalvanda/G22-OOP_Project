import { Address } from "./Address/Address";
import { Airline } from "./Airline/Airline";
import { Airplane } from "./Airline/Airplan/Airplan";
import { Seat } from "./Airline/Airplan/Seat";
import { AllEmployee } from "./Airline/AllEmployee/AllEmployee";
import { Flight } from "./Airline/Flight";
import { Airport } from "./Airport/Airport";
import { Booking } from "./Booking/Booking";
import { ConditionType } from "./Booking/ConditionType";
import { CreditCard } from "./Booking/CreditCard";
import { DateTime } from "./Date/DateTime";
import { Baggage } from "./FlightBooking/Baggage";
import { FlightBooking } from "./FlightBooking/FlightBooking";
import { Meal } from "./FlightBooking/Meal";
import { Gate } from "./Gate/Gate";
import { Attendants } from "./Person/Employee/Attendants";
import { Chef } from "./Person/Employee/Chef";
import { CoPilot } from "./Person/Employee/CoPilot";
import { Crew } from "./Person/Employee/Crew";
import { Employee } from "./Person/Employee/Employee";
import { Pilot } from "./Person/Employee/Pilot";
import { Gender } from "./Person/Gender/Gender";
import { Passenger } from "./Person/Passenger/Passenger";
import { Trip } from "./Trip/Trip";

// create passenger
let darath = new Passenger("Darath", "Pum", Gender.Male, "0719126481");
let Thavroth = new Passenger("Thavroth", "Chea", Gender.Female, "0719546481");

// create Employee
let vanda = new Pilot("Vanda", "Sophal", Gender.Male, "079843254", 4000);
let ronan = new CoPilot("Ronan", "Ogor", Gender.Male, "021327643", 5000);
let visal = new Chef("Visal", "Sok", Gender.Male, "0963247835", 1000);
let vibol = new Chef("Vibol", "Phoung", Gender.Male, "0963234835", 1000);
let sreymom = new Attendants("Sreymom", "Chum", Gender.Female, "0963354835", 1000);
let navin = new Attendants("Navin", "Chorn", Gender.Female, "092098754", 1000);
let hey =new Crew("Hey", "Rem", Gender.Male, "088437638", 1000);
let rien =new Crew("Rien", "Lem", Gender.Male, "0884345338", 1000);

// create airplane
let airplane1 = new Airplane("FiveS4", vanda, ronan);
airplane1.addSeat(new Seat(100))




// create airport
let pochintongAriport = new Airport("PochintongAriport", new Address("Phone", "Cambodia"), "Phnom Penh", "Hanoi");
let hanoiAriport = new Airport("HanoiAriport", new Address("Hanoi", "Veitnam"),"Hanoi","Toyo");


// create date flight 
let dateFlight = new DateTime(29,"April",2023,"3:00PM");
let dateArrive = new DateTime(29,"April",2023,"9:00PM");
// create Gate
let gate1 = new Gate("1A",dateArrive)
// create filght
let filght1 = new Flight("01", airplane1,pochintongAriport,dateFlight);
let filght2= new Flight("02", airplane1,hanoiAriport,dateFlight);
filght1.addGate(gate1)


// create Trip
let trip1 = new Trip(new DateTime(13,"May",2023,"2:30PM"),"Phnom Penh -> Toyo");
trip1.addFlight(filght1)
trip1.addFlight(filght2)

// create credit card
let credit = new CreditCard("Visa",11112222);
// create flight booking'
let flightbooking1= new FlightBooking(darath)
flightbooking1.addBaggage(new Baggage(2));
flightbooking1.addMeal(Meal.Rice)
flightbooking1.addMeal(Meal.Coffee)
flightbooking1.addflight(filght1)


let flightbooking2= new FlightBooking(Thavroth)
flightbooking2.addBaggage(new Baggage(3));
flightbooking2.addMeal(Meal.Rice)
flightbooking2.addMeal(Meal.Coffee)
flightbooking2.addflight(filght1)


// create booking
let booking1 = new Booking(1,250,credit,darath,flightbooking1,ConditionType.EconomyClassic);
let booking2 = new Booking(2,250,credit,Thavroth,flightbooking2,ConditionType.EconomyClassic);

// add employee
let EmployeeInKayak = new AllEmployee();
// getEmployee.addAttendants()
EmployeeInKayak.addCoPilot(ronan)
EmployeeInKayak.addPilot(vanda)
EmployeeInKayak.addChef(vibol)
EmployeeInKayak.addChef(visal)
EmployeeInKayak.addAttendants(navin)
EmployeeInKayak.addAttendants(sreymom)
EmployeeInKayak.addCrew(hey)
EmployeeInKayak.addCrew(rien)

// create airline
let kayak = new Airline("Kayak", new Address("Phone", "Cambodia"),EmployeeInKayak);

kayak.addFlight(filght1)
kayak.addFlight(filght2)
kayak.addBooking(booking1)

// User Story 1
// console.log(booking1.getDetailBooking(1))

// User Story 2
// console.log(kayak.getPasenagerInFlight(filght1))

// User Story 3
// console.log(kayak.getFlightToJoin(dateFlight))

// User Story 4
// console.log(flightbooking1.getMealsBooking(filght1))


// User Story 5
console.log("all salary pilots: "+EmployeeInKayak.getSalaryPilots()+"$")
console.log("all salary co-pilots: "+EmployeeInKayak.getSalaryCoPilots()+"$")
console.log("all salary attendants: "+EmployeeInKayak.getSalaryAttendants()+"$")
console.log("all salary chefs: "+EmployeeInKayak.getsalaryChefs()+"$")
console.log("all salary crews: "+EmployeeInKayak.getSalaryCrews()+"$")

console.log("Salary Company paid to all of employee: "+kayak.getSalaryPaidToAllEmployees()+"$")

console.log(kayak.getGetStayAt(airplane1));


