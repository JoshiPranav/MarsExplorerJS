"use strict";
var Constants_1 = require("./Constants");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9Sb3ZlclZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBR3RDO0lBQUE7SUFTQSxDQUFDO0lBUlUsaUNBQVEsR0FBZixVQUFnQixLQUFZO1FBQ3ZCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BILE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDTixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQUVPLHNCQUFjLGtCQUZyQjtBQUV1QiJ9