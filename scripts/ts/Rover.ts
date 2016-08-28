import {Position} from "./Position";
import {IRoverDirection} from "./IRoverDirection";
import {Plateau} from  "./Plateau";
import {IRoverValidator} from "./IRoverValidator";
import {Constants} from "./Constants";

class Rover {

    public RoverPosition : Position;
    public AssociatedPlateau : Plateau;
    public RoverDirection : IRoverDirection;
    private _validator : IRoverValidator;

    constructor(associatedPlateau: Plateau, startingPosition: Position, direction: IRoverDirection, validator: IRoverValidator) {
        this.RoverPosition = startingPosition;
        this.AssociatedPlateau = associatedPlateau;
        this.RoverDirection = direction;

        this._validator = validator;
        this._validator.Validate(this);
    }

    public GetCurrentState() : string {
        let direction = this.RoverDirection.DirectionIdentifier;
        let position = `(${this.RoverPosition.X},${this.RoverPosition.Y})`;
        return `Rover is at ${position} facing ${direction}.`;
    }

    public Execute(commands: string[]) : string {
        commands.forEach(command => {
            switch(command) {
                case "L":
                   this.RoverDirection.TurnLeft(this);
                case "R":
                    this.RoverDirection.TurnRight(this);
                case "M":
                    this.RoverDirection.Move(this);
                default:
                    throw Constants.InValidCommandMessage;
            }
        });
        return this.GetCurrentState();
    }
}

export {Rover};