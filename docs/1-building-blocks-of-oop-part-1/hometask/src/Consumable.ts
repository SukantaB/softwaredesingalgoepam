// your code goes here

import { Item } from "./Item";

export class Consumables extends Item{
    private consumed: boolean;
    private spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean){
        super(name, value, weight)
        this.consumed = false;
        this.spoiled = spoiled;
    }

    public eat(): string{
        if(this.consumed) return "There is nothing left of the bread to consume."
        if(this.spoiled) return "You eat the bread. You feel sick.";
        return  "You eat the bread.";
    }
    public use(): string{
        return 
    }
    public isConsumed(): boolean{
        return this.consumed;
    }
    public setConsumed(consumed: boolean){
        this.consumed = consumed;
    }
    public isSpoiled(): boolean {
        return this.spoiled;
    }
    public toString(): string {
        return
    }
}