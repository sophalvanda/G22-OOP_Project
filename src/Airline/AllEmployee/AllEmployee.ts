import { Attendants } from "../../Person/Employee/Attendants";
import { Chef } from "../../Person/Employee/Chef";
import { CoPilot } from "../../Person/Employee/CoPilot";
import { Crew } from "../../Person/Employee/Crew";
import { Pilot } from "../../Person/Employee/Pilot"

export class AllEmployee{
    private pilots: Pilot[]=[];
    private coPilots:CoPilot[]=[];
    private attendants:Attendants[]=[];
    private crews:Crew[]=[];
    private chefs:Chef[]=[];

    addPilot(pilot:Pilot){
        return this.pilots.push(pilot);
    }

    addCoPilot(coPilot:CoPilot){
        return this.coPilots.push(coPilot);
    }

    addAttendants(attendants: Attendants){
        return this.attendants.push(attendants);
    }

    addCrew(crew:Crew){
        return this.crews.push(crew);
    }

    addChef(chef:Chef){
        return this.chefs.push(chef);
    }

    getSalaryPilots():number{
        let salaryPilots = 0;
        for(let pilot of this.pilots){
            salaryPilots += pilot.getSalaryPilot()
        }
        // console.log("salaryPilots " + salaryPilots);
        return salaryPilots;
    }
    getSalaryCoPilots():number{
        let salaryCoPilots = 0;
        for (let coPilot of this.coPilots){
            salaryCoPilots += coPilot.getSalaryCoPilot();
        }
        // console.log("salaryCoPilots " + salaryCoPilots);
        return salaryCoPilots;
    }

    getSalaryAttendants():number{
        let salaryAttendants = 0;
        for (let attendant of this.attendants){
            salaryAttendants += attendant.getSalaryAttendant()
        }
        // console.log("salaryAttendants " + salaryAttendants);
        return salaryAttendants;
    }

    getSalaryCrews():number{
        let salaryCrews = 0;
        for (let crew of this.crews){
            salaryCrews += crew.getSalaryCrew();
        }
        // console.log("salaryCrews " + salaryCrews);
        return salaryCrews;
    }

    getsalaryChefs():number{
        let salaryChefs = 0;
        for (let chef of this.chefs){
            salaryChefs += chef.getSalaryChef()
        }
        // console.log("salaryChefs " + salaryChefs);
        return salaryChefs;
    }
}
