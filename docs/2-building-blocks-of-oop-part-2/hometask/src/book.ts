import { Item } from "./item";
import { Pages } from "./pages";

export class Book extends Item{
    private author: string;
    
    constructor(title: string ,author: string, pages: Pages,){
        super(pages, title)
        this.author = author
    }

    public toString(){
        return `Book: ${this.getTitle} by ${this.author} with number of pages: ${this.numberOfPages}`
    }
}