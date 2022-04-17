
interface IJob{
    work: string,
    priority: number
}

export default class PriorityQueue{
    private collection: Array<IJob> = [];
    constructor(){
        this.collection = [];
    }
    
    size() {
      return this.collection.length
    }

    insertWork( works: IJob[] ){
        works.forEach(_each => {
            this.collection.push(_each);
            this.bubbleUp()
        })
    }

    isEmpty(): boolean{
        return !!this.collection.length
    }
    print(): IJob[]{
        return this.collection;
    }
    private bubbleUp(): void{
        let index = this.collection.length - 1
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            if(this.collection[parentIndex].priority > this.collection[index].priority){
                this.swap(index, parentIndex);
                index = parentIndex;
            }
            else break;
        }
    }

    private swap(index1: number, index2: number){
        [this.collection[index1], this.collection[index2]] = [this.collection[index2], this.collection[index1]]
    }

    private bubbleDown(): void {
        let parentIndex = 0;
        const length = this.collection.length;
        const elementPriority = this.collection[0].priority;
        while(true){
            let leftChildIndex = (2 * parentIndex) + 1;
            let rightChildIndex = (2 * parentIndex) + 2;
            let leftChildPriority = 0, rightChildPriority = 0;
            let indexToSwap = null;
            if(leftChildIndex < length){
                leftChildPriority = this.collection[leftChildIndex].priority
                if(leftChildPriority < elementPriority){
                    indexToSwap = leftChildIndex;
                }
            }
            if(rightChildIndex < length){
                rightChildPriority = this.collection[rightChildIndex].priority
                if(
                    (rightChildPriority < elementPriority && indexToSwap === null) ||
                    (rightChildPriority < leftChildPriority && indexToSwap !== null))
                {
                    indexToSwap = rightChildIndex
                }
            }
            if(indexToSwap === null){
                break;
            } 
            this.swap(parentIndex, indexToSwap);
            parentIndex = indexToSwap;
        }
    }
    getWork(): IJob{
        this.swap(0, this.collection.length - 1);
        let poppedNode = this.collection.pop();
        if(this.collection.length > 1){
            this.bubbleDown();
        }
        return poppedNode ?? {work: "No work found", priority : 0};
    }
}



// Taken help from -> https://medium.com/swlh/binary-heaps-priority-queues-in-javascript-44d20cf0cb6e