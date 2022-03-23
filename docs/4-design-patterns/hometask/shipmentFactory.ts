import { Shipment } from "./shipment";
import { IShipmentObject } from "./types";
import { UtilFunc } from "./utils";
class ShipmentFactoryClass {
    private static instance: ShipmentFactoryClass;
    public static getInstance(): ShipmentFactoryClass {
        if (!ShipmentFactoryClass.instance) {
            ShipmentFactoryClass.instance = new ShipmentFactoryClass();
        }
        return ShipmentFactoryClass.instance;
      } 
    createShipment(item: IShipmentObject): Shipment{
        const Shipment = UtilFunc.shipmentBuilder(item);
        return Shipment
    }
}

export const ShipmentFactory = ShipmentFactoryClass.getInstance()