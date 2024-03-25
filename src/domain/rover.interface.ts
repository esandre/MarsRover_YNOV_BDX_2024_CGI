import {Point} from "./point";
import {Orientation} from "./orientation";

export interface RoverInterface {
    Position : Point;
    Orientation : Orientation;
    Avancer(): RoverInterface;
    Reculer(): RoverInterface;
}