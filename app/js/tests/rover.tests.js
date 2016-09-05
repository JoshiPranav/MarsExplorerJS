"use strict";
///reference path="../typings/index.d.ts
var chai_1 = require("chai");
describe("Rover Class", function () {
    it("Should Pass: 1 Should be equal to 1", function () {
        chai_1.expect(1).eql(1);
    });
    it("Should Pass: 1 should not be equal to 2", function () {
        chai_1.expect(1).not.eql(2);
    });
});
