export class Point {
    readonly Latitude: number = 0;

    public constructor(latitude: number = 0) {
        this.Latitude = latitude;
    }

    IncrémenterLatitude() {
        return new Point(this.Latitude + 1);
    }

    DécrémenterLatitude() {
        return new Point(this.Latitude - 1);
    }
}