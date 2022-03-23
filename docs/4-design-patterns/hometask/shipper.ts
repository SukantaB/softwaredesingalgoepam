import { SHIPMENT_TYPES, WEIGHT } from "./types"

export abstract class Shipper  {
    abstract getCost(weight: WEIGHT, type: SHIPMENT_TYPES): number
}

