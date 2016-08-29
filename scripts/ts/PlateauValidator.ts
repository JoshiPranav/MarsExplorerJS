import {Plateau} from "./Plateau";
import {IPlateauValidator} from "./IPlateauValidator";
import {Constants} from "./Constants";

class PlateauValidator implements IPlateauValidator {
    public Validate(plateau : Plateau) : void {
        if(plateau.XLength < 0 || plateau.YLength < 0) {
             console.log(Constants.InValidPlateauDimensions);
         }
    }
}

export{PlateauValidator};