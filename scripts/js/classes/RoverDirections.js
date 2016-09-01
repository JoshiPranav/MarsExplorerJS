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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm92ZXJEaXJlY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvY2xhc3Nlcy9Sb3ZlckRpcmVjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBQUE7SUFnQkEsQ0FBQztJQWZXLG1DQUFtQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVNLHlCQUFTLEdBQWhCLFVBQWlCLEtBQVk7UUFDeEIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx3QkFBUSxHQUFmLFVBQWdCLEtBQVk7UUFDeEIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBd0RPLGFBQUssU0F4RFo7QUFFRDtJQUFBO0lBZ0JBLENBQUM7SUFmVyxtQ0FBbUIsR0FBM0I7UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTSx5QkFBUyxHQUFoQixVQUFpQixLQUFZO1FBQ3pCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixLQUFZO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFZLEtBQVk7UUFDcEIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQXNDYyxhQUFLLFNBdENuQjtBQUVEO0lBQUE7SUFnQkEsQ0FBQztJQWZXLGtDQUFtQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLEtBQVk7UUFDMUIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSx1QkFBUSxHQUFmLFVBQWdCLEtBQVk7UUFDekIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxtQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBb0JxQixZQUFJLFFBcEJ6QjtBQUVEO0lBQUE7SUFnQkEsQ0FBQztJQWZXLGtDQUFtQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLEtBQVk7UUFDeEIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSx1QkFBUSxHQUFmLFVBQWdCLEtBQVk7UUFDekIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxtQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBRTJCLFlBQUksUUFGL0I7QUFFaUMifQ==