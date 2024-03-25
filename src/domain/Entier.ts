export class Entier {
    private readonly value: number;

    public constructor(value:number) {
        if(value <0) throw new Error();
        if(value.int) throw new Error();

    }

}