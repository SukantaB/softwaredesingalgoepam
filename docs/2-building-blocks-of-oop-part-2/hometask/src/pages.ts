import { Page } from "./page";

export class Pages{
    private pages: Page[];
    constructor(pages: Page[]){
        this.pages = pages
    }
    get getPages(): Page[]{
        return this.pages
    }
    set setPages(pages: Page[]){
        this.pages = pages
    }
}