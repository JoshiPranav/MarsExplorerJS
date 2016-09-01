import {IRoverValidator} from "../interfaces/IRoverValidator";
import {Constants} from "../helpers/Constants";
import {Rover} from "../Rover";

class RoverValidator implements IRoverValidator {
    public Validate(rover: Rover) : void {
         if(rover.RoverPosition.X < 0 || rover.RoverPosition.Y < 0) {
             console.log(Constants.InValidRoverPosition);
         }
         if(rover.RoverPosition.X > rover.AssociatedPlateau.XLength || rover.RoverPosition.Y > rover.AssociatedPlateau.YLength) {
             console.log(Constants.InValidRoverPosition);
         }
    }
}

export {RoverValidator};