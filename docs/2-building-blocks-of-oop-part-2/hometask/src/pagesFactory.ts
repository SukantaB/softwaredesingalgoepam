
import {Pages} from "./pages"
import {Page} from "./page"


export class PagesFactory{
    static build(arr: [number, string, string][]): Pages{
        const pagesArray: Page[] = arr.map(_each => {
            const [pageNumber, pageType, pageMaterial] = _each
            return new Page(pageNumber, pageType, pageMaterial);
        })
        return new Pages(pagesArray)
    }
}