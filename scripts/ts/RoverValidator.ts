import {IRoverValidator} from "./IRoverValidator";
import {Constants} from "./Constants";
import {Rover} from "./Rover";

class RoverValidator implements IRoverValidator {
    public Validate(rover: Rover) : void {
         if(rover.RoverPosition.X < 0 || rover.RoverPosition.Y < 0) {
             throw Constants.InValidRoverPosition;
         }
         if(rover.RoverPosition.X > rover.AssociatedPlateau.XLength || rover.RoverPosition.Y > rover.AssociatedPlateau.YLength) {
             throw Constants.InValidRoverPosition;
         }
    }
}

export {RoverValidator};