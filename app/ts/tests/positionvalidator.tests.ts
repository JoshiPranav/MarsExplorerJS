///reference path="../typings/index.d.ts
import { expect } from "chai";
import {Position} from "../scripts/entities/Position";
import {Plateau} from "../scripts/entities/Plateau";
import {PositionValidator} from "../scripts/classes/PositionValidator";

describe("Position Validator Tests", () => {

    it("Should be a valid position, so should return true", () => {
        let position = new Position(5, 5);
        let plateau = new Plateau(20, 20);

        let positionValidator = new PositionValidator();
        let isValid = positionValidator.IsValidPosition(position, plateau);

        expect(isValid).equals(true);
    });

    it("Should not be a valid position, so should return false", () => {
        let position = new Position(21, 5);
        let plateau = new Plateau(20, 20);

        let positionValidator = new PositionValidator();
        let isValid = positionValidator.IsValidPosition(position, plateau);

        expect(isValid).equals(false);
    });
});
