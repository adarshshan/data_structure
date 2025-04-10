class Graph {
    constructor() {
        this.vertices = new Map();
    }
    addVertex(vertex) {
        if (!this.vertices.has(vertex)) this.vertices.set(vertex, []);
    }
    addEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            this.vertices.get(vertex1).push(vertex2);
            this.vertices.get(vertex2).push(vertex1);
        }
    }
    removeVertex(vertex) {
        if (this.vertices.has(vertex)) {
            this.vertices.delete(vertex);
            for (const adjacentVertex of this.vertices.keys()) {
                this.vertices.set(adjacentVertex, this.vertices.get(adjacentVertex).filter((v) => v !== vertex)
                );
            }
        }
    }
    removeEdge(vertex1, vertex2) {
        // Remove edges for both vertices since it's an undirected graph
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            this.vertices.set(
                vertex1,
                this.vertices.get(vertex1).filter((v) => v !== vertex2)
            );
            this.vertices.set(
                vertex2,
                this.vertices.get(vertex2).filter((v) => v !== vertex1)
            );
        }
    }

    depthFirstSearch(startVertex, visited = new Set()) {
        if (!this.vertices.has(startVertex)) {
            console.error("Vertex not found in the graph");
            return;
        }

        console.log(startVertex);
        visited.add(startVertex);

        for (const neighbor of this.vertices.get(startVertex)) {
            if (!visited.has(neighbor)) {
                this.depthFirstSearch(neighbor, visited);
            }
        }
    }

    breadthFirstSearch(startVertex) {
        if (!this.vertices.has(startVertex)) {
            console.error("Vertex not found in the graph");
            return;
        }

        const queue = [startVertex];
        const visited = new Set();
        visited.add(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            for (const neighbor of this.vertices.get(currentVertex)) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
    }
}

// Example Usage:

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

console.log("DFS:");
graph.depthFirstSearch("A");

console.log("\nBFS:");
graph.breadthFirstSearch("A");

// Removing vertex "B" and edge ("C", "D")
graph.removeVertex("B");
graph.removeEdge("C", "D");

console.log("\nAfter removal:");
console.log("DFS:");
graph.depthFirstSearch("A");

console.log("\nBFS:");
graph.breadthFirstSearch("A");
