export class Coordinates  {
    
    longitude : number;
    latitude : number;

    constructor (_longitude : number, _latitude: number) {
            this.latitude = _latitude;
            this.longitude = _longitude;    

    }

    getLongitude() {
        return this.longitude;
    }

    getLatitude() {
        return this.latitude;
    }
}