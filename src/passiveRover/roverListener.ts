import {RoverInterface} from "../domain/rover.interface";
import {RoverInterpreter} from "../domain/roverInterpreter";

export interface PassiveNetworkInterface {
    RegisterCallback(callback: (command: string) => string)
}

export class RoverListener {
    private _roverToMove: RoverInterface;

    public constructor(roverToMove: RoverInterface, networkInterface: PassiveNetworkInterface) {
        this._roverToMove = roverToMove;

        networkInterface.RegisterCallback(this.ReceiveAndMoveRover)
    }

    private ReceiveAndMoveRover(command: string): string {
        this._roverToMove = RoverInterpreter.Interpréter(command, this._roverToMove);
        return RoverInterpreter.Serialize(this._roverToMove);
    }
}