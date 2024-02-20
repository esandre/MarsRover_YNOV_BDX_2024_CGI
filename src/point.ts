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
}