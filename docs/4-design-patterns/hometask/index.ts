import { Shipment } from "./shipment";
import { ShipmentFactory } from "./shipmentFactory";
import { IShipmentObject } from "./types";



class ClientClass{
  private static instance: ClientClass;

  private constructor() {}

  public static getInstance(): ClientClass {
    if (!ClientClass.instance) {
        ClientClass.instance = new ClientClass();
    }
    return ClientClass.instance;
  }  

  public createShipment(item: IShipmentObject) {
    return ShipmentFactory.createShipment(item).ship()
  }
}

export const Client = ClientClass.getInstance();

const item:IShipmentObject = {
  ShipmentID : 0,
  ToAddress : '1-2',
  FromAddress : '2-1',
  ToZipCode : '12',
  FromZipCode : '23',
  Weight : 12
}

Client.createShipment(item)