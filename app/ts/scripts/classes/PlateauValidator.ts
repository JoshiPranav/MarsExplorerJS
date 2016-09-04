import {Plateau} from "../entities/Plateau";
import {IPlateauValidator} from "../interfaces/IPlateauValidator";
import {Constants} from "../helpers/Constants";

class PlateauValidator implements IPlateauValidator {
    public Validate(plateau: Plateau): void {
        if (plateau.XLength < 0 || plateau.YLength < 0) {
             console.log(Constants.InValidPlateauDimensions);
         }
    }
}

export{PlateauValidator};
