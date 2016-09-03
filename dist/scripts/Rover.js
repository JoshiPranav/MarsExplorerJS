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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NyaXB0cy9Sb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsMEJBQXdCLHFCQUFxQixDQUFDLENBQUE7QUFDOUMsc0NBQW9DLGlDQUFpQyxDQUFDLENBQUE7QUFFdEU7SUFNSSxlQUFZLGlCQUEwQixFQUFFLGdCQUEwQixFQUFFLFNBQWlCLEVBQUUsU0FBMEI7UUFDN0csSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyw2Q0FBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sK0JBQWUsR0FBdkI7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDMUQsSUFBSSxRQUFRLEdBQUcsTUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBRyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxpQkFBZSxRQUFRLGdCQUFXLFNBQVMsTUFBRyxDQUFDO0lBQzFELENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsUUFBdUI7UUFBdEMsaUJBa0JDO1FBakJHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3BCLE1BQU0sQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxHQUFHO29CQUNKLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDO29CQUNuQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxDQUFDO29CQUNwQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO29CQUMvQixLQUFLLENBQUM7Z0JBQ1Y7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQzdDLEtBQUssQ0FBQztZQUNkLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBRU8sYUFBSyxTQUZaO0FBRWMifQ==