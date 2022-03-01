export class Page {
    private pageNumber: number;
    private pageType: string;
    private pageMaterial: string;

    constructor(pageNumber: number, pageType: string, pageMaterial : string){
        this.pageMaterial = pageMaterial
        this.pageNumber = pageNumber
        this.pageType = pageType
    }

    public toString(): string{
        return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`
    }
}