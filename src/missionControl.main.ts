import {WebsocketImplementation} from "./webSocket/websocketImplementation";
import {RoverProxy} from "./missionControl/roverProxy";
import {planète} from "./missionConfiguration";

const iface = new WebsocketImplementation();
const controller = new RoverProxy(planète, iface);

// Ecouter la console et faire les actions
controller.Avancer()