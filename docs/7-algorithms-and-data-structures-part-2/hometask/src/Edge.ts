export class Edge {
    public from: string;
    public to: string;
    public weight: number;
    constructor(form: string, to: string, weight: number){
        this.from = form;
        this.to = to;
        this.weight = weight
    }
}