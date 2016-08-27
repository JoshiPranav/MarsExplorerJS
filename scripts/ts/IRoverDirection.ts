import {Rover} from "./Rover";

interface IRoverDirection {
    DirectionIdentifier() : string;
    TurnRight(rover: Rover) : void;
    TurnLeft(rover: Rover) : void;
    Move(rover: Rover) : void;
}

export {IRoverDirection};