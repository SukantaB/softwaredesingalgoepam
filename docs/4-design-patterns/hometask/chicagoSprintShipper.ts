import { Shipper } from "./shipper";
import { SHIPMENT_TYPES, WEIGHT } from "./types";

class ChicagoSprintShipper extends Shipper{
    private standardRate: number = .39 
    private static instance: ChicagoSprintShipper

    static getInstance():ChicagoSprintShipper {
        if (!ChicagoSprintShipper.instance) {
            ChicagoSprintShipper.instance = new ChicagoSprintShipper();
        }
        return ChicagoSprintShipper.instance;
    }
    getCost(weight: WEIGHT, type: SHIPMENT_TYPES): number{
        return this.getCostWithType(weight , type)
    }
    
    private getCostWithType(weight: WEIGHT, type: SHIPMENT_TYPES): number{
        switch(type){
            case 'letter':
                return weight * 0.42;
            case 'package':
                return weight * 0.20;
            default:
                return 0 
        }
    }
}

export const ChicagoSprintShipperInstance = ChicagoSprintShipper.getInstance()