import {Plateau} from "../entities/Plateau";
import {IPlateauValidator} from "../interfaces/IPlateauValidator";

class PlateauValidator implements IPlateauValidator {
    public IsValid(plateau: Plateau): boolean {
        if (plateau.XLength < 0 || plateau.YLength < 0) {
             return false;
         }
         return true;
    }
}

export{PlateauValidator};
