import {IPositionValidator} from "../interfaces/IPositionValidator";
import {Constants} from "../helpers/Constants";
import {Position} from "../entities/Position";
import {Plateau} from "../entities/Plateau";


class PositionValidator implements IPositionValidator {
    public IsValidPosition(position: Position, plateau: Plateau): boolean {
         if (position.X < 0 || position.Y < 0) {
             console.log(Constants.InValidRoverPosition);
             return false;
         }
         if (position.X > plateau.XLength || position.Y > plateau.YLength) {
             console.log(Constants.InValidRoverPosition);
             return false;
         }
         return true;
    }
}

export {PositionValidator};
