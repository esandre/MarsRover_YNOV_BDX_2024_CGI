export class Point {
    readonly Latitude: number = 0;
    readonly Longitude: number = 0;

    public constructor(latitude: number = 0, longitude: number = 0) {
        this.Latitude = latitude;
        this.Longitude = longitude;
    }

    IncrémenterLatitude() {
        return new Point(this.Latitude + 1); // TODO : longitude remise à zéro
    }

    DécrémenterLatitude() {
        return new Point(this.Latitude - 1); // TODO : longitude remise à zéro
    }

    IncrémenterLongitude() {
        return new Point(0, this.Longitude + 1); // TODO : latitude remise à zéro
    }

    DécrémenterLongitude() {
        return new Point(0, this.Longitude - 1); // TODO : latitude remise à zéro;
    }

    Modulo(_taille: number) {
        return new Point(
            this.modulo(this.Latitude, _taille),
            this.modulo(this.Longitude, _taille)
        );
    }

    private modulo(num: number, mod: number){
        const valeurRéduiteSignée = (num % mod) % -mod;
        const valeurNonSignée = valeurRéduiteSignée + mod;
        return valeurNonSignée % mod;
    }
}