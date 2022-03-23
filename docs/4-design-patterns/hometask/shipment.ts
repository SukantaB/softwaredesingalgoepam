import { Shipper } from "./shipper";
import { IShipmentObject } from "./types"

let ShipmentID = 0
export abstract class Shipment  {
   private item : IShipmentObject
   private shipper: Shipper
   constructor(item: IShipmentObject, Shipper: Shipper ){
      this.item = item;
      this.shipper = Shipper;
   }
   getShipmentID(): number{
      return this.item.ShipmentID || ShipmentID++
   }
   get getItem(): IShipmentObject {
      return this.item;
   }
   get getShipper(): Shipper {
      return this.shipper
   }
   getInstance() : Shipment{
      return
   }
   abstract ship(): string
}