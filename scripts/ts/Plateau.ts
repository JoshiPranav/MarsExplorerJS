import {IPlateauValidator} from "./IPlateauValidator";
import {PlateauValidator} from "./PlateauValidator";

class Plateau {
    public XLength : number;
    public YLength : number;
    private _plateauValidator : IPlateauValidator;

    constructor (xlength : number, ylength : number) {
        this.XLength = xlength;
        this.YLength = ylength;
        this._plateauValidator = new PlateauValidator();
        this._plateauValidator.Validate(this);
    }

}

export {Plateau};