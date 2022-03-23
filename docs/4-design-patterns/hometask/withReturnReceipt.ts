import { Shipment } from "./shipment";
import { ShipmentDecorator } from "./shipmentDecorator";

export class WithReturnReceipt extends ShipmentDecorator {
    constructor(Shipment: Shipment){
        super(Shipment)
    }
    ship(): string {
        return this.getShipment.ship() + '**MARK RETURN RECEIPT REQUESTED**'
    }
}