"use strict";
var Constants_1 = require("../helpers/Constants");
var PositionValidator = (function () {
    function PositionValidator() {
    }
    PositionValidator.prototype.IsValidPosition = function (position, plateau) {
        if (position.X < 0 || position.Y < 0) {
            console.log(Constants_1.Constants.InValidRoverPosition);
            return false;
        }
        if (position.X > plateau.XLength || position.Y > plateau.YLength) {
            console.log(Constants_1.Constants.InValidRoverPosition);
            return false;
        }
        return true;
    };
    return PositionValidator;
}());
exports.PositionValidator = PositionValidator;
