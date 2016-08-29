"use strict";
var PlateauValidator_1 = require("./PlateauValidator");
var Plateau_1 = require("./Plateau");
var RoverValidator_1 = require("./RoverValidator");
var Rover_1 = require("./Rover");
var Position_1 = require("./Position");
var plateau = new Plateau_1.Plateau(20, 20, new PlateauValidator_1.PlateauValidator());
var position = new Position_1.Position(5, 5);
var rover = new Rover_1.Rover(plateau, position, "N", new RoverValidator_1.RoverValidator());
var commands = ["L", "L", "M", "R", "M", "M"];
var state = rover.Execute(commands);
console.log(state);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vdHN0cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvQm9vdHN0cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpQ0FBK0Isb0JBQW9CLENBQUMsQ0FBQTtBQUNwRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFFbEMsK0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFDaEQsc0JBQW9CLFNBQVMsQ0FBQyxDQUFBO0FBQzlCLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtBQUVwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxJQUFJLG1DQUFnQixFQUFFLENBQUMsQ0FBQztBQUN4RCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksK0JBQWMsRUFBRSxDQUFDLENBQUM7QUFFcEUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9