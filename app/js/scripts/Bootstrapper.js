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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vdHN0cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHMvc2NyaXB0cy9Cb290c3RyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELHdCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBRTNDLCtCQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hELHNCQUFvQixTQUFTLENBQUMsQ0FBQTtBQUM5Qix5QkFBdUIscUJBQXFCLENBQUMsQ0FBQTtBQUU3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxJQUFJLG1DQUFnQixFQUFFLENBQUMsQ0FBQztBQUN4RCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksK0JBQWMsRUFBRSxDQUFDLENBQUM7QUFDcEUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXpDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9