// your code goes here

import { Item } from "./Item";

export class Weapon extends Item{
    private baseDamage: number;
    private damageModifier: number;
    private baseDuribility: number;
    private durabilityModifier: number;
    public MODIFIER_CHANGE_RATE: number;
    
    constructor(
        name: string, 
        baseDamage: number, 
        baseDuribility: number, 
        value: number,
        weight: number
    ){
        super(name, value, weight);
        this.baseDuribility = baseDuribility;
        this.baseDamage = baseDamage
        this.MODIFIER_CHANGE_RATE = 0.01;
        this.durabilityModifier = 0.05;
        this.damageModifier = 0.05;
    }

    public polish(): void{

    }

    public use(): string{
        const damage = this.getDamage().toFixed(2);
        this.durabilityModifier = this.durabilityModifier - this.MODIFIER_CHANGE_RATE;
        const durability = this.getDurability();
        if(durability <= 0) return "You can't use the hammer, it is broken.";
        const result = `You use the ${this.getName()}, dealing ${damage} points of damage.`;
        if(durability < this.MODIFIER_CHANGE_RATE) return result + "The hammer breaks."
        return result
    }

    public toString(): string {
        const damage = this.getDamage().toFixed(2);
        const durability = (this.getDurability() * 100).toFixed(2) + "%"
        return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${damage}, Durability: ${durability}%`
    }

    public getDamage(): number{
        return this.baseDamage + this.damageModifier
    }

    public getDurability(): number{
        return this.baseDuribility + this.durabilityModifier
    }

    public setBaseDamage(damage: number){
        this.baseDamage = damage;
    }

    public getBaseDamage(): number{
        return this.baseDamage;
    }

    public setBaseDuribility(damage: number){
        this.baseDamage = damage;
    }

    public getBaseDuribility(): number{
        return this.baseDamage;
    }

    public setDamageModifier(m: number){
        this.baseDamage = m;
    }

    public getDamageModifier(): number{
        return this.baseDamage;
    }
    public setDurabilityModifier(m: number){
        this.baseDamage = m;
    }

    public getDurabilityModifier(): number{
        return this.baseDamage;
    }

}