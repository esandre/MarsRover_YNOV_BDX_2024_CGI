import {Rover} from "./rover";

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
}