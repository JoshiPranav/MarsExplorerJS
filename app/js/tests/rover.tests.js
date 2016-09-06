"use strict";
///reference path="../typings/index.d.ts
var chai_1 = require("chai");
var Position_1 = require("../scripts/entities/Position");
var PlateauValidator_1 = require("../scripts/classes/PlateauValidator");
var Plateau_1 = require("../scripts/entities/Plateau");
var PositionValidator_1 = require("../scripts/classes/PositionValidator");
var Rover_1 = require("../scripts/Rover");
describe("Rover Class", function () {
    var direction;
    var position;
    var plateau;
    var rover;
    function Setup() {
        direction = "N";
        position = new Position_1.Position(5, 5);
        plateau = new Plateau_1.Plateau(20, 20, new PlateauValidator_1.PlateauValidator());
        rover = new Rover_1.Rover(plateau, position, direction, new PositionValidator_1.PositionValidator());
    }
    before(function () {
        Setup();
    });
    it("Should return correct rover state", function () {
        var commands = ["L", "L", "M", "R", "M", "M"];
        var roverState = rover.Execute(commands);
        chai_1.expect(roverState).equals("Rover is at (3,4) facing West.");
    });
});
