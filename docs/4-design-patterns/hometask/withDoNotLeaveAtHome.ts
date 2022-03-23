import { Shipment } from "./shipment";
import { ShipmentDecorator } from "./shipmentDecorator";

export class WithDoNotLeaveAtHome extends ShipmentDecorator {
    constructor(Shipment: Shipment){
        super(Shipment)
    }
    ship(): string {
        return this.getShipment.ship() + '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**'
    }
}