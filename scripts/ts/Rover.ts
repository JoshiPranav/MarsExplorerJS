import {Position} from "./Position";
import {IRoverDirection} from "./IRoverDirection";
import {Plateau} from  "./Plateau";
import {IRoverValidator} from "./IRoverValidator";
import {Constants} from "./Constants";
import {RoverDirectionFactory} from "./RoverDirectionFactory";

class Rover {
    public RoverPosition : Position;
    public AssociatedPlateau : Plateau;
    public RoverDirection : IRoverDirection;
    private _validator : IRoverValidator;

    constructor(associatedPlateau: Plateau, startingPosition: Position, direction: string, validator: IRoverValidator) {
        this.RoverPosition = startingPosition;
        this.AssociatedPlateau = associatedPlateau;
        this.RoverDirection = RoverDirectionFactory.GetRoverDirection(direction);

        this._validator = validator;
        this._validator.Validate(this);
    }

    private GetCurrentState() : string {
        let direction = this.RoverDirection.DirectionIdentifier();
        let position = `(${this.RoverPosition.X},${this.RoverPosition.Y})`;
        return `Rover is at ${position} facing ${direction}.`;
    }

    public Execute(commands: Array<string>) : string {
        commands.forEach(command => {
            switch(command) {
                case "L":
                    this.RoverDirection.TurnLeft(this);
                    break;
                case "R":
                    this.RoverDirection.TurnRight(this);
                    break;
                case "M":
                    this.RoverDirection.Move(this);
                    break;
                default:
                    console.log(Constants.InValidCommandMessage);
                    break;
            }
        });
        return this.GetCurrentState();
    }
}

export {Rover};