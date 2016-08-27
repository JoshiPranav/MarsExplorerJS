"use strict";
var Coordinates_1 = require("./Coordinates");
var RoverDirectionFactory_1 = require("./RoverDirectionFactory");
var Rover = (function () {
    function Rover(x, y, cardinalDirection) {
        this.RoverDirection = RoverDirectionFactory_1.RoverDirectionFactory.GetDirection(cardinalDirection);
        this.RoverPosition = new Coordinates_1.Coordinates(x, y);
    }
    Rover.prototype.Execute = function (commands) {
        for (var cmd in commands) {
        }
        return this.GetCurrentStateDescription();
    };
    Rover.prototype.GetCurrentStateDescription = function () {
        var direction = this.RoverDirection.DirectionIdentifier;
        var position = "(" + this.RoverPosition.X + "," + this.RoverPosition.Y + ")";
        return "Rover is at " + position + " facing " + direction + ".";
    };
    return Rover;
}());
exports.Rover = Rover;
