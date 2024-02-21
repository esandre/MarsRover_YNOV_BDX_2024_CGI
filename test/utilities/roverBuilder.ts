import {Rover} from "../../src/rover";
import {Orientation} from "../../src/orientation";
import {Point} from "../../src/point";
import {PlanèteInfinie} from "./planèteInfinie";
import {PlanèteInterface} from "../../src/planète.interface";

export class RoverBuilder {
    public static Default(): Rover {
        return new RoverBuilder().Build();
    }

    private _orientation: Orientation = Orientation.Nord;
    private _planète: PlanèteInterface = new PlanèteInfinie();

    public WithOrientation(orientation: Orientation): RoverBuilder {
        this._orientation = orientation;
        return this;
    }

    public WithPlanète(planète: PlanèteInterface): RoverBuilder {
        this._planète = planète;
        return this;
    }

    public Build() : Rover{
        return new Rover(new Point(), this._orientation, this._planète);
    }
}