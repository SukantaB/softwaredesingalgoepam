import { Item } from "./item";
import { Pages } from "./pages";

export class Comics extends Item{
    private author: string;
    private artist: string;

    constructor(title: string ,author: string,artist: string,  pages: Pages,){
        super(pages, title)
        this.artist = artist
        this.author = author
    }

    public toString(){
        return `Comics: ${this.getTitle} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.numberOfPages}`
    }
}