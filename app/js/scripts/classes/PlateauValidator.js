"use strict";
var Constants_1 = require("../helpers/Constants");
var PlateauValidator = (function () {
    function PlateauValidator() {
    }
    PlateauValidator.prototype.Validate = function (plateau) {
        if (plateau.XLength < 0 || plateau.YLength < 0) {
            console.log(Constants_1.Constants.InValidPlateauDimensions);
        }
    };
    return PlateauValidator;
}());
exports.PlateauValidator = PlateauValidator;
