"use strict";
var Constants_1 = require("./Constants");
var RoverDirections = require("./RoverDirections");
var RoverDirectionFactory = (function () {
    function RoverDirectionFactory() {
    }
    RoverDirectionFactory.GetDirection = function (direction) {
        switch (direction.toUpperCase()) {
            case "N":
                return new RoverDirections.North();
            case "S":
                return new RoverDirections.South();
            case "E":
                return new RoverDirections.East();
            case "W":
                return new RoverDirections.West();
            default:
                throw Constants_1.Constants.InValidDirectionMessage;
        }
    };
    return RoverDirectionFactory;
}());
exports.RoverDirectionFactory = RoverDirectionFactory;
