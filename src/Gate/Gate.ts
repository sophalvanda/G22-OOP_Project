import { DateTime } from "../Date/DateTime";

export class Gate {
    constructor(
        private numnberOfGate: string,
        private datetime: DateTime,        ){
        this.numnberOfGate = numnberOfGate;
    }
}