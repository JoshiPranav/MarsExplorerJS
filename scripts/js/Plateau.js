"use strict";
var PlateauValidator_1 = require("./PlateauValidator");
var Plateau = (function () {
    function Plateau(xlength, ylength) {
        this.XLength = xlength;
        this.YLength = ylength;
        this._plateauValidator = new PlateauValidator_1.PlateauValidator();
        this._plateauValidator.Validate(this);
    }
    return Plateau;
}());
exports.Plateau = Plateau;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGVhdS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL1BsYXRlYXUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlDQUErQixvQkFBb0IsQ0FBQyxDQUFBO0FBRXBEO0lBS0ksaUJBQWEsT0FBZ0IsRUFBRSxPQUFnQjtRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVPLGVBQU8sV0FGZDtBQUVnQiJ9