import {Position} from "./Position";
import {IRoverDirection} from "./IRoverDirection";
import {Plateau} from  "./Plateau";
import {IRoverValidator} from "./IRoverValidator";
import {RoverValidator} from "./RoverValidator";
import {Constants} from "./Constants";

class Rover {

    public RoverPosition : Position;
    public AssociatedPlateau : Plateau;
    public RoverDirection : IRoverDirection;
    private _roverValidator : IRoverValidator;

    constructor(associatedPlateau: Plateau, startingPosition: Position, direction: IRoverDirection) {
        this.RoverPosition = startingPosition;
        this.AssociatedPlateau = associatedPlateau;
        this.RoverDirection = direction;

        this._roverValidator = new RoverValidator();
        this._roverValidator.Validate(this);
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