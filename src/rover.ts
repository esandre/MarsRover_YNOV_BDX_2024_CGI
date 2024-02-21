import {Point} from "./point";
import {Orientation} from "./orientation";
import {PlanèteToroïdale} from "./planèteToroïdale";
import {PlanèteInfinie} from "../test/utilities/planèteInfinie";

export class Rover {
    public readonly Position : Point;
    public readonly Orientation : Orientation;
    private readonly _planète: PlanèteInfinie;

    public constructor(position: Point,
                       orientation: Orientation,
                       planète: PlanèteInfinie){
        this.Position = planète.Normaliser(position);
        this.Orientation = orientation;
        this._planète = planète;
    }

    public Avancer(): Rover {
        let nouvellePosition = this.Orientation.Déplacer(this.Position)
        return new Rover(nouvellePosition, this.Orientation, this._planète);
    }

    public Reculer(): Rover{
        let nouvellePosition = this.Orientation.Opposée().Déplacer(this.Position)
        return new Rover(nouvellePosition, this.Orientation, this._planète);
    }
}