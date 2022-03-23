import { Shipment } from "./shipment";
import { ShipmentDecorator } from "./shipmentDecorator";
import { Shipper } from "./shipper";
import { IShipmentObject, SHIPMENT_TYPES } from "./types";

export class OverSizeShipment extends Shipment{
    constructor(item: IShipmentObject, shipper: Shipper){
        super(item, shipper)
    }
    get type(): SHIPMENT_TYPES {
        return 'oversized'
    }
    ship(): string {
        const item = this.getItem
        return `TYPE: ${this.type} From: ${item.FromAddress} To: ${item.ToAddress} Cost: ${this.getShipper.getCost(item.Weight, this.type)}`
    }
}
