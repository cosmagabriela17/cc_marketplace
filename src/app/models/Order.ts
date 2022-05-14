export class Order  {
    
    public orderId: number;
    public value: number;
    public numberOfProducts: number;
    public locationName: string;
    public longitude : number;
    public latitude : number;

    constructor (_orderId: number, _orderValue: number, _numberOfProducts: number, _locationName:string, _longitude : number, _latitude: number) {      
            this.latitude = _latitude;
            this.longitude = _longitude;    
            this.orderId = _orderId;
            this.value = _orderValue;
            this.numberOfProducts = _numberOfProducts;
            this.locationName = _locationName;
    }

    getOrderId() {
        return this.orderId;
    }
    getValue() {
        return this.value;
    }
    getNumberOfProducts() {
        return this.numberOfProducts;
    }
    getLocationName() {
        return this.locationName;
    }
    getLongitude() {
        return this.longitude;
    }
    getLatitude() {
        return this.latitude;
    }

}
