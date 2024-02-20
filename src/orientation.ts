import {Point} from "./point";

export class Orientation {
    public static readonly Nord: Orientation = new Orientation(false, false);
    public static readonly Sud: Orientation = new Orientation(true, false);
    public static readonly Est: Orientation = new Orientation(false, true);

    private readonly estInversé: boolean;
    private readonly estLongitudinal: boolean;

    private constructor(estInversé: boolean, estLongitudinal: boolean) {
        this.estInversé = estInversé;
        this.estLongitudinal = estLongitudinal;
    }

    Déplacer(position: Point) {
        if(this.estLongitudinal) return position.IncrémenterLongitude(); // TODO : pas de cas Ouest
        if(this.estInversé) return position.DécrémenterLatitude();
        return position.IncrémenterLatitude();
    }

    Opposée() {
        if(this == Orientation.Nord) return Orientation.Sud;
        return Orientation.Nord;
    }
}