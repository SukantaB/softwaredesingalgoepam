import { Shipment } from "./shipment";
import { Shipper } from "./shipper";
import { IShipmentObject, SHIPMENT_TYPES } from "./types";

export class LetterShipment extends Shipment{
    constructor(item: IShipmentObject, shipper: Shipper){
        super(item, shipper)
    }
    get type(): SHIPMENT_TYPES {
        return 'letter'
    }
    ship(): string {
        const item = this.getItem
        return `TYPE: ${this.type} From: ${item.FromAddress} To: ${item.ToAddress} Cost: ${this.getShipper.getCost(item.Weight, this.type)}`
    }
}