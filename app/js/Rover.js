"use strict";
var Constants_1 = require("./helpers/Constants");
var RoverDirectionFactory_1 = require("./helpers/RoverDirectionFactory");
var Rover = (function () {
    function Rover(associatedPlateau, startingPosition, direction, validator) {
        this.RoverPosition = startingPosition;
        this.AssociatedPlateau = associatedPlateau;
        this.RoverDirection = RoverDirectionFactory_1.RoverDirectionFactory.GetRoverDirection(direction);
        this._validator = validator;
        this._validator.Validate(this);
    }
    Rover.prototype.Execute = function (commands) {
        var _this = this;
        commands.forEach(function (command) {
            switch (command) {
                case "L":
                    _this.RoverDirection.TurnLeft(_this);
                    break;
                case "R":
                    _this.RoverDirection.TurnRight(_this);
                    break;
                case "M":
                    _this.RoverDirection.Move(_this);
                    break;
                default:
                    console.log(Constants_1.Constants.InValidCommandMessage);
                    break;
            }
        });
        return this.GetCurrentState();
    };
    Rover.prototype.GetCurrentState = function () {
        var direction = this.RoverDirection.DirectionIdentifier();
        var position = "(" + this.RoverPosition.X + "," + this.RoverPosition.Y + ")";
        return "Rover is at " + position + " facing " + direction + ".";
    };
    return Rover;
}());
exports.Rover = Rover;
