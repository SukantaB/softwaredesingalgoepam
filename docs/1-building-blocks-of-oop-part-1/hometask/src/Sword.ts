// your code goes here

import { Weapon } from "./Weapon";

export class Sword extends Weapon{

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number){
        super("sword", baseDamage, baseDurability, value, weight)
    }

    public polish(): void {
        const baseDamage = this.getBaseDamage();
        const increament =  this.getDamageModifier() + this.MODIFIER_CHANGE_RATE;
        const maxPossibleEffectveDamage = (baseDamage / 4) + baseDamage;
        const damageAfterPolish = baseDamage + increament;
        if(damageAfterPolish < maxPossibleEffectveDamage){
            this.setDamageModifier(increament)
        }
    }
}