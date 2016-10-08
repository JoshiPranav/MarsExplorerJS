import {IPositionValidator} from "../interfaces/IPositionValidator";
import {Position} from "../entities/Position";
import {Plateau} from "../entities/Plateau";

class PositionValidator implements IPositionValidator {
    public IsValidPosition(position: Position, plateau: Plateau): boolean {
         if (position.X < 0 || position.Y < 0) {
             return false;
         }
         if (position.X > plateau.XLength || position.Y > plateau.YLength) {
             return false;
         }
         return true;
    }
}

export {PositionValidator};
