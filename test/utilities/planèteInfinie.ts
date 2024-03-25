import {PlanèteInterface} from "../../src/domain/planète.interface";
import { Point } from "../../src/domain/point";

export class PlanèteInfinie implements PlanèteInterface {
    EstLibre(position: Point): boolean {
        return true;
    }
    Normaliser(point: Point): Point {
        return point;
    }
}