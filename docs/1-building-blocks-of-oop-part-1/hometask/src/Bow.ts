// your code goes here

// your code goes here

import { Weapon } from "./Weapon";

export class Bow extends Weapon{

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number){
        super("bow", baseDamage, baseDurability, value, weight)
    }

    public polish(): void {
        const baseDurability = this.getBaseDuribility();
        const increament =  this.getBaseDuribility() + this.MODIFIER_CHANGE_RATE;
        const maxPossibleEffectveDurability = 1;
        const durabilityAfterPolish = baseDurability + increament;
        if(durabilityAfterPolish < maxPossibleEffectveDurability){
            this.setDurabilityModifier(increament)
        }
    }
}