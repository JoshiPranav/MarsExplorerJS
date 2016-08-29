import {IPlateauValidator} from "./IPlateauValidator";
import {PlateauValidator} from "./PlateauValidator";
import {Plateau} from "./Plateau";
import {IRoverValidator} from "./IRoverValidator";
import {RoverValidator} from "./RoverValidator";
import {Rover} from "./Rover";
import {Position} from "./Position";

let plateau = new Plateau(20,20,new PlateauValidator());
let position = new Position(5,5);
let rover = new Rover(plateau, position, "N", new RoverValidator());

let commands = ["L","L","M","R","M","M"];
let state = rover.Execute(commands);

console.log(state);