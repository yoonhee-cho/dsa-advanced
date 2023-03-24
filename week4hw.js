/*
Challenge 1: Given the following graphs, appropriately label them as being 
undirected-weighted, 
directed-weighted, 
undirected-unweighted, 
and directed-unweighted.  
 
Graph 1: undirected-unweighted 
Graph 2: undirected-weighted
Graph 3: directed-weighted
Graph 4: directed-unweighted
*/

/*
Challenge 2: Define what vertices and edges mean to you.  
    verticies are like nodes (fundamental unit of the graph)
    edges are connection between two vertices(nodes).
*/

/*
Challenge 3: You were just hired as a backend engineer for a new start-up 
to compete with LinkedIn, and your first task as a engineer was to 
create a undirected, unweighted graph of the first 4 users of the website. 
Create a Graph class that utilizes a adjacencyList to structure the graph of 
the mutual connections between each user.  
 
Create the following methods:  
    - addVertex(v): v – vertex to add 
    - addEdge(v1, v2): v1 – first vertex to add, v2 – second vertex to add 
    - removeEdge(v1, v2): v1 – first vertex to remove, v2 – second vertex to remove 
    - removeVertex(v): v – vertex to remove 
 
    Step 1: Seed some data - here is the list of friends and their initial mutual connections:
        - Tom Brady: [‘Lebron James’, ‘Tony Kim’] 
        - Tony Kim: [‘Patrick Mahomes’, ‘Lebron James’, ‘Tom Brady’] 
        - Patrick Mahomes: [‘Lebron James’] 
        - Lebron James: [‘Tom Brady’, ‘Tony Kim’, ‘Patrick Mahomes’] 
 
    Step 2: Lebron James no longer wants a account on our platform, 
    go ahead and remove the connection between those connections.  
    
        Should look like this:  
        - Tom Brady: [‘Tony Kim’] 
        - Tony Kim: [‘Patrick Mahomes’, ‘Tom Brady’] 
        - Patrick Mahomes: [] 
*/

class Graph {
    constructor () {
        this.adjList = {};
    }

    addVertex(v) {
        if (!this.adjList[v]) this.adjList[v] = [];
    }

    addEdge(v1, v2) {
        if (!this.adjList[v1].includes(v2)) this.adjList[v1].push(v2);
        if (!this.adjList[v2].includes(v1)) this.adjList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(v => v !== v2);
        this.adjList[v2] = this.adjList[v2].filter(v => v !== v1);
    }

    removeVertex(v) {
        this.adjList[v].map(neighborV => this.removeEdge(v, neighborV));
        delete this.adjList[v];
    }
}

let g  = new Graph();
g.addVertex('Tom Brady');
g.addVertex('Tony Kim');
g.addVertex('Patrick Mahomes');
g.addVertex('Lebron James');

g.addEdge('Tom Brady', 'Lebron James');
g.addEdge('Tom Brady', 'Tony Kim');             
g.addEdge('Lebron James', 'Tony Kim');
g.addEdge('Lebron James', 'Patrick Mahomes');
g.addEdge('Tony Kim', 'Patrick Mahomes');

g.removeVertex('Lebron James');
console.log(g)