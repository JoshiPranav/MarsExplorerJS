"use strict";
var North = (function () {
    function North() {
    }
    North.prototype.DirectionIdentifier = function () {
        return "North";
    };
    North.prototype.TurnRight = function (rover) {
        rover.RoverDirection = new East();
    };
    North.prototype.TurnLeft = function (rover) {
        rover.RoverDirection = new West();
    };
    North.prototype.Move = function (rover) {
        rover.RoverPosition.Y += 1;
    };
    return North;
}());
exports.North = North;
var South = (function () {
    function South() {
    }
    South.prototype.DirectionIdentifier = function () {
        return "South";
    };
    South.prototype.TurnRight = function (rover) {
        rover.RoverDirection = new West();
    };
    South.prototype.TurnLeft = function (rover) {
        rover.RoverDirection = new East();
    };
    South.prototype.Move = function (rover) {
        rover.RoverPosition.Y -= 1;
    };
    return South;
}());
exports.South = South;
var East = (function () {
    function East() {
    }
    East.prototype.DirectionIdentifier = function () {
        return "East";
    };
    East.prototype.TurnRight = function (rover) {
        rover.RoverDirection = new South();
    };
    East.prototype.TurnLeft = function (rover) {
        rover.RoverDirection = new North();
    };
    East.prototype.Move = function (rover) {
        rover.RoverPosition.X += 1;
    };
    return East;
}());
exports.East = East;
var West = (function () {
    function West() {
    }
    West.prototype.DirectionIdentifier = function () {
        return "West";
    };
    West.prototype.TurnRight = function (rover) {
        rover.RoverDirection = new North();
    };
    West.prototype.TurnLeft = function (rover) {
        rover.RoverDirection = new South();
    };
    West.prototype.Move = function (rover) {
        rover.RoverPosition.X -= 1;
    };
    return West;
}());
exports.West = West;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJEaXJlY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvUm92ZXJEaXJlY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQUFBO0lBZ0JBLENBQUM7SUFmVyxtQ0FBbUIsR0FBM0I7UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTSx5QkFBUyxHQUFoQixVQUFpQixLQUFZO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixLQUFZO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFZLEtBQVk7UUFDcEIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQXlETyxhQUFLLFNBekRaO0FBRUQ7SUFBQTtJQWdCQSxDQUFDO0lBZlcsbUNBQW1CLEdBQTNCO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0seUJBQVMsR0FBaEIsVUFBaUIsS0FBWTtRQUN6QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUN4QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLG9CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUF1Q2MsYUFBSyxTQXZDbkI7QUFFRDtJQUFBO0lBaUJBLENBQUM7SUFoQlcsa0NBQW1CLEdBQTNCO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sd0JBQVMsR0FBaEIsVUFBaUIsS0FBWTtRQUMxQixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFFdEMsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUN6QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFvQnFCLFlBQUksUUFwQnpCO0FBRUQ7SUFBQTtJQWdCQSxDQUFDO0lBZlcsa0NBQW1CLEdBQTNCO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sd0JBQVMsR0FBaEIsVUFBaUIsS0FBWTtRQUN4QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUN6QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFFMkIsWUFBSSxRQUYvQjtBQUVpQyJ9