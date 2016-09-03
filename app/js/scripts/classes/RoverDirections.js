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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJEaXJlY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHMvc2NyaXB0cy9jbGFzc2VzL1JvdmVyRGlyZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFBQTtJQWdCQSxDQUFDO0lBZlcsbUNBQW1CLEdBQTNCO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0seUJBQVMsR0FBaEIsVUFBaUIsS0FBWTtRQUN4QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUN4QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLG9CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUF3RE8sYUFBSyxTQXhEWjtBQUVEO0lBQUE7SUFnQkEsQ0FBQztJQWZXLG1DQUFtQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVNLHlCQUFTLEdBQWhCLFVBQWlCLEtBQVk7UUFDekIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSx3QkFBUSxHQUFmLFVBQWdCLEtBQVk7UUFDeEIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBc0NjLGFBQUssU0F0Q25CO0FBRUQ7SUFBQTtJQWdCQSxDQUFDO0lBZlcsa0NBQW1CLEdBQTNCO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sd0JBQVMsR0FBaEIsVUFBaUIsS0FBWTtRQUMxQixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUN6QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFvQnFCLFlBQUksUUFwQnpCO0FBRUQ7SUFBQTtJQWdCQSxDQUFDO0lBZlcsa0NBQW1CLEdBQTNCO1FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sd0JBQVMsR0FBaEIsVUFBaUIsS0FBWTtRQUN4QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUN6QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFFMkIsWUFBSSxRQUYvQjtBQUVpQyJ9