///reference path="../typings/index.d.ts
import { expect } from "chai";

describe("Rover Class", () => {

    it("Should Pass: 1 Should be equal to 1", () => {
        expect(1).eql(1);
    });

    it("Should Pass: 1 should not be equal to 2", () => {
        expect(1).not.eql(2);
    });

});
