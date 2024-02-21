import {Point} from "./point";
import {PlanèteInterface} from "./planète.interface";

export class PlanèteToroïdale implements PlanèteInterface {
    private _taille: number;
    constructor(taille: number) {
        this._taille = taille;
    }

    public Normaliser(point: Point): Point{
        return new Point();
    }
}