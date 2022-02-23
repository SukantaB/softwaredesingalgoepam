// your code goes here
export {}
import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory{
    private items: Item[] = [];

    constructor(){

    }
    
    public sort(comparator?: ItemComparator): void{
        if(!comparator){
            this.items.sort(this.customSortValue);
        }
        this.items.sort(comparator.compare)
    }

    public addItem(item: Item){
        this.items.push(item);
    }

    public toString(): string{
        return this.items.join(", ")
    }

    private customSortValue(first: Item, second: Item){
        return first.compareTo(second);
    }

}