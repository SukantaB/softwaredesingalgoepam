import { Edge } from '../src/Edge';
import { Vertex } from '../src/Vertex';
import {WeightedGraph, WeightedGraphClass} from '../src/WeighetedGraph';

describe('Page', () => {
  it('toString should return correct value', () => {
    const vertices = [
      new Vertex('1'),
      new Vertex('2'),
      new Vertex('3'),
      new Vertex('4'),
      new Vertex('5')
    ];
    const edges = [
      new Edge("vertex1", "vertex4", 3),
      new Edge("vertex1", "vertex2", 5),
      new Edge("vertex1", "vertex3", 4),
      new Edge("vertex2", "vertex4", 6),
      new Edge("vertex2", "vertex3", 5),
    ];
    const graph: WeightedGraphClass = new WeightedGraphClass();
  
    vertices.forEach(verticle => graph.addVertex(verticle));
    edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));
    console.log(graph.getGraph())
    console.log(graph.findShortestPath("vertex4", "vertex3"))
    console.log(graph.findAllShortestPaths("vertex4"));
  });
});
