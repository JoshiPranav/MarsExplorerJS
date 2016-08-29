"use strict";
var Constants_1 = require("./Constants");
var RoverDirections = require("./RoverDirections");
var RoverDirectionFactory = (function () {
    function RoverDirectionFactory() {
    }
    RoverDirectionFactory.GetRoverDirection = function (direction) {
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
                console.log(Constants_1.Constants.InValidDirectionMessage);
        }
    };
    return RoverDirectionFactory;
}());
exports.RoverDirectionFactory = RoverDirectionFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJEaXJlY3Rpb25GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvUm92ZXJEaXJlY3Rpb25GYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBd0IsYUFBYSxDQUFDLENBQUE7QUFFdEMsSUFBWSxlQUFlLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUVyRDtJQUFBO0lBZUEsQ0FBQztJQWRpQix1Q0FBaUIsR0FBL0IsVUFBZ0MsU0FBa0I7UUFDOUMsTUFBTSxDQUFBLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFLLEdBQUc7Z0JBQ0osTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RDO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDTixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQUVPLDZCQUFxQix5QkFGNUI7QUFFOEIifQ==