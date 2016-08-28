"use strict";
var RoverValidator_1 = require("./RoverValidator");
var Constants_1 = require("./Constants");
var Rover = (function () {
    function Rover(associatedPlateau, startingPosition, direction) {
        this.RoverPosition = startingPosition;
        this.AssociatedPlateau = associatedPlateau;
        this.RoverDirection = direction;
        this._roverValidator = new RoverValidator_1.RoverValidator();
        this._roverValidator.Validate(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9Sb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsK0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFDaEQsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBRXRDO0lBT0ksZUFBWSxpQkFBMEIsRUFBRSxnQkFBMEIsRUFBRSxTQUEwQjtRQUMxRixJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUVoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSwrQkFBZSxHQUF0QjtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7UUFDeEQsSUFBSSxRQUFRLEdBQUcsTUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBRyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxpQkFBZSxRQUFRLGdCQUFXLFNBQVMsTUFBRyxDQUFDO0lBQzFELENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsUUFBa0I7UUFBakMsaUJBY0M7UUFiRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUNwQixNQUFNLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssR0FBRztvQkFDTCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxHQUFHO29CQUNKLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLEdBQUc7b0JBQ0osS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQ25DO29CQUNJLE1BQU0scUJBQVMsQ0FBQyxxQkFBcUIsQ0FBQztZQUM5QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQUVPLGFBQUssU0FGWjtBQUVjIn0=