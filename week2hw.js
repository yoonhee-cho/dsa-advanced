/**
Challenge 1: Please solve this problem using BFS & DFS.  

Given a binary tree, create a method called countLeafs(tree) 
that returns the count of all the LEAFS of the tree.  
 
For example, given the following example:  

            8
           ↙️ ↘️
          3    10
        ↙️  ↘️      ↘️
       1    6     14
           ↙️ ↘️   ↙️ 
          4  7  13 

NOTE: countLeafs(tree) takes in a argument of a tree.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        let curr = this.root;

        if (!this.root) {
            this.root = newNode;
            return this;
        } 
        
        while(true) { 
            if(curr.value < value) {
                if(!curr.right){
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
            else { // curr.value > value
                if(!curr.left) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            }
        }
    }

    countLeafs() {
        // use bfs get the last level length....

        let currNode = this.root;
        let visited = [];
        let queue = [currNode];
        let count = 0;

        while(queue.length) {
            currNode = queue.shift();
            visited.push(currNode.value);

            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
            if(!currNode.left && !currNode.right) count++;
        }
        return count;
    }
    
}

const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(6);
tree.insert(4)
tree.insert(7)

tree.insert(10)
tree.insert(14)
tree.insert(13)
console.log(tree.countLeafs()); // 3


/**
Challenge 2: Please solve this problem using either BFS or DFS.  
 
Given a binary tree, create a method called countOdds(tree) 
that returns a object that has a SORTED list of all odd nodes and count.  
 
For example, given the following example:  

              8
           ↙️    ↘️
          3      10
        ↙️  ↘️       ↘️
       1     6       14
           ↙️   ↘️     ↙️ 
          4     7   13 

The following tree when passed in to the countOdds(tree) function should return something like this: 
{
    nodes: [1, 3, 7, 13],
    count: 4
}
 
NOTE: countOdds(tree) takes in a argument of a tree. E.g. 
const tree = new BinarySearchTree();
tree.insert(8)
tree.insert(3)
tree.insert(1)
tree.insert(6)
tree.insert(4)
tree.insert(7)
tree.insert(10)
tree.insert(14)
tree.insert(13)
tree.countOdds(tree)
 */


/**
Challenge 3: Please solve this problem using either BFS or DFS.  
 
Given two binary trees, create a method called same(tree1, tree2) 
that returns true or false if the two binary trees are the same! 
 
For example, given the following example:  
            8                   
           ↙️ ↘️
          3    10
        ↙️  ↘️      ↘️
       1    6     14
           ↙️ ↘️   ↙️ 
          4  7  13 

The following tree when passed in to the same(tree1, tree2)  
function should return something like this: true 
 
NOTE: same(tree1, tree2)  takes in a argument of tree1 and tree2. E.g.         

In order to create a tree to test, for example for the following above, you can create this tree like so:  
var tree1 = new BinarySearchTree(); 
var tree2 = new BinarySearchTree(); 
tree1.insert(8); 
tree1.insert(3); 
tree1.insert(1); 
tree2.insert(8); 
tree2.insert(3); 
tree2.insert(1); 
tree1.same(tree1, tree2)
 */