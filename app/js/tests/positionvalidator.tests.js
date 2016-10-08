"use strict";
///reference path="../typings/index.d.ts
var chai_1 = require("chai");
var Position_1 = require("../scripts/entities/Position");
var Plateau_1 = require("../scripts/entities/Plateau");
var PositionValidator_1 = require("../scripts/classes/PositionValidator");
describe("Position Validator Tests", function () {
    it("Should be a valid position, so should return true", function () {
        var position = new Position_1.Position(5, 5);
        var plateau = new Plateau_1.Plateau(20, 20);
        var positionValidator = new PositionValidator_1.PositionValidator();
        var isValid = positionValidator.IsValidPosition(position, plateau);
        chai_1.expect(isValid).equals(true);
    });
    it("Should not be a valid position, so should return false", function () {
        var position = new Position_1.Position(21, 5);
        var plateau = new Plateau_1.Plateau(20, 20);
        var positionValidator = new PositionValidator_1.PositionValidator();
        var isValid = positionValidator.IsValidPosition(position, plateau);
        chai_1.expect(isValid).equals(false);
    });
});
