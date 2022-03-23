export type WEIGHT = number;
export type SHIPMENT_TYPES = 'letter' | 'package' | 'oversized'
export type ZIP_CODE_TYPE = string

export interface IShipmentObject {
    ShipmentID : number,
    ToAddress : string,
    FromAddress : string,
    ToZipCode : string,
    FromZipCode : string,
    Weight : number
  }