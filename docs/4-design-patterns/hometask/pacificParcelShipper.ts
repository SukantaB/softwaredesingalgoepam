import { Shipper } from "./shipper";
import { SHIPMENT_TYPES, WEIGHT } from "./types";

class PacificParcelShipper extends Shipper{
    private standardRate: number = .39 
    private static instance: PacificParcelShipper

    static getInstance():PacificParcelShipper {
        if (!PacificParcelShipper.instance) {
            PacificParcelShipper.instance = new PacificParcelShipper();
        }
        return PacificParcelShipper.instance;
    }

    getCost(weight: WEIGHT, type: SHIPMENT_TYPES): number{
        return this.getCostWithType(weight , type)
    }
    
    private getCostWithType(weight: WEIGHT, type: SHIPMENT_TYPES): number{
        switch(type){
            case 'letter':
                return weight * 0.51;
            case 'package':
                return weight * 0.19;
            default:
                return weight * (this.standardRate + 0.02) 
        }
    }
}

export const PacificParcelShipperInstance = PacificParcelShipper.getInstance()