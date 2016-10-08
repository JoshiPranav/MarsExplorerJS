///reference path="../typings/index.d.ts
import { expect } from "chai";
import {Plateau} from "../scripts/entities/Plateau";
import {PlateauValidator} from "../scripts/classes/PlateauValidator";

describe("Plateau Validator Tests", () => {
    it("Should be a valid plateau, so should return true", () => {
        let plateau = new Plateau(20, 20);

        let plateauValidator = new PlateauValidator();
        let isValid = plateauValidator.IsValid(plateau);

        expect(isValid).equals(true);
    });

    it("Should not be a valid plateau, so should return false", () => {
        let plateau = new Plateau(-2, -3);

        let plateauValidator = new PlateauValidator();
        let isValid = plateauValidator.IsValid(plateau);

        expect(isValid).equals(false);
    });
});
