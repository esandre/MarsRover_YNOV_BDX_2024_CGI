import {Rover} from "./domain/rover";
import {Point} from "./domain/point";
import {Orientation} from "./domain/orientation";
import {RoverListener} from "./passiveRover/roverListener";
import {WebsocketImplementation} from "./webSocket/websocketImplementation";
import {planète} from "./missionConfiguration";

let rover = new Rover(new Point(0, 1), Orientation.Nord, planète)

const iface = new WebsocketImplementation();
const listener = new RoverListener(rover, iface);

iface.StartListening();