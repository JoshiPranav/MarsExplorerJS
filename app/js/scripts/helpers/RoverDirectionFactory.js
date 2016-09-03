"use strict";
var Constants_1 = require("./Constants");
var RoverDirections = require("../classes/RoverDirections");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJEaXJlY3Rpb25GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHMvc2NyaXB0cy9oZWxwZXJzL1JvdmVyRGlyZWN0aW9uRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBRXRDLElBQVksZUFBZSxXQUFNLDRCQUE0QixDQUFDLENBQUE7QUFFOUQ7SUFBQTtJQWVBLENBQUM7SUFkaUIsdUNBQWlCLEdBQS9CLFVBQWdDLFNBQWtCO1FBQzlDLE1BQU0sQ0FBQSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxHQUFHO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxLQUFLLEdBQUc7Z0JBQ0osTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QztnQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ04sQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFFTyw2QkFBcUIseUJBRjVCO0FBRThCIn0=