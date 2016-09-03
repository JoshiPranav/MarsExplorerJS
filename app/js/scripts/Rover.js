"use strict";
var Constants_1 = require("./helpers/Constants");
var RoverDirectionFactory_1 = require("./helpers/RoverDirectionFactory");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90cy9zY3JpcHRzL1JvdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSwwQkFBd0IscUJBQXFCLENBQUMsQ0FBQTtBQUM5QyxzQ0FBb0MsaUNBQWlDLENBQUMsQ0FBQTtBQUV0RTtJQU1JLGVBQVksaUJBQTBCLEVBQUUsZ0JBQTBCLEVBQUUsU0FBaUIsRUFBRSxTQUEwQjtRQUM3RyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLDZDQUFxQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTywrQkFBZSxHQUF2QjtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMxRCxJQUFJLFFBQVEsR0FBRyxNQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFHLENBQUM7UUFDbkUsTUFBTSxDQUFDLGlCQUFlLFFBQVEsZ0JBQVcsU0FBUyxNQUFHLENBQUM7SUFDMUQsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxRQUF1QjtRQUF0QyxpQkFrQkM7UUFqQkcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDcEIsTUFBTSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFLLEdBQUc7b0JBQ0osS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7b0JBQ25DLEtBQUssQ0FBQztnQkFDVixLQUFLLEdBQUc7b0JBQ0osS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLENBQUM7b0JBQ3BDLEtBQUssQ0FBQztnQkFDVixLQUFLLEdBQUc7b0JBQ0osS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDVjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDN0MsS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUFFTyxhQUFLLFNBRlo7QUFFYyJ9