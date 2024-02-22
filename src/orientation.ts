import {Point} from "./point";

export class Orientation {
    public static readonly Nord: Orientation = new Orientation(false, false);
    public static readonly Sud: Orientation = new Orientation(true, false);
    public static readonly Est: Orientation = new Orientation(false, true);
    public static readonly Ouest: Orientation = new Orientation(true, true);

    private readonly estInversé: boolean;
    private readonly estLongitudinal: boolean;

    private constructor(estInversé: boolean, estLongitudinal: boolean) {
        this.estInversé = estInversé;
        this.estLongitudinal = estLongitudinal;
    }

    Déplacer(position: Point) {
        if(this.estLongitudinal) {
            if(this.estInversé) return position.DécrémenterLongitude()
            else return position.IncrémenterLongitude();
        }

        if(this.estInversé) return position.DécrémenterLatitude();
        return position.IncrémenterLatitude();
    }

    Opposée() {
        if(this == Orientation.Nord)
            return Orientation.Sud;
        if(this == Orientation.Ouest)
            return Orientation.Est;
        if(this == Orientation.Est)
            return Orientation.Ouest;
        return Orientation.Nord;
    }

    public toString(){
        if(this == Orientation.Nord)
            return "Nord";
        if(this == Orientation.Ouest)
            return "Ouest";
        if(this == Orientation.Est)
            return "Est";
        return "Sud";
    }
}