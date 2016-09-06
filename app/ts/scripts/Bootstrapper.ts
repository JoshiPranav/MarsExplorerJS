import {PlateauValidator} from "./classes/PlateauValidator";
import {Plateau} from "./entities/Plateau";
import {PositionValidator} from "./classes/PositionValidator";
import {Rover} from "./Rover";
import {Position} from "./entities/Position";

let plateau = new Plateau(20, 20, new PlateauValidator());
let position = new Position(5, 5);
let rover = new Rover(plateau, position, "N", new PositionValidator());
let commands = ["L", "L", "M", "R", "M", "M"];

let state = rover.Execute(commands);

console.log(state);
