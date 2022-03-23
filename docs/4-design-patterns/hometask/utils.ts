import { AirAsiaShipperInstance } from "./airAsiaShipper";
import { ChicagoSprintShipperInstance } from "./chicagoSprintShipper";
import { LetterShipment } from "./letterShipment";
import { OverSizeShipment } from "./oversizeShipment";
import { PacificParcelShipperInstance } from "./pacificParcelShipper";
import { PackageShipment } from "./packageShipment";
import { Shipment } from "./shipment";
import { Shipper } from "./shipper";
import { IShipmentObject, SHIPMENT_TYPES, WEIGHT, ZIP_CODE_TYPE } from "./types";
import { WithFragileShipment } from "./withFragileShipment";
class Utils {
    private static instance: Utils;
    public static getInstance(): Utils {
        if (!Utils.instance) {
            Utils.instance = new Utils();
        }
        return Utils.instance;
      } 
    public shipmentBuilder = (item: IShipmentObject): Shipment  => {
        const Shipper = this.getShipper(item.ToZipCode)
        if(item.Weight <= 15){
            return new LetterShipment(item, Shipper)
        }
        else if(item.Weight <= 160){
            return new PackageShipment(item , Shipper)
        }
        else return new OverSizeShipment(item , Shipper)        
        // example with decorator
        // new WithFragileShipment(new PackageShipment(item , Shipper))
    }
    public getShipper = (zipCode: ZIP_CODE_TYPE): Shipper =>{
        const code = Number(zipCode[0])
        if(code <=3) return AirAsiaShipperInstance;
        if(code <=6) return ChicagoSprintShipperInstance;
        if(code <=9) return PacificParcelShipperInstance;
        return AirAsiaShipperInstance;
    }
}

export const UtilFunc = Utils.getInstance()