import {Plateau} from "../entities/Plateau";

interface IPlateauValidator {
    IsValid(plateau: Plateau): void;
}

export {IPlateauValidator};
