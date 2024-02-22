import {Rover} from "../src/rover";
import {RoverInterpreter} from "../src/roverInterpreter";
import {RoverBuilder} from "./utilities/roverBuilder";

describe("Commandes simples", ()=> {
    test("La commande A fait avancer le Rover", () => {
        let roverCommandé = RoverBuilder.Default();
        let roverTémoin = RoverBuilder.Default();

        roverCommandé = RoverInterpreter.Interpréter("A", roverCommandé);

        roverTémoin = roverTémoin.Avancer();

        expect(roverCommandé.Position).toEqual(roverTémoin.Position)
    })

    test("La commande R fait reculer le Rover", () => {
        let roverCommandé = RoverBuilder.Default();
        let roverTémoin = RoverBuilder.Default();

        roverCommandé = RoverInterpreter.Interpréter("R", roverCommandé);

        roverTémoin = roverTémoin.Reculer();

        expect(roverCommandé.Position).toEqual(roverTémoin.Position)
    });

    test.each(["RR", "AA", "AR", "RA"])(
        "La commande %s produit le même effet que les commandes simples successivement.",
        (commandeComplexe: string) => {
            let roverTesté = RoverBuilder.Default();
            let roverTémoin = RoverBuilder.Default();

            roverTesté = RoverInterpreter.Interpréter(commandeComplexe, roverTesté);

            for (let commandeSimple of commandeComplexe)
                roverTémoin = RoverInterpreter.Interpréter(commandeSimple, roverTémoin);

            expect(roverTesté.Position).toEqual(roverTémoin.Position)
    });
})