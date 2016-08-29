"use strict";
var Constants_1 = require("./Constants");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGVhdVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL1BsYXRlYXVWYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDBCQUF3QixhQUFhLENBQUMsQ0FBQTtBQUV0QztJQUFBO0lBTUEsQ0FBQztJQUxVLG1DQUFRLEdBQWYsVUFBZ0IsT0FBaUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDTixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQUVNLHdCQUFnQixvQkFGdEI7QUFFd0IifQ==