import {Position} from "../entities/Position";
import {Plateau} from "../entities/Plateau";

interface IPositionValidator {
    IsValidPosition(position: Position, plateau: Plateau): boolean;
}

export {IPositionValidator};
