import {Rover} from "./rover";

export class RoverInterpreter {
    private _roverCommandé: Rover;
    constructor(roverCommandé: Rover) {
        this._roverCommandé = roverCommandé;
    }

    public Interpréter(commande: string): Rover {
        for (let lettre of commande) {
            if(lettre === "A")
                this._roverCommandé = this._roverCommandé.Avancer();
            else
                this._roverCommandé = this._roverCommandé.Reculer();
        }

        return this._roverCommandé;
    }
}