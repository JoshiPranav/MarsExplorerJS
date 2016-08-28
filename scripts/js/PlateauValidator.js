"use strict";
var Constants_1 = require("./Constants");
var PlateauValidator = (function () {
    function PlateauValidator() {
    }
    PlateauValidator.prototype.Validate = function (plateau) {
        if (plateau.XLength < 0 || plateau.YLength < 0) {
            throw Constants_1.Constants.InValidPlateauDimensions;
        }
    };
    return PlateauValidator;
}());
exports.PlateauValidator = PlateauValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGVhdVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL1BsYXRlYXVWYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDBCQUF3QixhQUFhLENBQUMsQ0FBQTtBQUV0QztJQUFBO0lBTUEsQ0FBQztJQUxVLG1DQUFRLEdBQWYsVUFBZ0IsT0FBaUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0scUJBQVMsQ0FBQyx3QkFBd0IsQ0FBQztRQUM3QyxDQUFDO0lBQ04sQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFFTSx3QkFBZ0Isb0JBRnRCO0FBRXdCIn0=