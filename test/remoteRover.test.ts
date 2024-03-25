import {RoverBuilder} from "./utilities/roverBuilder";
import {RoverInterpreter} from "../src/domain/roverInterpreter";
import {PlanèteInfinie} from "./utilities/planèteInfinie";

describe('Rover piloté par des commandes', () => {
    test("Equivalence pilotage normal et par commande", () => {
        const planète = new PlanèteInfinie();
        const builder = new RoverBuilder().WithPlanète(planète);
        const roverTémoin = builder.Build();

        const roverTesté = RoverInterpreter
            .Deserialize(RoverInterpreter
                .Serialize(roverTémoin), planète);

        expect(roverTesté).toEqual(roverTémoin);
    });
});