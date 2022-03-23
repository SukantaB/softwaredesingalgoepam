import { Shipper } from "./shipper";
import { SHIPMENT_TYPES, WEIGHT } from "./types";
import { UtilFunc } from "./utils";

class AirAsiaShipper extends Shipper{
    private standardRate: number = .39 
    private static instance: AirAsiaShipper

    static getInstance():AirAsiaShipper {
        if (!AirAsiaShipper.instance) {
            AirAsiaShipper.instance = new AirAsiaShipper();
        }
        return AirAsiaShipper.instance;
    }
    getCost(weight: WEIGHT, type: SHIPMENT_TYPES): number{
        return this.getCostWithType(weight , type)
    }

    private getCostWithType(weight: WEIGHT, type: SHIPMENT_TYPES): number{
        switch(type){
            case 'letter':
                return weight * 0.39;
            case 'package':
                return weight * 0.25;
            default:
                return (weight * this.standardRate) + 10 
        }
    }
}

export const AirAsiaShipperInstance = AirAsiaShipper.getInstance()