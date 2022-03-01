import { Item } from "./item";
import { Pages } from "./pages";

export class Magazine extends Item{

    constructor(title: string , pages: Pages,){
        super(pages, title)
    }

    public toString(){
        return `Magazine: ${this.getTitle} with number of pages: ${this.numberOfPages}`
    }
}