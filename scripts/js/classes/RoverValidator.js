"use strict";
var Constants_1 = require("../helpers/Constants");
var RoverValidator = (function () {
    function RoverValidator() {
    }
    RoverValidator.prototype.Validate = function (rover) {
        if (rover.RoverPosition.X < 0 || rover.RoverPosition.Y < 0) {
            console.log(Constants_1.Constants.InValidRoverPosition);
        }
        if (rover.RoverPosition.X > rover.AssociatedPlateau.XLength || rover.RoverPosition.Y > rover.AssociatedPlateau.YLength) {
            console.log(Constants_1.Constants.InValidRoverPosition);
        }
    };
    return RoverValidator;
}());
exports.RoverValidator = RoverValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jbGFzc2VzL1JvdmVyVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwQkFBd0Isc0JBQXNCLENBQUMsQ0FBQTtBQUcvQztJQUFBO0lBU0EsQ0FBQztJQVJVLGlDQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUN2QixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwSCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ04sQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFFTyxzQkFBYyxrQkFGckI7QUFFdUIifQ==