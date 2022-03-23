import { Shipment } from "./shipment";

export class ShipmentDecorator {
    private shiptment: Shipment
    constructor(shipment: Shipment ){
        this.shiptment = shipment
    }
    get getShipment(): Shipment {
        return this.shiptment
    }
    ship(){
       return this.shiptment.ship();
    }
}