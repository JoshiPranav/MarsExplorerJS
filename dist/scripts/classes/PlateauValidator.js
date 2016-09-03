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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGVhdVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY3JpcHRzL2NsYXNzZXMvUGxhdGVhdVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsMEJBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFFL0M7SUFBQTtJQU1BLENBQUM7SUFMVSxtQ0FBUSxHQUFmLFVBQWdCLE9BQWlCO1FBQzdCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ04sQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFFTSx3QkFBZ0Isb0JBRnRCO0FBRXdCIn0=