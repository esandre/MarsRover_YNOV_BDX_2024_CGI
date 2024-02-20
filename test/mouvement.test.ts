import {Rover} from "../src/rover";
import {Orientation} from "../src/orientation";
import {Point} from "../src/point";

describe('Un Rover peut avancer', () => {
     test.each([1, 2])(
         'ETANT DONNE un Rover ' +
         'QUAND il avance %s fois ' +
         'ALORS sa latitude augmente d\'autant', (n:number) => {
         const roverInitial = new Rover();

         let roverFinal = roverInitial;
         for (let i = 0; i < n; i++)
             roverFinal = roverFinal.Avancer();

         expect(roverFinal.Position.Latitude)
             .toEqual(roverInitial.Position.Latitude + n);
     });

     test.each([1, 2])(
         'ETANT DONNE un Rover ' +
         'QUAND il recule %s fois ' +
         'ALORS sa latitude diminue d\'autant', (n:number) => {
             const roverInitial = new Rover();

             let roverFinal = roverInitial;
             for (let i = 0; i < n; i++)
                 roverFinal = roverFinal.Reculer();

             expect(roverFinal.Position.Latitude)
                 .toEqual(roverInitial.Position.Latitude - n);
         });
 });

 describe('Un rover va dans la direction de son orientation', () => {
     describe('Un Rover orienté Sud fait l\'inverse d\'un rover orienté Nord', () =>
     {
         test("ETANT DONNE un Rover orienté Sud " +
             "QUAND il avance " +
             "ALORS il est à la même position qu'un Rover orienté Nord qui recule", () =>
         {
             let roverTesté = new Rover(new Point(), Orientation.Sud);
             let roverTémoin = new Rover(new Point(), Orientation.Nord);

             roverTesté = roverTesté.Avancer();
             roverTémoin = roverTémoin.Reculer();

             expect(roverTesté.Position).toEqual(roverTémoin.Position);
         });

         test("ETANT DONNE un Rover orienté Sud " +
             "QUAND il recule " +
             "ALORS il est à la même position qu'un Rover orienté Nord qui avance", () =>
         {
             let roverTesté = new Rover(new Point(), Orientation.Sud);
             let roverTémoin = new Rover(new Point(), Orientation.Nord);

             roverTesté = roverTesté.Reculer();
             roverTémoin = roverTémoin.Avancer();

             expect(roverTesté.Position).toEqual(roverTémoin.Position);
         });
     });
 });