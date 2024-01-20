class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();//O(1)
    }
    addEdge(vertex1, vertex2) {
        if (!this.hasEdge(vertex1)) this.addVertex(vertex1);
        if (!this.hasEdge(vertex2)) this.addVertex(vertex2);
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }//O(1)
    removeVertex(vertex) {
        for (let neighbor in this.adjacencyList[vertex]) {
            this.removeEdge(neighbor, vertex)
        }
        delete this.adjacencyList[vertex]
    }//O(1)
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    hasEdge(vertex) {
        return this.adjacencyList[vertex] ? true : false;
    }

    bfs() {
        let visited = {};
        let result = [];
        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                let queue = [vertex];
                visited[vertex] = true;
                while (queue.length) {
                    let currentVertex = queue.shift();
                    result.push(currentVertex);

                    for (let neighbor of this.adjacencyList[currentVertex]) {
                        if (!visited[neighbor]) {
                            queue.push(neighbor);
                            visited[neighbor] = true;
                        }
                    }
                }
            }
        }

        return result;
    }

    dfs() {
        let visited = {};
        let result = [];

        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                let stack = [vertex];
                visited[vertex] = true;

                while (stack.length) {
                    let currentVertex = stack.pop();
                    result.push(currentVertex);

                    for (let neighbor of this.adjacencyList[currentVertex]) {
                        if (!visited[neighbor]) {
                            stack.push(neighbor);
                            visited[neighbor] = true;
                        }
                    }
                }
            }
        }

        return result;
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "->", [...this.adjacencyList[vertex]])
        }
    }
}


const graph = new Graph();

graph.addVertex("0")
graph.addVertex("1")
graph.addVertex("5")
graph.addVertex("3")
graph.addVertex("4")
graph.addVertex("6")
graph.addVertex("7")
graph.addVertex("8")
graph.addVertex("16")
graph.addVertex("20")
graph.addVertex("30")
graph.addVertex("21")


graph.addEdge("5", "3")
graph.addEdge("3", "0")
graph.addEdge("0", "1")
graph.addEdge("0", "6")
graph.addEdge("6", "7")
graph.addEdge("6", "8")
graph.addEdge("6", "4")
graph.addEdge("4", "20")
graph.addEdge("7", "8")
graph.addEdge("7", "16")
graph.addEdge("30", "21")


console.log(graph)
console.log(`` + graph.bfs())
console.log(`` + graph.dfs())
graph.display()