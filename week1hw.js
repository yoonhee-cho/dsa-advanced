/**
QUEUES

Challenge 1: Draw and explain in a diagram of how the queue data structure works.  

        1 -> 2 -> 3 -> 4
    first              last
    [where             [where `inqueue` happens]
    `dequeue`
    happens]

    • Rules : FIFO(First In First Out), insert and dequeue methods take constant time.
    • Example : file uploading (when multiple files are uploading, first file should be uploaded first)
 
Challenge 2: Create 2 methods that are:   
• enqueue (insert a element at the end of the queue) 
• dequeue (remove a element from the start of the queue) 
 
Challenge 3: Create 3 additional methods that are:  
• peek (retrieves the element at the start of the queue, WITHOUT removing it) 
• isEmpty (checks if the queue is empty – should return true or false)  
    o hint - what property of the queue can you use to build this method?  
• printQueue (prints the elements in the queue) 
*/

// class Node { 
//     constructor(value){ 
//         this.value = value;
//         this.next = null;
//     } 
// } 
 
// class Queue { 
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0; 
//     } 

//     // add in the end = push
//     enqueue(val){ 
//         let newNode = new Node(val);

//         if(!this.size) {
//             this.first = newNode;
//             this.last = newNode;
//         }
//         else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }

//         this.size++;
//         return this;
//     } 

//     // remove in the beginnig = shift
//     dequeue(){ 
//         if(!this.size) return;

//         let removedFirst = this.first;
//         this.first = removedFirst.next;

//         if(this.size === 1) {
//             this.last = null;
//         }

//         this.size--;

//         return removedFirst;
//     } 
    
//     peek(){
//         if(this.first){
//             return this.first;
//         }
//         return null;
//     }
 
//     isEmpty(){
//         return !this.size;
//     }

//     printQueue(){
//         let currNode = this.first;

//         while (currNode) {
//             console.log(currNode);
//             currNode = currNode.next;
//         }
//     }
// } 

// let queue= new Queue();
// queue.enqueue(1).enqueue(2).enqueue(34);

// console.log(queue.printQueue())

/**
STACKS 
 
Challenge 1: Draw and explain in a diagram of how the stack data structure works.  

    5 top [where pop & pop happen]
    ↓
    13
    ↓
    22
    ↓
    1 bottom

    Rules : LIFO(Last in First Out) | Insertion and removal have to be done in constant time.
    Example : Recursion and Callstack
 
Challenge 2: Create 2 methods that are:   
• push (insert a element to the top of the stack) 
• pop (remove a element from the top of the stack) 

Challenge 3: Create 3 additional methods that are:  
• peek (retrieves the element at the top of the stack, WITHOUT removing it) 
• isEmpty (checks if the stack is empty – should return true or false)  
    o hint - what property of the stack can you use to build this method J?  
• printStack (prints the elements in the stack) 
*/

// class Node { 
//     constructor(value){ 
//         this.value = value;
//         this.next = null;
//     } 
// } 
 
// class Stack { 
//     constructor(){ 
//         this.top = null;
//         this.bottom = null;
//         this.size = 0;
//     } 

//     push(val){ 
//         let newNode = new Node(val);
        
//         if (!this.size) {
//             this.top = newNode;
//             this.bottom = newNode;
//         }
//         else {
//             newNode.next = this.top;
//             this.top = newNode;
//         }
//         this.size++;
//         return this;
//     } 
 
//     pop(){ 
//         if (!this.size) return;

//         let removedTop = this.top;
//         this.top = removedTop.next;

//         if(this.size === 1) {
//             this.bottom = null;
//         }

//         this.size--;
//         return removedTop;
//     } 

//     peek() {
//        return this.top;
//     }

//     isEmpty(){
//         return !this.size;
//     }

//     printStack(){
//         let currNode = this.top;
//         while(currNode) {
//             currNode = currNode.next;
//         }
//     }
// } 

// let stack = new Stack();
// stack.push(1);
// stack.push(4);
// stack.push(3);

// console.log(stack.printStack())

/**
BINARY SEARCH TREES 
 
Challenge 1: Given the following illustrations, identify each tree as:  
- Tree : has to have 1 root
- Binary Tree : 1 root, 2 children at most per one parent node
- Binary Search Tree : 1 root, 2 children per parent, left child < parent && right child > parent
- Not Applicable  

Tree #1: Binary Tree
 
        10
       ↙  ↘
      8    15
     ↙  ↘    ↘
    3   6    20
    
Tree #2: Binary Tree

        10
       ↙  ↘
      8    15
     ↙       ↘  
    3        20
  ↙  ↘
  4   6
 
Tree #3: Tree

        10
       ↙ ↓ ↘
      8  4  15
     ↙        ↘
    3          20
     ↘
      6
  
Tree #4: Binary Search Tree

        10
       ↙  ↘
      6    15
     ↙  ↘     ↘
    3   8     20
  
Tree #5: Tree, Graph
            
           2 
        ↙   ↙  ↘
      9 ➡  8  ➡  12
     ↙          ↙  ↘
    2          44  11
  
Tree #6: Not Applicable, Graph?
           
        2   8
        ↓ ↙   ↘
        9     12
       ↙     ↙   ↘
      2     44   11

Challenge 2: Create 3 methods that are:   
• insert (inserts a node as a child of the given parent node) 
• find (retrieves a given node) 
• contains (returns a Boolean if a given node exists) 
 
Challenge 3: Create 1 additional method that is:  
• remove (removes a node and its children from the BST) 
*/

// class Node { 
//     constructor(value){ 
//         this.value = value;
//     } 
// } 
 
class BinarySearchTree { 
    constructor(){ 
    } 
    insert(value){ 
    } 
    find(value){ 
    } 
    contains(value){ 
    } 
    remove(){

    }
} 
