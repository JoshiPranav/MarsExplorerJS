import {Coordinates} from "./Coordinates";
import {IRoverDirection} from "./IRoverDirection";
import {Constants} from "./Constants";
import {RoverDirectionFactory} from "./RoverDirectionFactory";
import {Plateau} from  "./Plateau";

class Rover {
    constructor(x: number, y: number, direction: string) {
        this.RoverDirection = RoverDirectionFactory.GetDirection(direction);
        this.RoverPosition = new Coordinates(x, y);
    }

    public RoverPosition : Coordinates;
    public RoverDirection : IRoverDirection;

    public Execute(commands : string[]) : string {
        for(let cmd in commands)
        {
            // if(CommandsHelper.IsValidCommand(cmd) == false)
            // {
            //     throw Constants.InValidCommandMessage;
            // }
        }
        return this.GetCurrentStateDescription();
    }

    private GetCurrentStateDescription() : string {
        let direction = this.RoverDirection.DirectionIdentifier;
        let position = `(${this.RoverPosition.X},${this.RoverPosition.Y})`;

        return `Rover is at ${position} facing ${direction}.`;
    }

}

export {Rover};