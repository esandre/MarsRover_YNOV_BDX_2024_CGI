import {PlanèteInterface} from "../../src/planète.interface";
import { Point } from "../../src/point";

export class PlanèteInfinie implements PlanèteInterface {
    Normaliser(point: Point): Point {
        return point;
    }
}