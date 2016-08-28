import {Constants} from "./Constants";
import {IRoverDirection} from "./IRoverDirection";
import * as RoverDirections from "./RoverDirections";

class RoverDirectionFactory {
    public static GetRoverDirection(direction : string) : IRoverDirection {
        switch(direction.toUpperCase()) {
            case "N" : 
                return new RoverDirections.North();
            case "S" :
                return new RoverDirections.South();
            case "E" :
                return new RoverDirections.East();
            case "W":
                return new RoverDirections.West();
            default:
                throw Constants.InValidDirectionMessage;
         }
    }
}

export {RoverDirectionFactory};
