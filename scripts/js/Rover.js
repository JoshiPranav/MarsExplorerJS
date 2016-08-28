"use strict";
var Constants_1 = require("./Constants");
var Rover = (function () {
    function Rover(associatedPlateau, startingPosition, direction, validator) {
        this.RoverPosition = startingPosition;
        this.AssociatedPlateau = associatedPlateau;
        this.RoverDirection = direction;
        this._validator = validator;
        this._validator.Validate(this);
    }
    Rover.prototype.GetCurrentState = function () {
        var direction = this.RoverDirection.DirectionIdentifier;
        var position = "(" + this.RoverPosition.X + "," + this.RoverPosition.Y + ")";
        return "Rover is at " + position + " facing " + direction + ".";
    };
    Rover.prototype.Execute = function (commands) {
        var _this = this;
        commands.forEach(function (command) {
            switch (command) {
                case "L":
                    _this.RoverDirection.TurnLeft(_this);
                case "R":
                    _this.RoverDirection.TurnRight(_this);
                case "M":
                    _this.RoverDirection.Move(_this);
                default:
                    throw Constants_1.Constants.InValidCommandMessage;
            }
        });
        return this.GetCurrentState();
    };
    return Rover;
}());
exports.Rover = Rover;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9Sb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBRXRDO0lBT0ksZUFBWSxpQkFBMEIsRUFBRSxnQkFBMEIsRUFBRSxTQUEwQixFQUFFLFNBQTBCO1FBQ3RILElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBRWhDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSwrQkFBZSxHQUF0QjtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7UUFDeEQsSUFBSSxRQUFRLEdBQUcsTUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBRyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxpQkFBZSxRQUFRLGdCQUFXLFNBQVMsTUFBRyxDQUFDO0lBQzFELENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsUUFBa0I7UUFBakMsaUJBY0M7UUFiRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUNwQixNQUFNLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssR0FBRztvQkFDTCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxHQUFHO29CQUNKLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLEdBQUc7b0JBQ0osS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQ25DO29CQUNJLE1BQU0scUJBQVMsQ0FBQyxxQkFBcUIsQ0FBQztZQUM5QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQUVPLGFBQUssU0FGWjtBQUVjIn0=