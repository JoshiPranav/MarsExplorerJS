"use strict";
var North = (function () {
    function North() {
    }
    North.prototype.DirectionIdentifier = function () {
        return "North";
    };
    North.prototype.TurnRight = function (rover) {
        rover.RoverDirection = new East();
    };
    North.prototype.TurnLeft = function (rover) {
        rover.RoverDirection = new West();
    };
    North.prototype.Move = function (rover) {
        rover.RoverPosition.Y += 1;
    };
    return North;
}());
exports.North = North;
var South = (function () {
    function South() {
    }
    South.prototype.DirectionIdentifier = function () {
        return "South";
    };
    South.prototype.TurnRight = function (rover) {
        rover.RoverDirection = new West();
    };
    South.prototype.TurnLeft = function (rover) {
        rover.RoverDirection = new East();
    };
    South.prototype.Move = function (rover) {
        rover.RoverPosition.Y -= 1;
    };
    return South;
}());
exports.South = South;
var East = (function () {
    function East() {
    }
    East.prototype.DirectionIdentifier = function () {
        return "East";
    };
    East.prototype.TurnRight = function (rover) {
        rover.RoverDirection = new South();
    };
    East.prototype.TurnLeft = function (rover) {
        rover.RoverDirection = new North();
    };
    East.prototype.Move = function (rover) {
        rover.RoverPosition.X += 1;
    };
    return East;
}());
exports.East = East;
var West = (function () {
    function West() {
    }
    West.prototype.DirectionIdentifier = function () {
        return "West";
    };
    West.prototype.TurnRight = function (rover) {
        rover.RoverDirection = new North();
    };
    West.prototype.TurnLeft = function (rover) {
        rover.RoverDirection = new South();
    };
    West.prototype.Move = function (rover) {
        rover.RoverPosition.X -= 1;
    };
    return West;
}());
exports.West = West;
