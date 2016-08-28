import {Rover} from "./Rover";
import {Constants} from "./Constants";

class Plateau {
    constructor (xlength : number, ylength : number) {
        this.XLength = xlength;
        this.YLength = ylength;
    }

    public Rover : Rover;
    public XLength : number;
    public YLength : number;

    public InitRover(rover : Rover) : void {
        this.Rover = rover;
        if(!this.IsValidRoverPosition(rover.RoverPosition.X, rover.RoverPosition.Y)) {
            throw Constants.InvalidRoverPosition;
        }
    }

    public MoveRover(commands : string[]) : string {
        return this.Rover.GetCurrentStateDescription();
    }

    public IsValidRoverPosition(x: number, y: number) : boolean {
        if(x > this.XLength || y >  this.YLength) {
            return false;
        }
        return true;
    }
}

export {Plateau};