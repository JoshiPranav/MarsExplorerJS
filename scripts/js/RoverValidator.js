"use strict";
var Constants_1 = require("./Constants");
var RoverValidator = (function () {
    function RoverValidator() {
    }
    RoverValidator.prototype.Validate = function (rover) {
        if (rover.RoverPosition.X < 0 || rover.RoverPosition.Y < 0) {
            throw Constants_1.Constants.InValidRoverPosition;
        }
        if (rover.RoverPosition.X > rover.AssociatedPlateau.XLength || rover.RoverPosition.Y > rover.AssociatedPlateau.YLength) {
            throw Constants_1.Constants.InValidRoverPosition;
        }
    };
    return RoverValidator;
}());
exports.RoverValidator = RoverValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9Sb3ZlclZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBR3RDO0lBQUE7SUFTQSxDQUFDO0lBUlUsaUNBQVEsR0FBZixVQUFnQixLQUFZO1FBQ3ZCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0scUJBQVMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwSCxNQUFNLHFCQUFTLENBQUMsb0JBQW9CLENBQUM7UUFDekMsQ0FBQztJQUNOLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBRU8sc0JBQWMsa0JBRnJCO0FBRXVCIn0=