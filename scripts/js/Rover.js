"use strict";
var Constants_1 = require("./Constants");
var RoverDirectionFactory_1 = require("./RoverDirectionFactory");
var Rover = (function () {
    function Rover(associatedPlateau, startingPosition, direction, validator) {
        this.RoverPosition = startingPosition;
        this.AssociatedPlateau = associatedPlateau;
        this.RoverDirection = RoverDirectionFactory_1.RoverDirectionFactory.GetRoverDirection(direction);
        this._validator = validator;
        this._validator.Validate(this);
    }
    Rover.prototype.GetCurrentState = function () {
        var direction = this.RoverDirection.DirectionIdentifier();
        var position = "(" + this.RoverPosition.X + "," + this.RoverPosition.Y + ")";
        return "Rover is at " + position + " facing " + direction + ".";
    };
    Rover.prototype.Execute = function (commands) {
        var _this = this;
        commands.forEach(function (command) {
            switch (command) {
                case "L":
                    _this.RoverDirection.TurnLeft(_this);
                    break;
                case "R":
                    _this.RoverDirection.TurnRight(_this);
                    break;
                case "M":
                    _this.RoverDirection.Move(_this);
                    break;
                default:
                    console.log(Constants_1.Constants.InValidCommandMessage);
                    break;
            }
        });
        return this.GetCurrentState();
    };
    return Rover;
}());
exports.Rover = Rover;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9Sb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBRTlEO0lBTUksZUFBWSxpQkFBMEIsRUFBRSxnQkFBMEIsRUFBRSxTQUFpQixFQUFFLFNBQTBCO1FBQzdHLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsNkNBQXFCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLCtCQUFlLEdBQXZCO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzFELElBQUksUUFBUSxHQUFHLE1BQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQUcsQ0FBQztRQUNuRSxNQUFNLENBQUMsaUJBQWUsUUFBUSxnQkFBVyxTQUFTLE1BQUcsQ0FBQztJQUMxRCxDQUFDO0lBRU0sdUJBQU8sR0FBZCxVQUFlLFFBQXVCO1FBQXRDLGlCQWtCQztRQWpCRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUNwQixNQUFNLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssR0FBRztvQkFDSixLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQztvQkFDbkMsS0FBSyxDQUFDO2dCQUNWLEtBQUssR0FBRztvQkFDSixLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsQ0FBQztvQkFDcEMsS0FBSyxDQUFDO2dCQUNWLEtBQUssR0FBRztvQkFDSixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztvQkFDL0IsS0FBSyxDQUFDO2dCQUNWO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUM3QyxLQUFLLENBQUM7WUFDZCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQUVPLGFBQUssU0FGWjtBQUVjIn0=