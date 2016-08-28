"use strict";
var Coordinates_1 = require("./Coordinates");
var RoverDirectionFactory_1 = require("./RoverDirectionFactory");
var Rover = (function () {
    function Rover(x, y, direction) {
        this.RoverDirection = RoverDirectionFactory_1.RoverDirectionFactory.GetDirection(direction);
        this.RoverPosition = new Coordinates_1.Coordinates(x, y);
    }
    Rover.prototype.Execute = function (commands) {
        for (var cmd in commands) {
        }
        return this.GetCurrentStateDescription();
    };
    Rover.prototype.GetCurrentStateDescription = function () {
        var direction = this.RoverDirection.DirectionIdentifier;
        var position = "(" + this.RoverPosition.X + "," + this.RoverPosition.Y + ")";
        return "Rover is at " + position + " facing " + direction + ".";
    };
    return Rover;
}());
exports.Rover = Rover;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9Sb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRzFDLHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBRTlEO0lBQ0ksZUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLFNBQWlCO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsNkNBQXFCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx5QkFBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBS00sdUJBQU8sR0FBZCxVQUFlLFFBQW1CO1FBQzlCLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUN4QixDQUFDO1FBS0QsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU8sMENBQTBCLEdBQWxDO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztRQUN4RCxJQUFJLFFBQVEsR0FBRyxNQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFHLENBQUM7UUFFbkUsTUFBTSxDQUFDLGlCQUFlLFFBQVEsZ0JBQVcsU0FBUyxNQUFHLENBQUM7SUFDMUQsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBRU8sYUFBSyxTQUZaO0FBRWMifQ==