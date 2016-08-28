import {IPlateauValidator} from "./IPlateauValidator";

class Plateau {
    public XLength : number;
    public YLength : number;
    private _validator : IPlateauValidator;

    constructor (xlength : number, ylength : number, validator : IPlateauValidator) {
        this.XLength = xlength;
        this.YLength = ylength;
        this._validator = validator;
        this._validator.Validate(this);
    }

}

export {Plateau};