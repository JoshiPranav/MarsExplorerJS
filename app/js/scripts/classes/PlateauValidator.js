"use strict";
var PlateauValidator = (function () {
    function PlateauValidator() {
    }
    PlateauValidator.prototype.IsValid = function (plateau) {
        if (plateau.XLength < 0 || plateau.YLength < 0) {
            return false;
        }
        return true;
    };
    return PlateauValidator;
}());
exports.PlateauValidator = PlateauValidator;
