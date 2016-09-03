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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJEaXJlY3Rpb25GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjcmlwdHMvaGVscGVycy9Sb3ZlckRpcmVjdGlvbkZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF3QixhQUFhLENBQUMsQ0FBQTtBQUV0QyxJQUFZLGVBQWUsV0FBTSw0QkFBNEIsQ0FBQyxDQUFBO0FBRTlEO0lBQUE7SUFlQSxDQUFDO0lBZGlCLHVDQUFpQixHQUEvQixVQUFnQyxTQUFrQjtRQUM5QyxNQUFNLENBQUEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxLQUFLLEdBQUc7Z0JBQ0osTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RDLEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEM7Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNOLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBRU8sNkJBQXFCLHlCQUY1QjtBQUU4QiJ9