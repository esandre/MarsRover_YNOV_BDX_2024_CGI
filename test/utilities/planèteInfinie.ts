import {PlanèteInterface} from "../../src/planète.interface";
import { Point } from "../../src/point";

export class PlanèteInfinie implements PlanèteInterface {
    EstLibre(position: Point): boolean {
        return true;
    }
    Normaliser(point: Point): Point {
        return point;
    }
}