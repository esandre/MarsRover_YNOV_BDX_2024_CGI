import {PlanèteToroïdale} from "../src/planèteToroïdale";
import {RoverBuilder} from "./utilities/roverBuilder";

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
});