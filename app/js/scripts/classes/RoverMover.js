"use strict";
var Position_1 = require("../entities/Position");
var RoverMover = (function () {
    function RoverMover(positionValidator) {
        this._positionValidator = positionValidator;
    }
    RoverMover.prototype.MoveUp = function (rover) {
        var newPosition = new Position_1.Position(rover.RoverPosition.X, rover.RoverPosition.Y + 1);
        if (this.IsValidMove(newPosition, rover.AssociatedPlateau)) {
            rover.RoverPosition.Y = rover.RoverPosition.Y + 1;
        }
    };
    RoverMover.prototype.MoveDown = function (rover) {
        var newPosition = new Position_1.Position(rover.RoverPosition.X, rover.RoverPosition.Y - 1);
        if (this.IsValidMove(newPosition, rover.AssociatedPlateau)) {
            rover.RoverPosition.Y = rover.RoverPosition.Y - 1;
        }
    };
    RoverMover.prototype.MoveLeft = function (rover) {
        var newPosition = new Position_1.Position(rover.RoverPosition.X - 1, rover.RoverPosition.Y);
        if (this.IsValidMove(newPosition, rover.AssociatedPlateau)) {
            rover.RoverPosition.Y = rover.RoverPosition.X - 1;
        }
    };
    RoverMover.prototype.MoveRight = function (rover) {
        var newPosition = new Position_1.Position(rover.RoverPosition.X + 1, rover.RoverPosition.Y);
        if (this.IsValidMove(newPosition, rover.AssociatedPlateau)) {
            rover.RoverPosition.Y = rover.RoverPosition.X + 1;
        }
    };
    RoverMover.prototype.IsValidMove = function (position, plateau) {
        var isValid = this._positionValidator.IsValidPosition(position, plateau);
        return isValid;
    };
    return RoverMover;
}());
