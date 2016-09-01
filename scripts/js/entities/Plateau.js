"use strict";
var Plateau = (function () {
    function Plateau(xlength, ylength, validator) {
        this.XLength = xlength;
        this.YLength = ylength;
        this._validator = validator;
        this._validator.Validate(this);
    }
    return Plateau;
}());
exports.Plateau = Plateau;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGVhdS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL2VudGl0aWVzL1BsYXRlYXUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBS0ksaUJBQWEsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLFNBQTZCO1FBQzFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFFTyxlQUFPLFdBRmQ7QUFFZ0IifQ==