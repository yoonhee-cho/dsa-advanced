/**
Challenge 1: Given the following trees, label them as:  
• Binary Search Tree 
• Max Binary Heap : parent node val > child node val
• Min Binary Heap : parent node val < child node val
 
Tree #1 : Binary Search Tree

         33
       /    \
      18     41
    /   \    /
   12   27  39     

Tree #2 : Max Binary Heap

         41
       /    \
      39     33
    /   \    /
  18    27  12     

  Tree #3 : Min Binary Heap

          6
       /    \
      7     12
    /  \    /
  10   15  17     
*/

/**
Challenge 2: Given the following max binary heap trees, 
create a function called maxValue() that returns the 
VALUE of the largest number in the tree.

         6
       /   \
      5     3
    /  \   /
   4   2  1  
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(el) {
    this.values.push(el);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    const childEl = this.values[childIdx];

    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx -1)/2);
      let parentEl = this.values[parentIdx];

      if (childEl < parentEl) break;

      this.values[parentIdx] = childEl;
      this.values[childIdx] = parentEl;

      childIdx = parentIdx;
    }
  }

  maxValue() {
    return this.values[0];
  }
}

let heap = new MaxBinaryHeap(); 
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(12)
heap.insert(55)
console.log(heap.maxValue());

/**
Challenge 3: Given the following min binary heap tree, 
create a function called minValue() that returns the 
VALUE of the smallest number in the tree.  

         1
       /   \
      3     2
    /  \   /
   4   6  5  
*/

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(el){
    this.values.push(el);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    const childEl = this.values[childIdx];

    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx -1)/2);
      let parentEl = this.values[parentIdx];

      if (childEl > parentEl) break;

      this.values[parentIdx] = childEl;
      this.values[childIdx] = parentEl;

      childIdx = parentIdx;
    }
  }

  minValue() {
    return this.values[0];
  }
}

let minHeap = new MinBinaryHeap(); 
minHeap.insert(1)
minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(4)
minHeap.insert(6)
minHeap.insert(5)
console.log(minHeap.minValue());

/**
Challenge 4: Given the following binary heap tree, 
create a function called isMaxHeap(heap) that accepts a heap as a argument, 
and it should return either true or false if it’s a valid max heap tree.  
 
Example below should return TRUE 
         6
       /   \
      5     3
    /  \   /
   4   2  1  
*/

function isMaxHeap(tree){
  let parentEl = tree.values[0];
  let parentIdx = 0;
  let leng = tree.values.length;

  while (parentIdx <= Math.floor((leng-2)/2)) {
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;

    if (leftChildIdx < leng && tree.values[leftChildIdx] > parentEl) return false;

    if (rightChildIdx < leng && tree.values[rightChildIdx] > parentEl) return false;
    
    parentIdx++;
    parentEl = tree.values[parentIdx];
  }

  return true;
}

/** 
 *  0  1  2  3  4  5
 * [6, 5, 3, 4, 2, 1]
        6
      /   \
    5     3
  /  \   /
 4   2  1 
*/ 

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(6)
maxHeap.insert(5)
maxHeap.insert(3)
maxHeap.insert(4)
maxHeap.insert(2)
maxHeap.insert(1)


console.log(isMaxHeap(maxHeap))