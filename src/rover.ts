import {Point} from "./point";
import {Orientation} from "./orientation";
import {PlanèteInterface} from "./planète.interface";

export class Rover {
    public readonly Position : Point;
    public readonly Orientation : Orientation;
    private readonly _planète: PlanèteInterface;

    public constructor(position: Point,
                       orientation: Orientation,
                       planète: PlanèteInterface){
        this.Position = planète.Normaliser(position);
        this.Orientation = orientation;
        this._planète = planète;
    }

    public Avancer(): Rover {
        let nouvellePosition = this.Orientation.Déplacer(this.Position);
        const voieLibre = this._planète.EstLibre(nouvellePosition);

        if(voieLibre)
            return new Rover(nouvellePosition, this.Orientation, this._planète);
        else return this;
    }

    public Reculer(): Rover{
        let nouvellePosition = this.Orientation.Opposée().Déplacer(this.Position)
        return new Rover(nouvellePosition, this.Orientation, this._planète);
    }
}