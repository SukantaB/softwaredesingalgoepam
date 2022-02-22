// your code goes here

import { Consumables } from "./Consumable";

const weightPerSlice = 5
export class Pizza extends Consumables{
    private numberOfSlices: number;
    private slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean){
        super("pizza", numberOfSlices, numberOfSlices * weightPerSlice , spoiled);
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }

    public eat(): string {
        if(this.slicesEaten < this.numberOfSlices){
            this.slicesEaten = this.slicesEaten + 1;
            if(this.slicesEaten >= this.numberOfSlices) this.setConsumed(true)
            return ""
        }
        else return ""
    }

}