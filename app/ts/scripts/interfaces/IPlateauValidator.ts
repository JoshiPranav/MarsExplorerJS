import {Plateau} from "../entities/Plateau";

interface IPlateauValidator {
    Validate(plateau: Plateau): void;
}

export {IPlateauValidator};
