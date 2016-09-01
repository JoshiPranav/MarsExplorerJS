"use strict";
var PlateauValidator_1 = require("./classes/PlateauValidator");
var Plateau_1 = require("./entities/Plateau");
var RoverValidator_1 = require("./classes/RoverValidator");
var Rover_1 = require("./Rover");
var Position_1 = require("./entities/Position");
var plateau = new Plateau_1.Plateau(20, 20, new PlateauValidator_1.PlateauValidator());
var position = new Position_1.Position(5, 5);
var rover = new Rover_1.Rover(plateau, position, "N", new RoverValidator_1.RoverValidator());
var commands = ["L", "L", "M", "R", "M", "M"];
var state = rover.Execute(commands);
console.log(state);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vdHN0cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvQm9vdHN0cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpQ0FBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCx3QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQUUzQywrQkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxzQkFBb0IsU0FBUyxDQUFDLENBQUE7QUFDOUIseUJBQXVCLHFCQUFxQixDQUFDLENBQUE7QUFFN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDLENBQUM7QUFDeEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLCtCQUFjLEVBQUUsQ0FBQyxDQUFDO0FBRXBFLElBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMifQ==