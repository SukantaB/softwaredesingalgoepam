import { MAX } from '../src/config';
import PriorityQueue from '../src/priorityqueue';
import Utils from "../src/utils"

describe('PriotityQueue', () => {
  it('priority queue', () => {
    const queue = new PriorityQueue()
    const utils = new Utils()
    const workArray = new Array(MAX).fill(1).map(e => {
      const priority = utils.randomizer()
      return ({
        work : `Work priority - ${priority}`,
        priority: priority
      })
    })
    queue.insertWork(workArray)
    workArray.forEach(()=>{
      const work = queue.getWork()
      console.log(work);
      expect(work.work).toBeDefined()
    })
  });
  it('no work', ()=>{
    const queue = new PriorityQueue()
    expect(queue.getWork().work).toEqual("No work found")
  })
});
