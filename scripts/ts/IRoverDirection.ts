import {Rover} from "./Rover"

export interface IRoverDirection {
    DirectionIdentifier() : string;
    TurnRight(rover: Rover) : void;
    TurnLeft(rover: Rover) : void;
    Move(rover: Rover) : void;
}