import {Rover} from "./Rover";
import {Constants} from "./Constants";

class Plateau {
    constructor (xlength : number, ylength : number) {
        this.xLength = xlength;
        this.yLength = ylength;
    }

    public Rover : Rover;
    public xLength : number;
    public yLength : number;

    public InitRover(rover : Rover) {
        this.Rover = rover;
        if(!this.IsValidRoverPosition(rover.RoverPosition.X, rover.RoverPosition.Y)) {
            throw Constants.InvalidRoverPosition;
        }
    }

    public MoveRover(commands : string[]) {
        
    }

    public IsValidRoverPosition(x: number, y: number) : boolean {
        if(x > this.xLength || y >  this.yLength) {
            return false;
        }
        return true;
    }
}

export {Plateau};