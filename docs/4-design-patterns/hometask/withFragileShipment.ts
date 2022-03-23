import { Shipment } from "./shipment";
import { ShipmentDecorator } from "./shipmentDecorator";

export class WithFragileShipment extends ShipmentDecorator {
    constructor(Shipment: Shipment){
        super(Shipment)
    }
    ship(): string {
        return this.getShipment.ship() + '**MARK FRAGILE**'
    }
}