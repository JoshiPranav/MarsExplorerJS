import {Rover} from "./Rover";

interface IRoverValidator {
    Validate(rover: Rover) : void;
}

export {IRoverValidator};