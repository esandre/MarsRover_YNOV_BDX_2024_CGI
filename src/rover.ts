import {Point} from "./point";
import {Orientation} from "./orientation";

export class Rover {
    public readonly Position : Point;
    public readonly Orientation : Orientation;

    public constructor(position: Point = new Point(),
                       orientation: Orientation = Orientation.Nord){
        this.Position = position;
        this.Orientation = orientation;
    }

    public Avancer(): Rover {
        let nouvellePosition = this.Orientation.Déplacer(this.Position)
        return new Rover(nouvellePosition, this.Orientation);
    }

    public Reculer(): Rover{
        let nouvellePosition = this.Orientation.Opposée().Déplacer(this.Position)
        return new Rover(nouvellePosition, this.Orientation);
    }
}