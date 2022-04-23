import { shortestDistanceNode } from './util';
import { Vertex } from './Vertex';

export interface WeightedGraph<T> {
    addVertex(key: Vertex): void;
    addEdge(vertex1: T, vertex2: T, weight: number): void;
    getGraph(): any;
}
interface Path {
    path: string[];
    distance: number;
}

interface Dijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): Path;
    findAllShortestPaths(vertex: T): Record<string, Path>;
}
export class WeightedGraphClass implements WeightedGraph<string>, Dijkstra<string> {
    private adjacencyList: any;
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertecies: Vertex) {
        this.adjacencyList.set(vertecies.key, {});
    }
    addEdge(form: string, to: string, weight: number) {
        Object.assign(this.adjacencyList.get(form), { [to]: weight });
        Object.assign(this.adjacencyList.get(to), { [form]: weight });
    }

    getGraph() {
        if (!this.adjacencyList) new Error('Empty Graph');
        return this.adjacencyList;
    }
    findShortestPath(startNode: string, endNode: string): Path {
        let distances: any = {};
        distances[endNode] = 'Infinity';
        Object.assign(distances, this.adjacencyList.get(startNode));
        let parents: any = { endNode: null };
        for (let child in this.adjacencyList.get(startNode)) {
            parents[child] = startNode;
        }
        let visited: Array<any> = [];
        let node = shortestDistanceNode(distances, visited);
        while (node) {
            let distance = distances[node];
            let children = this.adjacencyList.get(node);
            for (let child in children) {
                if (String(child) === String(startNode)) {
                    continue;
                } else {
                    let newdistance = distance + children[child];
                    if (!distances[child] || distances[child] > newdistance) {
                        distances[child] = newdistance;
                        parents[child] = node;
                    }
                }
            }
            visited.push(node);
            node = shortestDistanceNode(distances, visited);
        }
        let shortestPath = [endNode];
        let parent = parents[endNode];
        while (parent) {
            shortestPath.push(parent);
            parent = parents[parent];
        }
        shortestPath.reverse();

        let results = {
            distance: distances[endNode],
            path: distances[endNode] === "Infinity" ? [] : shortestPath,
        };
        return results;
    }
    findAllShortestPaths(node: string): Record<string, Path> {
        const obj = {};
        let count = 1;
        this.adjacencyList.forEach((value: any, key: string) => {
            if(key === node) return
            Object.assign(obj, { [count]: this.findShortestPath(node, key) });
            count = count + 1
        });
        return obj;
    }
}


/**
 * @summary online sources
 * https://levelup.gitconnected.com/finding-the-shortest-path-in-javascript-dijkstras-algorithm-8d16451eea34
 * https://reginafurness.medium.com/representing-a-weighted-graph-with-an-adjacency-matrix-in-javascript-8a803bfbc36f
 * https://www.youtube.com/watch?v=cWNEl4HE2OE
 * https://www.youtube.com/watch?v=FSm1zybd0Tk&t=399s 
 * */  

