class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addNode(node) {
        if (!this.adjacencyList[node]) this.adjacencyList[node] = [];
    }
    addConnection(node1, node2) {
        if (!this.hasNode(node1)) this.addNode(node1)
        if (!this.hasNode(node2)) this.addNode(node2);
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }
    removeNode(node) {
        while (this.adjacencyList[node].length) {
            const adjacentNode = this.adjacencyList[node].pop();
            this.removeConnection(node, adjacentNode);
        }
        delete this.adjacencyList[node];
    }
    removeConnection(node1, node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(item => item !== node2);
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(item => item !== node1);
    }
    hasNode(node) {
        return this.adjacencyList[node] ? true : false;
    }
    printGraph(){
        let keys=this.adjacencyList.keys();
        for(let v of keys){
            let eList=this.adjacencyList.get(v);
            let data='';
            for(let e in eList){
                data+=eList[e]+' '; 
            }
            console.log(v + '->' +data);
        }
    }
}
const graph = new Graph();
graph.addNode('adarsh')
graph.addNode('shanu')
graph.addNode('king')
graph.addConnection('adarsh', 'kerala')
graph.addConnection('abinesh', 'kerala')
graph.addConnection('abinesh', 'king')
graph.addConnection('king', 'adarsh')
graph.addConnection('king', 'shanu')
console.log(graph)
graph.printGraph()