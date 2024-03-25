import {Rover} from "./rover";
import {Point} from "./point";
import {Orientation} from "./orientation";
import {PlanèteInterface} from "./planète.interface";

export class RoverInterpreter {
    public static Interpréter(commande: string, rover: Rover): Rover {
        for (let lettre of commande) {
            if(lettre === "A")
                rover = rover.Avancer();
            else
                rover = rover.Reculer();
        }

        return rover;
    }

    public static Deserialize(str: string, planète: PlanèteInterface): Rover {
        const orientation = str.endsWith('S') ? Orientation.Sud : Orientation.Nord;
        const latitude = str.startsWith('1') ? 1 : 0;

        return new Rover(new Point(latitude, 0), orientation, planète);
    }

    public static Serialize(rover: Rover): string {
        return rover.Position.Latitude + ','
            + rover.Position.Longitude + ','
            + rover.Orientation.toString().substring(0, 1)
    }
}