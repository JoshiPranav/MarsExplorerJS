"use strict";
var Constants_1 = require("../helpers/Constants");
var RoverValidator = (function () {
    function RoverValidator() {
    }
    RoverValidator.prototype.Validate = function (rover) {
        if (rover.RoverPosition.X < 0 || rover.RoverPosition.Y < 0) {
            console.log(Constants_1.Constants.InValidRoverPosition);
        }
        if (rover.RoverPosition.X > rover.AssociatedPlateau.XLength || rover.RoverPosition.Y > rover.AssociatedPlateau.YLength) {
            console.log(Constants_1.Constants.InValidRoverPosition);
        }
    };
    return RoverValidator;
}());
exports.RoverValidator = RoverValidator;
