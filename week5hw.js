
class Graph {
    constructor () {
        this.adjList = {}
    }

    addVertex(v) {
        if (!this.adjList[v]) this.adjList[v] = [];
    }

    addEdge(v1, v2) {
        if (!this.adjList[v1].includes(v2)) this.adjList[v1].push(v2);
        if (!this.adjList[v2].includes(v1)) this.adjList[v2].push(v1);
    }

    dfsRecursivelyFindOdds(startVertex) {
        let res = [];
        let visited = {};
        let adjList = this.adjList;

        (function dfs(vertex){
            if (!vertex) return null;
            if(!visited[vertex]) visited[vertex] = true;
            if(vertex % 2 === 1) {
                res.push(vertex);
            }
            
            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            })
        })(startVertex);

        return res;
    }

    dfsIterativelyFindOdds(startVertex) {
        const stack = [startVertex];
        const res = [];
        let visited = {};
        const adjList = this.adjList;

        let currVertex;
        visited[startVertex] = true;

        while (stack.length) {
            currVertex = stack.pop();
            if(currVertex % 2 === 1) {
                res.push(currVertex);
            }

            adjList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return res;
    }

    bfsIterativelyFindEvens(startVertex) {
        const res = [];
        const visited = {};
        const queue = [startVertex];
        const adjList = this.adjList;

        let currVertex;
        visited[currVertex] = true;

        while (queue.length) {
            currVertex = queue.shift();
            if(currVertex % 2 === 0) res.push(currVertex);

            adjList[currVertex].forEach(neighbor=> {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return res;
    }

    dfsRecuersivelyTraverse(startVertex) {
        const visited = {};
        const res = [];
        const adjList = this.adjList;
        
        (function dfs(vertex){
            if(!vertex) return null;

            if(!visited[vertex]) visited[vertex] = true;
            res.push(vertex);

            adjList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    dfs(neighbor);
                }
            })
        })(startVertex)
        return res;
    }
}

//let g = new Graph(); 

// g.addVertex("1") 
// g.addVertex("2") 
// g.addVertex("3") 
// g.addVertex("4") 
// g.addVertex("5") 
// g.addVertex("6") 
 
// g.addEdge("1","2") 
// g.addEdge("1","3") 
// g.addEdge("2","4") 
// g.addEdge("3","5") 
// g.addEdge("4","5") 
// g.addEdge("4","6") 

// console.log(g.bfsIterativelyFindEvens("1"));

let g = new Graph();
g.addVertex("0");
g.addVertex("1");
g.addVertex("2");
g.addVertex("3");
g.addVertex("4");

g.addEdge("0", "2");
g.addEdge("0", "3");
g.addEdge("0", "1");

g.addEdge("2", "4");

console.log(g.dfsRecuersivelyTraverse("0"));
/*
Challenge 1: Using the DFS (recursive or iterative) method on a undirected, unweighted graph, 
create a method that returns all the odd valued vertices, for example, with the following   
 
let g = new Graph(); 

g.addVertex("1") 
g.addVertex("2") 
g.addVertex("3") 
g.addVertex("4") 
g.addVertex("5") 
g.addVertex("6") 
 
g.addEdge("1","2") 
g.addEdge("1","3") 
g.addEdge("2","4") 
g.addEdge("3","5") 
g.addEdge("4","5") 
g.addEdge("4","6") 
g.addEdge("5","6") 
 
//          1 
//        /   \ 
//       2     3 
//       |     | 
//       4 --- 5 
//        \   / 
//          6 
 
// RESULT: [1, 3, 5] 
*/

/*
Challenge 2: Using the BFS (recursive or iterative) method 
on a undirected, unweighted graph, create a method 
that returns all the even valued vertices, for example, with the following   
 
let g = new Graph(); 
 
g.addVertex("1") 
g.addVertex("2") 
g.addVertex("3") 
g.addVertex("4") 
g.addVertex("5") 
g.addVertex("6") 
 
g.addEdge("1","2") 
g.addEdge("1","3") 
g.addEdge("2","4") 
g.addEdge("3","5") 
g.addEdge("4","5") 
g.addEdge("4","6") 
g.addEdge("5","6") 
 
//          1 
//        /   \ 
//       2     3 
//       |     | 
//       4 --- 5 
//        \   / 
//          6 
 
// RESULT: [2, 4, 6] 
*/

/**
Challenge 3

You are given a connected undirected graph. Perform a Depth First Traversal of the graph.
Note: Use a recursive approach to find the DFS traversal of the graph starting from the 0th
vertex from left to right according to the graph

example 1:
                        0         1   2      3    4
    input: V=5, adj = [[2,3,1], [0], [0,4], [0], [2]]
                0     
//            / |  \
//          2   3   1
          /  
//       4    
 
    output: 0 2 4 3 1
    Explanation:
        O is connected to 2, 3, 1
        1 is conntected to 0
        2 is connected to 0 and 4
        3 is connected to 0
        4 is connected to 2
        so starting from 0, it will go to 2 then 4 and then 3, and 1
        Thus, dfs will be 0 -> 2 -> 4 -> 3 -> 1
*/