import {Coordinates} from "./Coordinates";
import {IRoverDirection} from "./IRoverDirection";
import {RoverDirectionFactory} from "./RoverDirectionFactory";
import {Plateau} from  "./Plateau";

class Rover {
    constructor(x: number, y: number, direction: string) {
        this.RoverDirection = RoverDirectionFactory.GetDirection(direction);
        this.RoverPosition = new Coordinates(x, y);
    }

    public RoverPosition : Coordinates;
    public RoverDirection : IRoverDirection;
    
    public GetCurrentStateDescription() : string {
        let direction = this.RoverDirection.DirectionIdentifier;
        let position = `(${this.RoverPosition.X},${this.RoverPosition.Y})`;

        return `Rover is at ${position} facing ${direction}.`;
    }
}

export {Rover};