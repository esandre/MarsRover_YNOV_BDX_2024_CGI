import {Point} from "./point";

export class Orientation {
    public static readonly Nord: Orientation = new Orientation(false);
    public static readonly Sud: Orientation = new Orientation(true);

    private readonly estInversé: boolean;

    private constructor(estInversé: boolean) {
        this.estInversé = estInversé;
    }

    Déplacer(position: Point) {
        if(this.estInversé) return position.DécrémenterLatitude();
        return position.IncrémenterLatitude();
    }

    Opposée() {
        if(this == Orientation.Nord) return Orientation.Sud;
        return Orientation.Nord;
    }
}