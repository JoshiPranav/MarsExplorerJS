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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGVhdS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RzL3NjcmlwdHMvZW50aXRpZXMvUGxhdGVhdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFLSSxpQkFBYSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsU0FBNkI7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVPLGVBQU8sV0FGZDtBQUVnQiJ9