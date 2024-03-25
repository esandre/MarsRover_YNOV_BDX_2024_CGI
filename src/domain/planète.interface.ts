import {Point} from "./point";

export interface PlanèteInterface {
    Normaliser(point: Point): Point;
    EstLibre(position: Point): boolean;
}