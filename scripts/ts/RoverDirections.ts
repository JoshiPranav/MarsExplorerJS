import {IRoverDirection} from "./IRoverDirection";
import {Rover} from "./Rover";

class North implements IRoverDirection {
    public  DirectionIdentifier() : string {
        return "North";
    }

    public TurnRight(rover: Rover) : void {
         rover.RoverDirection = new East();
    }

    public TurnLeft(rover: Rover) : void {
        rover.RoverDirection = new West();
    }

    public Move(rover: Rover) : void {
        rover.RoverPosition.Y += 1;
    }
}

class South implements IRoverDirection {
    public  DirectionIdentifier() : string {
        return "South";
    }

    public TurnRight(rover: Rover) : void {
        rover.RoverDirection = new West();
    }

    public TurnLeft(rover: Rover) : void {
        rover.RoverDirection = new East();
    }

    public Move(rover: Rover) : void {
        rover.RoverPosition.Y -= 1;
    }
}

class East implements IRoverDirection {
    public  DirectionIdentifier() : string {
        return "East";
    }

    public TurnRight(rover: Rover) : void {
       rover.RoverDirection = new South();
    }

    public TurnLeft(rover: Rover) : void {
       rover.RoverDirection = new North();
    }

    public Move(rover: Rover) : void {
        rover.RoverPosition.X += 1;
    }
}

class West implements IRoverDirection {
    public  DirectionIdentifier() : string {
        return "West";
    }

    public TurnRight(rover: Rover) : void {
         rover.RoverDirection = new North();
    }

    public TurnLeft(rover: Rover) : void {
       rover.RoverDirection = new South();
    }

    public Move(rover: Rover) : void {
        rover.RoverPosition.X -= 1;
    }
}

export {North, South, East, West};