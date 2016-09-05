"use strict";
var Constants = (function () {
    function Constants() {
    }
    Constants.InValidCommandMessage = "This is not a valid command.";
    Constants.InValidDirectionMessage = "This is not a valid direction.";
    Constants.UnhandledException = "An unhandled error occurred.";
    Constants.InValidRoverPosition = "This is not a valid position for the rover.";
    Constants.InValidPlateauDimensions = "Plateau dimensions cannot be negative.";
    return Constants;
}());
exports.Constants = Constants;
