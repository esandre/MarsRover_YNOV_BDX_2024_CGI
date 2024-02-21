import {Rover} from "../src/rover";
import {RoverInterpreter} from "../src/roverInterpreter";
import {RoverBuilder} from "./utilities/roverBuilder";

describe("Commandes simples", ()=> {
    test("La commande A fait avancer le Rover", () => {
        let roverCommandé = RoverBuilder.Default();
        let roverTémoin = RoverBuilder.Default();

        const interpreter = new RoverInterpreter(roverCommandé);
        roverCommandé = interpreter.Interpréter("A");

        roverTémoin = roverTémoin.Avancer();

        expect(roverCommandé.Position).toEqual(roverTémoin.Position)
    })

    test("La commande R fait reculer le Rover", () => {
        let roverCommandé = RoverBuilder.Default();
        let roverTémoin = RoverBuilder.Default();

        const interpreter = new RoverInterpreter(roverCommandé);
        roverCommandé = interpreter.Interpréter("R");

        roverTémoin = roverTémoin.Reculer();

        expect(roverCommandé.Position).toEqual(roverTémoin.Position)
    });

    test("La commande RR fait reculer le Rover 2 fois", () => {
        let roverCommandé = RoverBuilder.Default();
        let roverTémoin = RoverBuilder.Default();

        const interpreter = new RoverInterpreter(roverCommandé);
        roverCommandé = interpreter.Interpréter("RR");

        roverTémoin = roverTémoin.Reculer().Reculer();

        expect(roverCommandé.Position).toEqual(roverTémoin.Position)
    });
})