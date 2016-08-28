"use strict";
var Constants_1 = require("./Constants");
var Plateau = (function () {
    function Plateau(xlength, ylength) {
        this.xLength = xlength;
        this.yLength = ylength;
    }
    Plateau.prototype.InitRover = function (rover) {
        this.Rover = rover;
        if (!this.IsValidRoverPosition(rover.RoverPosition.X, rover.RoverPosition.Y)) {
            throw Constants_1.Constants.InvalidRoverPosition;
        }
    };
    Plateau.prototype.MoveRover = function (commands) {
    };
    Plateau.prototype.IsValidRoverPosition = function (x, y) {
        if (x > this.xLength || y > this.yLength) {
            return false;
        }
        return true;
    };
    return Plateau;
}());
exports.Plateau = Plateau;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGVhdS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL1BsYXRlYXUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDBCQUF3QixhQUFhLENBQUMsQ0FBQTtBQUV0QztJQUNJLGlCQUFhLE9BQWdCLEVBQUUsT0FBZ0I7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQU1NLDJCQUFTLEdBQWhCLFVBQWlCLEtBQWE7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsTUFBTSxxQkFBUyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRU0sMkJBQVMsR0FBaEIsVUFBaUIsUUFBbUI7SUFFcEMsQ0FBQztJQUVNLHNDQUFvQixHQUEzQixVQUE0QixDQUFTLEVBQUUsQ0FBUztRQUM1QyxFQUFFLENBQUEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUFFTyxlQUFPLFdBRmQ7QUFFZ0IifQ==