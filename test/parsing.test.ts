import {Orientation} from "../src/domain/orientation";
import {Rover} from "../src/domain/rover";
import {Point} from "../src/domain/point";
import {PlanèteInfinie} from "./utilities/planèteInfinie";
import {RoverInterpreter} from "../src/domain/roverInterpreter";

describe('Rover Parser', () => {
    test.each([
        ["0,0,N", 0, 0, Orientation.Nord],
        ["0,0,S", 0, 0, Orientation.Sud],
        ["1,0,N", 1, 0, Orientation.Nord],
    ])
    ("La String %s correspond à un Rover de latitude %s, de longitude %s et orienté %s",
        (str, latitudeAttendue, longitudeAttendue, orientationAttendue) => {
        const planèteCommune = new PlanèteInfinie();
        const roverTémoin = new Rover(
            new Point(latitudeAttendue, longitudeAttendue),
            orientationAttendue,
            planèteCommune);

        const roverTesté = RoverInterpreter.Factory(str, planèteCommune);

        expect(roverTesté).toEqual(roverTémoin);
    })
});