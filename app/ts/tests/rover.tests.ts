///reference path="../typings/index.d.ts
import { expect } from "chai";
import {Position} from "../scripts/entities/Position";
import {PlateauValidator} from "../scripts/classes/PlateauValidator";
import {Plateau} from "../scripts/entities/Plateau";
import {PositionValidator} from "../scripts/classes/PositionValidator";
import {Rover} from "../scripts/Rover";

describe("Rover Tests", () => {
    let direction: string;
    let position: Position;
    let plateau: Plateau;
    let rover: Rover;

    function Setup() {
        direction = "N";
        position = new Position(5, 5);
        plateau = new Plateau(20, 20);
        rover = new Rover(plateau, position, direction, new PositionValidator(), new PlateauValidator());
    }

    before(function() {
        Setup();
    });

    it("Should return correct rover state", () => {
        let commands = ["L", "L", "M", "R", "M", "M"];
        let roverState = rover.Execute(commands);
        expect(roverState).equals("Rover is at (3,4) facing West.");
    });
});
