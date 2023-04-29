import { Flight } from "../Airline/Flight";
import { Passenger } from "../Person/Passenger/Passenger";
import { Baggage } from "./Baggage";
import { Meal } from "./Meal";

export class FlightBooking {

    private flights: Flight[] = [];
    private baggage: Baggage[]=[];
    private meal: Meal[] =[];
    constructor(private passenger: Passenger){
        this.passenger= passenger;
    }
    addflight(flight: Flight){
        return this.flights.push(flight);
    }

    addBaggage(baggage:Baggage){
        return this.baggage.push(baggage);
    }

    addMeal(meal:Meal){
        return this.meal.push(meal);
    }
    getFlights(){
        return this.flights;
    }
    getMeal(){
        return this.meal;
    }
    getMealsBooking(filght:Flight):Meal[]{
        let allMeals:Meal[] = [];
        for(let myFlight of this.flights){
            if(myFlight== filght){
                for(let mealInFlight of this.meal){
                    allMeals.push(mealInFlight)
                }
            }
        }
        return allMeals
    }

    

}