"use strict";
var PositionValidator = (function () {
    function PositionValidator() {
    }
    PositionValidator.prototype.IsValidPosition = function (position, plateau) {
        if (position.X < 0 || position.Y < 0) {
            return false;
        }
        if (position.X > plateau.XLength || position.Y > plateau.YLength) {
            return false;
        }
        return true;
    };
    return PositionValidator;
}());
exports.PositionValidator = PositionValidator;
