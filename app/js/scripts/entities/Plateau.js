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
