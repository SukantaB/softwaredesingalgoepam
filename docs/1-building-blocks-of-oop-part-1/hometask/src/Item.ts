import { Comparable } from './Comparable';

let id = -1;
let counter: number = 0;

export abstract class Item implements Comparable<Item> {

    private id: number;
    private value: number;
    private weight: number;
    private name: string;

    constructor(name: string, value: number, weight: number){
       id = id+1;
       this.id = id;
       this.name = name;
       this.value = value;
       this.weight = weight;
       counter = counter + 1
    }
    
    public static numberOfItems(){
        return counter;
    }

    public compareTo(other: Item): number {
        // your code goes here
        return this.value > other.value  ?  1 : -1;
    }

    public use(): void{

    }

    public getId(){
        return this.id
    }

    toString(): string{
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`
    }

    public getValue(): number{
        return this.value;
    }
    
    public getName(): string{
         return this.name
    }

    public getWeight(): number{
        return this.weight;
    }

    public setValue(value: number){
        this.value = value;
    }

    public setName(name: string){
        this.name = name
    }

    public setWeight(weight: number){
        this.weight = weight;
    }
    
    public static reset(){
        counter = 0
    } 
}
