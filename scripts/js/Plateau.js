"use strict";
var Plateau = (function () {
    function Plateau(xlength, ylength) {
        this.xLength = xlength;
        this.yLength = ylength;
    }
    Plateau.prototype.IsValidPosition = function (x, y) {
        if (x > this.xLength || y > this.yLength) {
            return false;
        }
        return true;
    };
    return Plateau;
}());
exports.Plateau = Plateau;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGVhdS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL1BsYXRlYXUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0ksaUJBQWEsT0FBZ0IsRUFBRSxPQUFnQjtRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBS00saUNBQWUsR0FBdEIsVUFBdUIsQ0FBUyxFQUFFLENBQVM7UUFDdkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQUVPLGVBQU8sV0FGZDtBQUVnQiJ9