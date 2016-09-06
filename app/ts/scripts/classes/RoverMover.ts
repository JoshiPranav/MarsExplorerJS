import {IRoverMover} from "../interfaces/IRoverMover";
import {Rover} from "../Rover";
import {Position} from "../entities/Position";
import {Plateau} from "../entities/Plateau";
import {IPositionValidator} from "../interfaces/IPositionValidator";

class RoverMover implements IRoverMover {
    private _positionValidator: IPositionValidator;

    constructor(positionValidator: IPositionValidator) {
        this._positionValidator = positionValidator;
    }

    public MoveUp(rover: Rover): void {
        let newPosition = new Position(rover.RoverPosition.X, rover.RoverPosition.Y + 1);
        if (this.IsValidMove(newPosition, rover.AssociatedPlateau)) {
            rover.RoverPosition.Y = rover.RoverPosition.Y + 1;
        }
    }

    public MoveDown(rover: Rover): void {
        let newPosition = new Position(rover.RoverPosition.X, rover.RoverPosition.Y - 1);
        if (this.IsValidMove(newPosition, rover.AssociatedPlateau)) {
            rover.RoverPosition.Y = rover.RoverPosition.Y - 1;
        }
    }

    public MoveLeft(rover: Rover): void {
        let newPosition = new Position(rover.RoverPosition.X - 1, rover.RoverPosition.Y);
        if (this.IsValidMove(newPosition, rover.AssociatedPlateau)) {
            rover.RoverPosition.Y = rover.RoverPosition.X - 1;
        }
    }

    public MoveRight(rover: Rover): void {
        let newPosition = new Position(rover.RoverPosition.X + 1, rover.RoverPosition.Y);
        if (this.IsValidMove(newPosition, rover.AssociatedPlateau)) {
            rover.RoverPosition.Y = rover.RoverPosition.X + 1;
        }
    }

    private IsValidMove(position: Position, plateau: Plateau): boolean {
        let isValid = this._positionValidator.IsValidPosition(position, plateau);
        return isValid;
    }
}
