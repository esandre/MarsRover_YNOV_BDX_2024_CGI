import {PlanèteInterface} from "./planète.interface";
import {Point} from "./point";

export class PlanèteAvecObstacle implements PlanèteInterface {
    private _planète: PlanèteInterface;
    private _positionObstacle: Point;

    constructor(planète: PlanèteInterface, positionObstacle: Point) {
        this._planète = planète;
        this._positionObstacle = positionObstacle;
    }

    EstLibre(position: Point): boolean {
        if(position.Longitude != this._positionObstacle.Longitude)
            return true;

        return position.Latitude != this._positionObstacle.Latitude;
    }

    Normaliser(point: Point): Point {
        return this._planète.Normaliser(point);
    }
}