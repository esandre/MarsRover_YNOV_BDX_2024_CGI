import {RoverInterface} from "../domain/rover.interface";
import {RoverInterpreter} from "../domain/roverInterpreter";
import {PlanèteInterface} from "../domain/planète.interface";

export interface ActiveNetworkInterface {
    Transceive(str: string): string;
}

export class RoverProxy implements RoverInterface {
    private readonly planèteCommune: PlanèteInterface;
    private _commandChannel: ActiveNetworkInterface;

    public constructor(planèteCommune: PlanèteInterface,
                       commandChannel: ActiveNetworkInterface) {
        this.planèteCommune = planèteCommune;
        this._commandChannel = commandChannel;
    }

    Avancer(): RoverInterface {
        let request = "A"
        let response = this._commandChannel.Transceive(request);
        return RoverInterpreter.Deserialize(response, this.planèteCommune);
    }
    Reculer(): RoverInterface {
        let request = "R"
        let response = this._commandChannel.Transceive(request);
        return RoverInterpreter.Deserialize(response, this.planèteCommune);
    }
}