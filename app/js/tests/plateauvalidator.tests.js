"use strict";
///reference path="../typings/index.d.ts
var chai_1 = require("chai");
var Plateau_1 = require("../scripts/entities/Plateau");
var PlateauValidator_1 = require("../scripts/classes/PlateauValidator");
describe("Plateau Validator Tests", function () {
    it("Should be a valid plateau, so should return true", function () {
        var plateau = new Plateau_1.Plateau(20, 20);
        var plateauValidator = new PlateauValidator_1.PlateauValidator();
        var isValid = plateauValidator.IsValid(plateau);
        chai_1.expect(isValid).equals(true);
    });
    it("Should not be a valid plateau, so should return false", function () {
        var plateau = new Plateau_1.Plateau(-2, -3);
        var plateauValidator = new PlateauValidator_1.PlateauValidator();
        var isValid = plateauValidator.IsValid(plateau);
        chai_1.expect(isValid).equals(false);
    });
});
