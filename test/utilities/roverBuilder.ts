import {Rover} from "../../src/rover";
import {Orientation} from "../../src/orientation";
import {PlanèteToroïdale} from "../../src/planèteToroïdale";
import {Point} from "../../src/point";

export class RoverBuilder {
    public static Default(): Rover {
        return new RoverBuilder().Build();
    }

    private _orientation: Orientation = Orientation.Nord;

    public WithOrientation(orientation: Orientation): RoverBuilder {
        this._orientation = orientation;
        return this;
    }

    public Build() : Rover{
        return new Rover(new Point(), this._orientation, new PlanèteToroïdale(1));
    }
}