import {Rover} from "../Rover";

interface IRoverMover {
    MoveUp(rover: Rover): void;
    MoveDown(rover: Rover): void;
    MoveLeft(rover: Rover): void;
    MoveRight(rover: Rover): void;
}

export {IRoverMover};
