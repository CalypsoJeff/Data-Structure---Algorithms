class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1))
    }
    edgeRemoval(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.edgeRemoval(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex}=>${[...this.adjacencyList[vertex]]} `);
        }
    }
    dfs(startVertex,visited={} ){
        if(!this.adjacencyList[startVertex]) return;
        console.log(startVertex);
        visited[startVertex] = true;
        for(const neighbor of this.adjacencyList[startVertex]){
            if(!visited[neighbor]){
                this.dfs(neighbor,visited)
            }
        }
    }
    bfs(startVertex){
        const queue = [startVertex];
        const visited = {[startVertex]:true}
        while(queue.length>0){
            const currentVertex = queue.shift();
            console.log(currentVertex);
            for(const neighbor of this.adjacencyList[currentVertex]){
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}
const graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()
console.log(graph.hasEdge("A","C"));
console.log(graph.hasEdge("A","B"));
// graph.edgeRemoval("A","B")
graph.removeVertex("B")
console.log(graph.hasEdge("A","B"));
graph.display()



