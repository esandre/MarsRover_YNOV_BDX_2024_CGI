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

        const roverTesté = RoverInterpreter.Deserialize(str, planèteCommune);

        expect(roverTesté).toEqual(roverTémoin);
    })

    test.each([
        [0, 0, Orientation.Nord, "0,0,N"],
        [0, 0, Orientation.Sud, "0,0,S"],
        [1, 0, Orientation.Nord, "1,0,N"],
    ])
    ("A un Rover de latitude %s, de longitude %s et orienté %s, correspond une string %s",
        (latitude, longitude, orientation, strAttendu) => {
            const planèteCommune = new PlanèteInfinie();
            const rover = new Rover(
                new Point(latitude, longitude),
                orientation,
                planèteCommune);

            const representation = RoverInterpreter.Serialize(rover);
            expect(representation).toEqual(strAttendu);
        })
});