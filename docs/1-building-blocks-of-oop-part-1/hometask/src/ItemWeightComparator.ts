import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        // your code goes here
        const firstWeight = first.getWeight()
        const secondWeight = second.getWeight();
        if(firstWeight === secondWeight)
        return first.compareTo(second)
        else return firstWeight > secondWeight ? 1 : -1
    }
}
