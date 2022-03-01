import { Pages } from "./pages"

export const PageIterator = () => class implements Iterable<string> {  
    private pages: Pages
    constructor(pages: Pages){
        this.pages = pages
    }
    *[Symbol.iterator](){
        let counter = 0
        const str = `${this.toString()}, ${this.pages.getPages[counter].toString()}`
        counter = counter + 1
        yield str
    }

    get numberOfPages(): number {
        return this.pages.getPages.length
    }

}
  
// 'Comics: Spider-Man by Stan Lee, the artist is some author, number of pages: 2, here is page with images #1 and it's material is glossy paper'

// 'Comics: Spider-Man by Stan Lee, the artist is some author, number of pages: 2, here is page with images #1 and it's material is glossy paper'