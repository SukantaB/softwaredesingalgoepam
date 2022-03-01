import { Pages } from "./pages"
import { PageIterator } from "./pagesIterable"

export abstract class Item extends PageIterator(){
    private title: string
    constructor(pages:Pages, title: string){
        super(pages)
        this.title = title
    }
    abstract toString(): string;

    get getTitle(): string{
        return this.title
    }

}

