"use strict";
var Constants_1 = require("./Constants");
var RoverDirections = require("./RoverDirections");
var RoverDirectionFactory = (function () {
    function RoverDirectionFactory() {
    }
    RoverDirectionFactory.GetDirection = function (direction) {
        switch (direction.toUpperCase()) {
            case "N":
                return new RoverDirections.North();
            case "S":
                return new RoverDirections.South();
            case "E":
                return new RoverDirections.East();
            case "W":
                return new RoverDirections.West();
            default:
                throw Constants_1.Constants.InValidDirectionMessage;
        }
    };
    return RoverDirectionFactory;
}());
exports.RoverDirectionFactory = RoverDirectionFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJEaXJlY3Rpb25GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvUm92ZXJEaXJlY3Rpb25GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBd0IsYUFBYSxDQUFDLENBQUE7QUFFdEMsSUFBWSxlQUFlLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUVyRDtJQUFBO0lBZ0JBLENBQUM7SUFmaUIsa0NBQVksR0FBMUIsVUFBMkIsU0FBa0I7UUFDekMsTUFBTSxDQUFBLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQy9CLENBQUM7WUFDRyxLQUFLLEdBQUc7Z0JBQ0osTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RDO2dCQUNJLE1BQU0scUJBQVMsQ0FBQyx1QkFBdUIsQ0FBQztRQUMvQyxDQUFDO0lBQ04sQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQUVPLDZCQUFxQix5QkFGNUI7QUFFOEIifQ==