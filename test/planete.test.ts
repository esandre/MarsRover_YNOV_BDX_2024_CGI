import {PlanèteToroïdale} from "../src/planèteToroïdale";
import {RoverBuilder} from "./utilities/roverBuilder";
import {PlanèteInfinie} from "./utilities/planèteInfinie";
import {Point} from "../src/point";
import {Orientation} from "../src/orientation";
import {Rover} from "../src/rover";
import {PlanèteAvecObstacle} from "../src/planèteAvecObstacle";

describe("Géométrie toroïdale", () => {
   test("ETANT DONNE un Rover sur une planète toroïdale de taille 1 " +
       "QUAND il avance " +
        "ALORS ses coordonnées sont les mêmes qu'un rover n'ayant pas bougé", () => {
       const planète = new PlanèteToroïdale(1);

       let roverTémoin = new RoverBuilder().WithPlanète(planète).Build();
       let roverTesté = new RoverBuilder().WithPlanète(planète).Build();

       roverTesté = roverTesté.Avancer();

       expect(roverTesté.Position).toEqual(roverTémoin.Position);
   })

    test("ETANT DONNE un Rover sur une planète toroïdale de taille 2 " +
        "QUAND il avance 1 fois" +
        "ALORS ses coordonnées ne sont pas les mêmes qu'un rover n'ayant pas bougé", () => {
        const planète = new PlanèteToroïdale(2);

        let roverTémoin = new RoverBuilder().WithPlanète(planète).Build();
        let roverTesté = new RoverBuilder().WithPlanète(planète).Build();

        roverTesté = roverTesté.Avancer();

        expect(roverTesté.Position).not.toEqual(roverTémoin.Position);
    })

    test("ETANT DONNE un Rover sur une planète ayant un obstacle devant lui " +
        "QUAND il avance 1 fois" +
        "ALORS ses coordonnées sont les mêmes qu'un rover n'ayant pas bougé", () => {
        const planèteInfinie = new PlanèteInfinie();
        const positionRover = new Point(0, 0);
        const positionObstacle = new Point(1, 0);
        const planèteAvecObstacle =
            new PlanèteAvecObstacle(planèteInfinie, positionObstacle);
        const orientationRover = Orientation.Nord;

        let builder = new RoverBuilder()
            .WithOrientation(orientationRover)
            .WithStartingPosition(positionRover)
            .WithPlanète(planèteAvecObstacle);

        let roverTémoin = builder.Build();
        let roverTesté = builder.Build();

        roverTesté = roverTesté.Avancer();

        expect(roverTesté.Position).toEqual(roverTémoin.Position);
    })
});