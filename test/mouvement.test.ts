import {Orientation} from "../src/domain/orientation";
import {RoverBuilder} from "./utilities/roverBuilder";

describe('Un Rover peut avancer', () => {
     test.each([1, 2])(
         'ETANT DONNE un Rover orienté Nord ' +
         'QUAND il avance %s fois ' +
         'ALORS sa latitude augmente d\'autant', (n:number) => {
         const roverInitial = RoverBuilder.Default();

         let roverFinal = roverInitial;
         for (let i = 0; i < n; i++)
             roverFinal = roverFinal.Avancer();

         expect(roverFinal.Position.Latitude)
             .toEqual(roverInitial.Position.Latitude + n);
     });

    test.each([1, 2])(
        'ETANT DONNE un Rover orienté Est ' +
        'QUAND il avance %s fois ' +
        'ALORS sa longitude augmente d\'autant', (n:number) => {
            const roverInitial = new RoverBuilder()
                .WithOrientation(Orientation.Est)
                .Build();

            let roverFinal = roverInitial;
            for (let i = 0; i < n; i++)
                roverFinal = roverFinal.Avancer();

            expect(roverFinal.Position.Longitude)
                .toEqual(roverInitial.Position.Longitude + n);
        });

     test.each([1, 2])(
         'ETANT DONNE un Rover orienté Nord' +
         'QUAND il recule %s fois ' +
         'ALORS sa latitude diminue d\'autant', (n:number) => {
             const roverInitial = RoverBuilder.Default();

             let roverFinal = roverInitial;
             for (let i = 0; i < n; i++)
                 roverFinal = roverFinal.Reculer();

             expect(roverFinal.Position.Latitude)
                 .toEqual(roverInitial.Position.Latitude - n);
         });
 });

 describe('Un rover va dans la direction de son orientation', () => {
     describe('Un Rover orienté dans une direction fait l\'inverse d\'un rover orienté à l\'opposé', () =>
     {
         test.each([
             [Orientation.Nord, Orientation.Sud],
             [Orientation.Sud, Orientation.Nord],
             [Orientation.Est, Orientation.Ouest],
             [Orientation.Ouest, Orientation.Est]
         ])(
             "ETANT DONNE un Rover orienté %s " +
             "QUAND il avance " +
             "ALORS il est à la même position qu'un Rover orienté %s qui recule",
             (origine:Orientation, attendue:Orientation) =>
             {
                 let roverTesté = new RoverBuilder()
                     .WithOrientation(origine)
                     .Build();

                 let roverTémoin = new RoverBuilder()
                     .WithOrientation(attendue)
                     .Build();

                 roverTesté = roverTesté.Avancer();
                 roverTémoin = roverTémoin.Reculer();

                 expect(roverTesté.Position).toEqual(roverTémoin.Position);
             });
     });
 });